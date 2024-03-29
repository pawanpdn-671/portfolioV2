"use client";

import { AppContext } from "@/utils/Context";
import { useContext } from "react";

const AnimatedBlob = ({ section }: { section: string }) => {
	const { theme } = useContext(AppContext);
	return (
		<>
			{section === "hero" && (
				<svg
					className="custom-blob top-0 left-0 absolute w-[50%] h-auto -z-10"
					viewBox="0 0 600 600"
					xmlns="http://www.w3.org/2000/svg">
					<g transform="translate(300, 300)">
						<path
							d="M120,-157.6C152.7,-141.5,174.3,-102.6,194.8,-58.8C215.3,-14.9,234.6,33.8,228.4,80.8C222.2,127.8,190.4,173.1,148.1,184C105.8,195,52.9,171.5,-2.4,174.8C-57.8,178.2,-115.6,208.4,-137.5,190.9C-159.3,173.3,-145.3,108,-153,56.3C-160.7,4.6,-190.2,-33.4,-178.3,-54.2C-166.4,-75.1,-113.2,-78.8,-76.6,-93.6C-40,-108.3,-20,-134.2,11.9,-150.5C43.7,-166.8,87.4,-173.6,120,-157.6Z"
							fill="none"
							className="!fill-textGreen/5 -z-50"
						/>
					</g>
				</svg>
			)}
			{section === "hero2" && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="absolute -z-10 left-[10%] top-[50%] -translate-y-1/2 w-[90%] h-auto"
					viewBox="0 0 100 100">
					<defs>
						<linearGradient id="fill" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(45 0.5 0.5)">
							<stop
								offset="0%"
								stopColor={theme === "light-theme" ? "rgb(255, 255, 255, 0.5)" : "rgb(10, 25, 47, 0.5)"}
							/>
							<stop
								offset="100%"
								stopColor={theme === "light-theme" ? "rgba(240, 240, 240, 0.80)" : "rgba(100, 255, 218, 0.05)"}
							/>
						</linearGradient>
					</defs>
					<path
						d="M86.5,65Q85,80,72,89.5Q59,99,45,91Q31,83,18.5,74.5Q6,66,9,51Q12,36,20,24Q28,12,42,13Q56,14,71.5,16.5Q87,19,87.5,34.5Q88,50,86.5,65Z"
						stroke="none"
						fill="url(#fill)"
					/>
				</svg>
			)}
			{section === "experience" && (
				<svg
					className="absolute top-0 opacity-80 w-full lg:w-1/2 right-0 h-auto -z-10"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 100 100">
					<defs>
						<linearGradient id="fill" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(54 0.5 0.5)">
							<stop offset="0%" stopColor="#ffffff" />
							<stop offset="100%" stopColor="#fefeee" />
						</linearGradient>
					</defs>
					<path
						d="M94,64.5Q89,79,75,81.5Q61,84,49,86.5Q37,89,29,80Q21,71,12,60.5Q3,50,7.5,36Q12,22,24,14.5Q36,7,50.5,6Q65,5,75,14.5Q85,24,92,37Q99,50,94,64.5Z"
						stroke="none"
						fill="url(#fill)"
					/>
				</svg>
			)}
		</>
	);
};

export default AnimatedBlob;
