"use client";
import React from "react";
import { about } from "@/constant";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
	return (
		<main className="max-w-container mx-auto px-5 mdl:px-20">
			<div className="py-40">
				<div className="flex items-center justify-between w-full">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="w-1/2 p-10">
						<Image
							src={"/assets/images/illus-1.svg"}
							alt="pawan pradhan"
							className="w-full h-auto"
							width={200}
							height={200}
						/>
					</motion.div>
					<div className="w-1/2 flex flex-col items-center self-center">
						<AnimatedText text={about.title} className="font-titleFont font-extrabold !text-6xl !text-left" />
						<motion.p
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1, duration: 0.5 }}
							className="text-textDark my-4 text-lg font-medium">
							{about.desc}
						</motion.p>
					</div>
				</div>
			</div>
		</main>
	);
};

export default About;
