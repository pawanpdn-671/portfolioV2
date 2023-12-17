import React from "react";
import { ProjectProps } from "@/types";
import { MdOpenInNew } from "react-icons/md";
import { BsFileEarmarkCode } from "react-icons/bs";

const ProjectCard = ({ project }: ProjectProps) => {
	return (
		<div className="p-6 rounded-lg relative text-textLight border-textDark border">
			<div className="flex items-center justify-between">
				<span className="text-xl font-semibold">{project.name}</span>
				<div className="flex items-center gap-4 text-2xl">
					<a href={project.deployLink} target="_blank">
						<MdOpenInNew className="cursor-pointer hover:text-textGreen duration-300 ease-in-out transition-colors" />
					</a>
					<a href={project.codeLink} target="_blank">
						<BsFileEarmarkCode className="cursor-pointer hover:text-textGreen duration-300 ease-in-out transition-colors" />
					</a>
				</div>
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
		</div>
	);
};

export default ProjectCard;
