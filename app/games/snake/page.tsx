/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
	var blockSize = 25;
	var rows = 20;
	var cols = 20;
	var board: any;
	var context: any;

	var snakeX = blockSize * 5;
	var snakeY = blockSize * 5;

	var foodX: number;
	var foodY: number;

	var velocityX = 0;
	var velocityY = 0;

	var snakeBody: any[] = [];

	var gameOver = false;

	useEffect(() => {
		if (typeof window !== "undefined") {
			document.addEventListener("keyup", startGameHandler);
			document.addEventListener("keyup", changeDirection);

			startGame();
			return () => {
				document.removeEventListener("keyup", startGameHandler);
				document.removeEventListener("keyup", changeDirection);
			};
		}
	}, [window]);

	useEffect(() => {
		let Inter = setInterval(() => update(), 100);
		return () => clearInterval(Inter);
	}, []);

	function startGameHandler(e: KeyboardEvent) {
		if (e.code === "Enter" && gameOver) {
			gameOver = false;
			velocityX = 0;
			velocityY = 0;
			snakeX = blockSize * 5;
			snakeY = blockSize * 5;
			context.fillStyle = "black";
			context.fillRect(0, 0, board.width, board.height);
			snakeBody = [];
			startGame();
		}
	}

	function startGame() {
		board = document.getElementById("snake-game-board");
		board.height = rows * blockSize;
		board.width = rows * blockSize;
		context = board.getContext("2d");
		placeFood();
	}

	function update() {
		if (gameOver) {
			return;
		}
		context.fillStyle = "black";
		context.fillRect(0, 0, board.width, board.height);

		context.fillStyle = "red";
		context.beginPath();
		context.arc(foodX + blockSize / 2, foodY + blockSize / 2, blockSize / 2, 0, 2 * Math.PI);
		context.fill();

		if (snakeX == foodX && snakeY == foodY) {
			snakeBody.push([foodX, foodY]);
			placeFood();
		}

		for (let i = snakeBody.length - 1; i > 0; i--) {
			snakeBody[i] = snakeBody[i - 1];
		}
		if (snakeBody.length) {
			snakeBody[0] = [snakeX, snakeY];
		}

		context.fillStyle = "lime";
		snakeX += velocityX * blockSize;
		snakeY += velocityY * blockSize;
		context.fillRect(snakeX, snakeY, blockSize, blockSize);

		for (let i = 0; i < snakeBody.length; i++) {
			context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
		}

		if (snakeX < 0 || snakeX > cols * blockSize || snakeY < 0 || snakeY > rows * blockSize) {
			gameOver = true;
			context.fillStyle = "white";
			context.font = "16px courier";
			context.fillText("Press Enter to retry", 150, 20);
		}

		for (let i = 0; i < snakeBody.length; i++) {
			if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
				gameOver = true;
				context.fillStyle = "white";
				context.font = "16px courier";
				context.fillText("Press Enter to retry", 150, 20);
			}
		}
	}

	function placeFood() {
		foodX = Math.floor(Math.random() * cols) * blockSize;
		foodY = Math.floor(Math.random() * rows) * blockSize;
	}

	function changeDirection(e: KeyboardEvent) {
		if (e.code == "ArrowUp" && velocityY != 1) {
			velocityX = 0;
			velocityY = -1;
		} else if (e.code == "ArrowDown" && velocityY != -1) {
			velocityX = 0;
			velocityY = 1;
		} else if (e.code == "ArrowLeft" && velocityX != 1) {
			velocityX = -1;
			velocityY = 0;
		} else if (e.code == "ArrowRight" && velocityX != -1) {
			velocityX = 1;
			velocityY = 0;
		} else return;
	}

	return (
		<div className="font-gameFont p-0 sm:p-4">
			<div className="mx-auto w-max">
				<h3 className="text-center text-3xl py-2">Classic Snake Game</h3>
				<canvas id="snake-game-board" className="bg-black"></canvas>
			</div>
			<p className="mt-4 py-5 text-xl text-center">
				Controls — Press Arrow keys to move the snake
				<br />
				<br />
				Note - Only for PC
			</p>
		</div>
	);
};

export default Page;
