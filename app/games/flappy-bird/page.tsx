/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useRef, useState } from "react";

interface PipeType {
	img: HTMLImageElement;
	x: number;
	y: number;
	width: number;
	height: number;
	passed: boolean;
}

const FlappyBird: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const [startGame, setStartGame] = useState(false);

	let canvasWidth = 360;
	let canvasHeight = 640;

	let birdWidth = 34;
	let birdHeight = 24;
	let birdX = canvasWidth / 8;
	let birdY = canvasHeight / 2;
	let birdImg: HTMLImageElement;

	let bird = {
		x: birdX,
		y: birdY,
		width: birdWidth,
		height: birdHeight,
	};

	let pipeArray: PipeType[] = [];
	let pipeWidth = 64;
	let pipeHeight = 512;
	let pipeX = canvasWidth;
	let pipeY = 0;

	let topPipeImg: HTMLImageElement;
	let bottomPipeImg: HTMLImageElement;

	let velocityX = -2;
	let velocityY = 0;
	let gravity = 0.4;

	let gameOver = false;
	let score = 0;

	useEffect(() => {
		if (typeof window !== "undefined") {
			document.addEventListener("keydown", function (e: KeyboardEvent) {
				if (e.code === "Space" || e.code === "ArrowUp" || e.code === "KeyX") {
					setStartGame(true);
				}
			});

			document.addEventListener("touchstart", () => setStartGame(true));
		}
	}, [window]);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const canvas = canvasRef.current;
			const context = canvas?.getContext("2d");

			let pipeInterval: NodeJS.Timeout | undefined;

			if (canvas && context) {
				canvas.width = canvasWidth;
				canvas.height = canvasHeight;

				birdImg = new Image();
				birdImg.src = "/assets/images/game/flappybird.png";
				birdImg.onload = () => {
					context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
				};

				topPipeImg = new Image();
				bottomPipeImg = new Image();
				topPipeImg.src = "/assets/images/game/toppipe.png";
				bottomPipeImg.src = "/assets/images/game/bottompipe.png";

				if (startGame) {
					requestAnimationFrame(update);
					pipeInterval = setInterval(placePipes, 1500);

					document.addEventListener("keydown", moveBird);
					document.addEventListener("touchstart", touchMoveBird);
				}
			}

			return () => {
				clearInterval(pipeInterval);
			};
		}
	}, [startGame]);

	function update() {
		requestAnimationFrame(update);
		const context = canvasRef.current?.getContext("2d");

		if (context) {
			if (gameOver) {
				return;
			}

			context.clearRect(0, 0, canvasWidth, canvasHeight);

			velocityY += gravity;
			bird.y = Math.max(bird.y + velocityY, 0);

			context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

			if (bird.y > canvasHeight) {
				gameOver = true;
			}

			for (let i = 0; i < pipeArray.length; i++) {
				let pipe = pipeArray[i];
				pipe.x += velocityX;
				context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

				if (!pipe.passed && bird.x > pipe.x + pipe.width) {
					score += 0.5;
					pipe.passed = true;
				}

				if (detectCollision(bird, pipe)) {
					gameOver = true;
				}
			}

			while (pipeArray.length > 0 && pipeArray[0].x < -pipeWidth) {
				pipeArray.shift();
			}

			context.fillStyle = "white";
			context.font = "45px sans-serif";
			context.fillText(score.toString(), 5, 45);

			if (gameOver) {
				context.fillText("GAME OVER", 5, 90);
			}
		}
	}

	function placePipes() {
		if (gameOver) {
			return;
		}

		let randomPipeY = pipeY - pipeHeight / 4 - Math.random() * (pipeHeight / 2);
		let openingSpace = canvasHeight / 4;

		let topPipe = {
			img: topPipeImg,
			x: pipeX,
			y: randomPipeY,
			width: pipeWidth,
			height: pipeHeight,
			passed: false,
		};
		pipeArray.push(topPipe);

		let bottomPipe = {
			img: bottomPipeImg,
			x: pipeX,
			y: randomPipeY + pipeHeight + openingSpace,
			width: pipeWidth,
			height: pipeHeight,
			passed: false,
		};
		pipeArray.push(bottomPipe);
	}

	function touchMoveBird() {
		velocityY = -6;

		if (gameOver) {
			bird.y = birdY;
			pipeArray = [];
			score = 0;
			gameOver = false;
		}
	}

	function moveBird(e: KeyboardEvent) {
		if (e.code === "Space" || e.code === "ArrowUp" || e.code === "KeyX") {
			velocityY = -6;

			if (gameOver) {
				bird.y = birdY;
				pipeArray = [];
				score = 0;
				gameOver = false;
			}
		}
	}

	function detectCollision(
		a: { x: number; y: number; width: number; height: number },
		b: { x: number; y: number; width: number; height: number },
	): boolean {
		return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
	}

	return (
		<div className="min-h-screen font-gameFont select-none text-center bg-no-repeat bg-cover bg-right sml:py-10">
			<canvas ref={canvasRef} className="bg-flappy-bird-bg mx-auto"></canvas>
		</div>
	);
};

export default FlappyBird;
