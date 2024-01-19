"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionMotionProps {
	children: ReactNode;
	delay?: number;
	fromTop?: boolean;
	topValue?: number;
	duration?: number;
}

const SectionMotion = ({ children, delay, fromTop, topValue, duration }: SectionMotionProps) => {
	return (
		<motion.div
			initial={{ y: fromTop ? (topValue ? topValue : -20) : 20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: duration ? duration : 0.5, delay: delay ? delay : 0.3 }}>
			{children}
		</motion.div>
	);
};

export default SectionMotion;
