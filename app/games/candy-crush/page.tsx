"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineRefresh } from "react-icons/md";

const candies = ["Blue", "Orange", "Green", "Yellow", "Red", "Purple"];

const CandyCrush: React.FC = () => {
	const [score, setScore] = useState(0);
	const [moves, setMoves] = useState(50);
	const [gameOver, setGameOver] = useState(false);
	let board: any[] = [];
	const rows = 9;
	const columns = 9;

	let currTile: any;
	let otherTile: any;

	useEffect(() => {
		const board = document.getElementById("candy-crush-board");
		let gameInterval: NodeJS.Timeout | undefined;
		if (!gameOver && board) {
			board.innerHTML = "";
			startGame();
		}

		if (gameOver && board) {
			board.innerHTML = "";
		}

		if (!gameOver) {
			gameInterval = setInterval(() => {
				crushCandy();
				slideCandy();
				generateCandy();
			}, 100);
		}
		return () => clearInterval(gameInterval);
	}, [gameOver]);

	useEffect(() => {
		if (moves === 0) {
			setTimeout(() => {
				setGameOver(true);
			}, 500);
		}
	}, [moves]);

	const randomCandy = () => candies[Math.floor(Math.random() * candies.length)];

	const startGame = () => {
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
			board.push(row);
		}
	};

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
				setMoves((prev) => prev - 1);
				setScore((prev) => prev + 30);
			}
		}
	}

	function crushThree() {
		for (let r = 0; r < rows; r++) {
			for (let c = 0; c < columns - 2; c++) {
				let candy1 = board[r][c];
				let candy2 = board[r][c + 1];
				let candy3 = board[r][c + 2];

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
				let candy1 = board[r][c];
				let candy2 = board[r + 1][c];
				let candy3 = board[r + 2][c];

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
				let candy1 = board[r][c];
				let candy2 = board[r][c + 1];
				let candy3 = board[r][c + 2];

				if (candy1.src && candy2.src && candy3.src) {
					if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
						return true;
					}
				}
			}
		}

		for (let c = 0; c < columns; c++) {
			for (let r = 0; r < rows - 2; r++) {
				let candy1 = board[r][c];
				let candy2 = board[r + 1][c];
				let candy3 = board[r + 2][c];

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
				if (!board[r][c].src.includes("blank")) {
					board[idx][c].src = board[r][c].src;
					idx -= 1;
				}
			}
			for (let r = idx; r >= 0; r--) {
				board[r][c].src = "/assets/images/game/candy/blank.png";
			}
		}
	}

	function generateCandy() {
		for (let c = 0; c < columns; c++) {
			if (board[0][c].src.includes("blank")) {
				board[0][c].src = "/assets/images/game/candy/" + randomCandy() + ".png";
			}
		}
	}

	return (
		<div className="bg-candy-crush-bg min-h-screen bg-no-repeat bg-center bg-cover  text-center">
			<div className="max-w-2xl px-2 mx-auto items-center flex justify-between">
				<h2 className="my-5 font-gameFont tracking-wide text-xl sml:text-3xl">
					Score - <span className="text-black">{score}</span>
				</h2>
				{gameOver && <span className="text-xl sml:text-3xl font-gameFont text-red-400">Game Over</span>}
				<div className="block text-2xl font-titleFont tracking-tight text-zinc-50 font-bold">
					{gameOver ? (
						<button
							className="flex items-center bg-green-500 hover:bg-green-600 transition-colors duration-150 outline-none py-1 sml:py-2 px-2 rounded-lg text-white text-base md:text-base font-semibold md:font-black"
							onClick={() => {
								setScore(0);
								setGameOver(false);
								setMoves(50);
							}}>
							<MdOutlineRefresh className="text-lg md:text-xl mr-1" />
							<span className="mt-1">Try Again</span>
						</button>
					) : (
						<span className="select-none">{moves} turns left</span>
					)}
				</div>
			</div>
			<div
				id="candy-crush-board"
				className="w-[370px] h-[370px] bg-candy-crush-board-bg sml:w-[460px] sml:h-[460px] border-[5px] border-slate-400 mx-auto flex flex-wrap rounded-lg"></div>
		</div>
	);
};

export default CandyCrush;
