"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
	children,
	classname,
	isNav,
}: {
	children: ReactNode;
	classname?: string;
	isNav?: boolean;
}) => {
	return (
		<div
			className={`max-w-contentContainer h-full mx-auto w-full ${isNav ? "lg:px-5" : "px-3 mdl:px-5"} ${classname}`}>
			{children}
		</div>
	);
};

export default MaxWidthWrapper;
