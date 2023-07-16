"use client";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<main className="max-w-container mx-auto px-5">
			<div className="min-h-screen flex flex-col justify-center">
				<motion.h4
					initial={{ y: -10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					className="text-textGreen text-lg lgl:text-2xl tracking-wide font-semibold">
					{"Hi, I'm Pawan"}
				</motion.h4>
				<div className="mt-7 text-textLight">
					<div className="flex flex-col">
						<div className="flex">
							<motion.h1
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.7 }}
								className="font-titleFont font-black text-5xl lgl:text-8xl">
								Exploring,
							</motion.h1>
							<motion.h1
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.8 }}
								className="ml-4 lgl:ml-6 font-titleFont font-black text-5xl lgl:text-8xl">
								Learning
							</motion.h1>
						</div>
						<div className="flex mt-2 lgl:mt-4">
							<motion.h1
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.9 }}
								className="font-titleFont font-black text-5xl lgl:text-8xl">
								and
							</motion.h1>
							<motion.h1
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 1 }}
								className="ml-4 lgl:ml-6 font-titleFont font-black text-5xl lgl:text-8xl">
								Developing
							</motion.h1>
						</div>
					</div>
					<motion.p
						initial={{ y: -10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 1.1 }}
						className="mt-3 lgl:mt-6 text-3xl lgl:text-7xl flex items-center font-bold">
						<span className="h-[3px] lgl:h-[5px] bg-textDark w-[50px] lgl:w-[80px] mr-8"></span>
						Things for the Web
					</motion.p>
					<a
						href="/"
						className="mt-6 lgl:mt-10 block"
						target="_blank">
						<motion.button
							initial={{ x: -30, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.2, delay: 1.2 }}
							className="px-4 py-2 rounded-md text-textGreen text-[16px] lgl:text-[20px] border border-textGreen hover:bg-hoverColor duration-300">
							{"<CheckoutProjects />"}
						</motion.button>
					</a>
				</div>
			</div>
		</main>
	);
}
