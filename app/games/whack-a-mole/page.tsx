"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdOutlineRefresh } from "react-icons/md";

const Page = () => {
	const [score, setScore] = useState(0);
	const [currMole, setCurrMole] = useState(0);
	const [currPlant, setCurrPlant] = useState(1);
	const [gameOver, setGameOver] = useState(false);
	const [disableClick, setDisableClick] = useState(false);

	const getRandomTile = () => {
		let num = Math.floor(Math.random() * 9);
		return num;
	};

	const handleSelectedTile = (tile: number) => {
		if (gameOver) return;
		if (disableClick) return;
		if (tile === currMole) {
			setScore((prev) => prev + 10);
			setDisableClick(true);
			setTimeout(() => setDisableClick(false), 500);
		} else if (tile === currPlant) {
			setGameOver(true);
		}
	};

	const getTiles = () => {
		let divs = [];
		for (let i = 0; i < 9; i++) {
			divs.push(
				<div
					key={i}
					className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] lg:w-[270px] lg:h-[270px] bg-[url('/assets/images/game/pipe.png')] cursor-pointer bg-cover"
					onClick={() => handleSelectedTile(i)}>
					{i === currMole && (
						<Image
							src="/assets/images/game/monty-mole.png"
							className="w-1/2 h-1/2 mx-auto mt-2 md:mt-4 select-none"
							width={500}
							height={500}
							alt="mole image"
							draggable={false}
						/>
					)}
					{currPlant === i && (
						<Image
							src="/assets/images/game/piranha-plant.png"
							className="w-1/2 h-1/2 mx-auto mt-2 md:mt-4 select-none"
							width={500}
							height={500}
							alt="piranha plant image"
							draggable={false}
						/>
					)}
				</div>,
			);
		}
		return divs;
	};

	const generateNumbers = () => {
		const newNumber1 = getRandomTile();
		let newNumber2;

		do {
			newNumber2 = getRandomTile();
		} while (newNumber2 === newNumber1);

		setCurrMole(newNumber1);
		setCurrPlant(newNumber2);
	};

	useEffect(() => {
		if (gameOver) return;
		const interval1 = setInterval(generateNumbers, 1000);
		const interval2 = setInterval(generateNumbers, 2000);

		return () => {
			clearInterval(interval1);
			clearInterval(interval2);
		};
	}, [gameOver]);

	return (
		<div className="min-h-screen select-none bg-whack-a-mole-bg text-center bg-no-repeat bg-cover bg-right py-10">
			<h1 className="font-gameFont text-3xl md:text-5xl text-bodyColor">Whack A Mole</h1>
			<div className="mt-5">
				<h2 className="text-xl md:text-3xl relative h-20 md:h-24 font-bold text-bodyColor">
					Score: <span className="text-green-200">{score}</span>
					{gameOver && (
						<span className="absolute left-1/2 bottom-0 -translate-x-1/2 block font-titleFont text-3xl md:text-4xl font-black text-red-600">
							GAME-OVER
						</span>
					)}
				</h2>
			</div>
			<div className="mb-4">
				<div className="w-max mx-auto">
					<div className="flex justify-end items-center h-24 px-5">
						{gameOver && (
							<div>
								<button
									className="flex items-center bg-green-500 hover:bg-green-600 transition-colors duration-150 outline-none py-2 px-4 rounded-lg text-white text-base md:text-lg font-bold md:font-black"
									onClick={() => {
										setScore(0);
										setGameOver(false);
									}}>
									<MdOutlineRefresh className="text-xl md:text-2xl mr-1" />
									Try Again
								</button>
							</div>
						)}
					</div>
					<div className="border-[3px] border-white rounded-[25px]">
						<div className="w-[360px] h-[360px] md:w-[540px] md:h-[540px] lg:w-[810px] lg:h-[810px] bg-[url('/assets/images/game/soil.png')]  flex flex-wrap rounded-[25px] bg-cover">
							{getTiles()}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
