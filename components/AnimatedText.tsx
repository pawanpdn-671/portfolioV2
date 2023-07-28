"use client";

import { motion } from "framer-motion";

type animtedTextProps = {
	text: string;
	className: string;
};

const quote = {
	initial: {
		opacity: 1,
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 0.5,
			staggerChildren: 0.1,
		},
	},
};
const singleWord = {
	initial: {
		opacity: 0,
		y: 50,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
		},
	},
};

const AnimatedText = ({ text, className }: animtedTextProps) => {
	return (
		<div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
			<motion.h1
				variants={quote}
				initial="initial"
				animate="animate"
				className={`inline-block w-full text-textLight capitalize text-8xl ${className}`}>
				{text.split(" ").map((word, index) => (
					<motion.span variants={singleWord} key={word + "-" + index} className="inline-block">
						{word}&nbsp;
					</motion.span>
				))}
			</motion.h1>
		</div>
	);
};

export default AnimatedText;
