"use client";

import { AppContext } from "@/utils/Context";
import Image from "next/image";
import { useContext } from "react";

const AnimatedBlob = ({ section }: { section: string }) => {
	const { theme } = useContext(AppContext);
	return (
		<>
			{section === "hero" && (
				<div className=" absolute h-screen max-w-[1280px] top-0 -z-10">
					<svg
						className="custom-blob absolute  top-[300px] xl:top-[0%] -left-[500px] sml:-left-[300px] xl:left-[0px] translate-x-[500px] w-[1000px] h-[1000px]"
						viewBox="0 0 600 600"
						xmlns="http://www.w3.org/2000/svg">
						<g transform="translate(300, 300)">
							<path
								d="M120,-157.6C152.7,-141.5,174.3,-102.6,194.8,-58.8C215.3,-14.9,234.6,33.8,228.4,80.8C222.2,127.8,190.4,173.1,148.1,184C105.8,195,52.9,171.5,-2.4,174.8C-57.8,178.2,-115.6,208.4,-137.5,190.9C-159.3,173.3,-145.3,108,-153,56.3C-160.7,4.6,-190.2,-33.4,-178.3,-54.2C-166.4,-75.1,-113.2,-78.8,-76.6,-93.6C-40,-108.3,-20,-134.2,11.9,-150.5C43.7,-166.8,87.4,-173.6,120,-157.6Z"
								fill="none"
								className="!fill-textGreen/5"
							/>
						</g>
					</svg>
				</div>
			)}
			{section === "hero2" && (
				<div className="absolute h-screen w-[800px] lg:w-[1200px] top-0 -z-10">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
						<defs>
							<linearGradient id="fill" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(45 0.5 0.5)">
								<stop offset="0%" stop-color={theme === "light-theme" ? "#ffffff" : "rgb(10, 25, 47, 0.5)"} />
								<stop
									offset="100%"
									stop-color={theme === "light-theme" ? "#dadade" : "rgba(100, 255, 218, 0.05)"}
								/>
							</linearGradient>
						</defs>
						<path
							d="M86.5,65Q85,80,72,89.5Q59,99,45,91Q31,83,18.5,74.5Q6,66,9,51Q12,36,20,24Q28,12,42,13Q56,14,71.5,16.5Q87,19,87.5,34.5Q88,50,86.5,65Z"
							stroke="none"
							stroke-width="0"
							fill="url(#fill)"
						/>
					</svg>
				</div>
			)}
			{section === "experience" && (
				<div className="absolute opacity-20 h-[1000px] w-[800px] lg:w-[1200px] -top-[300px] -z-10">
					<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
						<defs>
							<linearGradient id="fill" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(54 0.5 0.5)">
								<stop offset="0%" stop-color="#ffffff" />
								<stop offset="100%" stop-color="#f9f9f9" />
							</linearGradient>
						</defs>
						<path
							d="M94,64.5Q89,79,75,81.5Q61,84,49,86.5Q37,89,29,80Q21,71,12,60.5Q3,50,7.5,36Q12,22,24,14.5Q36,7,50.5,6Q65,5,75,14.5Q85,24,92,37Q99,50,94,64.5Z"
							stroke="none"
							stroke-width="0"
							fill="url(#fill)"
						/>
					</svg>
				</div>
			)}
			<div></div>
		</>
	);
};

export default AnimatedBlob;
