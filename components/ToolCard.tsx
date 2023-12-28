"use client";
import { ToolCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { IoOpenSharp } from "react-icons/io5";

const ToolCard = (props: ToolCardProps) => {
	const { href, name, src, desc } = props.tool;

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const card = e.currentTarget;
		const { left, top, width, height } = card.getBoundingClientRect();
		const centerX = left + width / 2;
		const centerY = top + height / 2;
		const deltaX = e.clientX - centerX;
		const deltaY = e.clientY - centerY;

		const percentX = deltaX / (width / 2);
		const percentY = deltaY / (height / 2);

		const rotateX = percentY * 10;
		const rotateY = percentX * 10;

		card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
	};

	const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
		const card = e.currentTarget;
		card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
	};

	return (
		<div
			className="rounded-md p-[3px] bg-gradient-to-b from-textLight/5 to-textGreen/10 tool-tilt-card"
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}>
			<div className="rounded-sm bg-bodyColor h-full">
				<div className="">
					<Image
						src={src}
						alt={"tools thumbnail"}
						width={500}
						height={500}
						className="rounded-t-sm w-full h-80 object-center object-cover"
					/>
				</div>

				<div className="py-4 px-2 ">
					<div className="text-center h-[150px]">
						<p className="text-3xl  font-titleFont text-textLight">{name}</p>
						<p className="mt-4 text-lg font-semibold text-textLight px-2">{desc}</p>
					</div>

					<div className="mt-10 py-5 text-textDark flex justify-center">
						<Link href={href}>
							<div className="flex items-center">
								<IoOpenSharp className="text-textGreen/50 text-3xl" />
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ToolCard;
