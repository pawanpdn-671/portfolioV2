import React from "react";
import { ProjectProps } from "@/types";
import { MdOpenInNew } from "react-icons/md";
import { BsFileEarmarkCode } from "react-icons/bs";
import Link from "next/link";

const OtherProjectCard = ({ project }: ProjectProps) => {
	return (
		<Link
			href={project.deployLink}
			target="_blank"
			className="p-6 rounded-lg relative text-textLight shadow-sm shadow-textDark/30">
			<div className="flex items-center justify-between">
				<span className="text-xl font-semibold">{project.name}</span>
			</div>
			<div className="mt-8">
				<p className="text-lg leading-7">{project.desc}</p>
			</div>
			<div className="mt-6 flex flex-wrap gap-4">
				{project.techUsed.map((tech, i) => (
					<span key={i} className="bg-hoverColor/10 py-1 px-3 text-sm rounded-md">
						{tech}
					</span>
				))}
			</div>
		</Link>
	);
};

export default OtherProjectCard;
