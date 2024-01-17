"use client";
import React, { useEffect, useState } from "react";
import "../../../styles/globals.css";
import useIsMounted from "@/hooks/useIsMounted";

const candies = ["Blue", "Orange", "Green", "Yellow", "Red", "Purple"];

const CandyCrush: React.FC = () => {
	const [score, setScore] = useState(0);
	const isMounted = useIsMounted();
	let boardArr: any[] = [];
	const rows = 9;
	const columns = 9;

	let currTile: any;
	let otherTile: any;
	let start = 1;

	useEffect(() => {
		if (isMounted.current && start < 2) {
			start++;
			startGame();
		}
	}, []);

	useEffect(() => {
		let gameInterval: NodeJS.Timeout | undefined;
		if (isMounted.current) {
			gameInterval = setInterval(() => {
				crushCandy();
				slideCandy();
				generateCandy();
			}, 100);
		}
		return () => clearInterval(gameInterval);
	}, []);

	const randomCandy = () => candies[Math.floor(Math.random() * candies.length)];

	function startGame() {
		for (let r = 0; r < rows; r++) {
			const row: any[] = [];
			for (let c = 0; c < columns; c++) {
				const tile = document.createElement("img");
				tile.id = `${r}-${c}`;
				tile.src = `/assets/images/game/candy/${randomCandy()}.png`;
				tile.classList.add("custom-candy-img-tile");
				tile.addEventListener("dragstart", dragStart);
				tile.addEventListener("dragover", dragOver);
				tile.addEventListener("dragenter", dragEnter);
				tile.addEventListener("dragleave", dragLeave);
				tile.addEventListener("drop", dragDrop);
				tile.addEventListener("dragend", dragEnd);

				document.getElementById("candy-crush-board")?.appendChild(tile);

				row.push(tile);
			}
			boardArr.push(row);
		}
	}

	function dragStart(this: any) {
		currTile = this;
	}

	const dragOver = (e: any) => {
		e.preventDefault();
	};

	function dragEnter(e: any) {
		e.preventDefault();
	}

	const dragLeave = () => {};

	function dragDrop(this: any) {
		otherTile = this;
	}

	function dragEnd() {
		if (currTile.src.includes("blank") || otherTile.src.includes("blank")) {
			return;
		}
		let currCoords = currTile.id.split("-");
		let r = parseInt(currCoords[0], 10);
		let c = parseInt(currCoords[1], 10);

		let otherCoords = otherTile.id.split("-");
		let r2 = parseInt(otherCoords[0], 10);
		let c2 = parseInt(otherCoords[1], 10);

		let moveLeft = c2 == c - 1 && r == r2;
		let moveRight = c2 == c + 1 && r == r2;

		let moveUp = r2 == r - 1 && c == c2;
		let moveDown = r2 == r + 1 && c == c2;

		let isAdjacent = moveLeft || moveRight || moveUp || moveDown;
		if (isAdjacent) {
			let currImg = currTile.src;
			let otherImg = otherTile.src;
			currTile.src = otherImg;
			otherTile.src = currImg;
			let validMove = checkValid();
			if (!validMove) {
				let currImg = currTile.src;
				let otherImg = otherTile.src;
				currTile.src = otherImg;
				otherTile.src = currImg;
			} else {
				setScore((prev) => prev + 30);
			}
		}
	}

	function crushThree() {
		for (let r = 0; r < rows; r++) {
			for (let c = 0; c < columns - 2; c++) {
				let candy1 = boardArr[r][c];
				let candy2 = boardArr[r][c + 1];
				let candy3 = boardArr[r][c + 2];

				if (candy1.src && candy2.src && candy3.src) {
					if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
						candy1.src = "/assets/images/game/candy/blank.png";
						candy2.src = "/assets/images/game/candy/blank.png";
						candy3.src = "/assets/images/game/candy/blank.png";
					}
				}
			}
		}

		for (let c = 0; c < columns; c++) {
			for (let r = 0; r < rows - 2; r++) {
				let candy1 = boardArr[r][c];
				let candy2 = boardArr[r + 1][c];
				let candy3 = boardArr[r + 2][c];

				if (candy1.src && candy2.src && candy3.src) {
					if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
						candy1.src = "/assets/images/game/candy/blank.png";
						candy2.src = "/assets/images/game/candy/blank.png";
						candy3.src = "/assets/images/game/candy/blank.png";
					}
				}
			}
		}
	}

	function crushCandy() {
		crushThree();
	}

	function checkValid() {
		for (let r = 0; r < rows; r++) {
			for (let c = 0; c < columns - 2; c++) {
				let candy1 = boardArr[r][c];
				let candy2 = boardArr[r][c + 1];
				let candy3 = boardArr[r][c + 2];

				if (candy1.src && candy2.src && candy3.src) {
					if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
						return true;
					}
				}
			}
		}

		for (let c = 0; c < columns; c++) {
			for (let r = 0; r < rows - 2; r++) {
				let candy1 = boardArr[r][c];
				let candy2 = boardArr[r + 1][c];
				let candy3 = boardArr[r + 2][c];

				if (candy1.src && candy2.src && candy3.src) {
					if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
						return true;
					}
				}
			}
		}

		return false;
	}

	function slideCandy() {
		for (let c = 0; c < columns; c++) {
			let idx = rows - 1;
			for (let r = columns - 1; r >= 0; r--) {
				if (!boardArr[r][c].src.includes("blank")) {
					boardArr[idx][c].src = boardArr[r][c].src;
					idx -= 1;
				}
			}
			for (let r = idx; r >= 0; r--) {
				boardArr[r][c].src = "/assets/images/game/candy/blank.png";
			}
		}
	}

	function generateCandy() {
		for (let c = 0; c < columns; c++) {
			if (boardArr[0][c].src.includes("blank")) {
				boardArr[0][c].src = "/assets/images/game/candy/" + randomCandy() + ".png";
			}
		}
	}

	return (
		<div className="bg-candy-crush-bg min-h-screen bg-no-repeat bg-center bg-cover  text-center">
			<div className="max-w-2xl px-2 mx-auto items-center flex justify-center">
				<h2 className="my-5 font-gameFont tracking-wide text-xl sml:text-3xl">
					Score - <span className="text-black">{score}</span>
				</h2>
			</div>
			<div
				id="candy-crush-board"
				className="w-[370px] h-[370px] bg-candy-crush-board-bg sml:w-[460px] sml:h-[460px] border-[5px] border-slate-400 mx-auto flex flex-wrap rounded-lg"></div>
			<p className="mt-4 py-5 text-xl font-gameFont text-center">
				Controls — Drag and drop candy, to the matching place.
				<br />
				Note - Only for PC
			</p>
		</div>
	);
};

export default CandyCrush;
