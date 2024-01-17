"use client";
import { RiReactjsFill } from "react-icons/ri";
import SectionMotion from "./SectionMotion";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGithub, FaNodeJs } from "react-icons/fa";
import { BsFiletypeSass } from "react-icons/bs";

const skills = [
	{
		name: "Javascript",
		icon: <IoLogoJavascript />,
	},
	{
		name: "ReactJS",
		icon: <RiReactjsFill />,
	},
	{
		name: "TypeScript",
		icon: <SiTypescript />,
	},
	{
		name: "MongoDB",
		icon: <SiMongodb />,
	},
	{
		name: "NextJS",
		icon: <TbBrandNextjs />,
	},
	{
		name: "NodeJS",
		icon: <FaNodeJs />,
	},
	{
		name: "ExpressJS",
		icon: <SiExpress />,
	},
	{
		name: "Tailwindcss",
		icon: <SiTailwindcss />,
	},
	{
		name: "SCSS",
		icon: <BsFiletypeSass />,
	},
	{
		name: "Github",
		icon: <FaGithub />,
	},
];

const Skills = ({ delay }: { delay: number }) => {
	const mapItems = (start: number, end: number, custom?: string) => {
		return skills.slice(start, end).map((skill, index) => (
			<SectionMotion key={index} delay={delay + (index * 0.1 + 0.1)}>
				<div key={index} className={`custom-skill-box ${custom} group`}>
					<div
						className={`custom-skill-box-face ${
							custom
								? "bg-textGreen/80 border border-textGreen"
								: "bg-secondColor from-textLight/10 to-textDark/20"
						}`}>
						<div
							className={`custom-skill-box-text ${
								custom ? "text-bodyColor group-hover:text-textLight" : "text-textLight"
							}`}>
							{skill.icon}
						</div>
					</div>
					<div className="custom-skill-box-back bg-bodyColor bg-gradient-to-br from-bodyColor/10 to-secondColor/70">
						<div className="custom-skill-box-text text-textLight">{skill.name}</div>
					</div>
				</div>
			</SectionMotion>
		));
	};

	return (
		<section className="flex justify-end">
			<div className="flex">
				<div className="flex flex-col">{mapItems(0, 4)}</div>
				<div className="flex flex-col mt-[65px] -ml-[65px] mdl:mt-[75px] mdl:-ml-[75px]">{mapItems(4, 7)}</div>
				<div className="flex flex-col mt-[130px] -ml-[65px] mdl:mt-[150px] mdl:-ml-[75px]">{mapItems(7, 9)}</div>
				<div className="flex flex-col mt-[195px] -ml-[65px] mdl:mt-[225px] mdl:-ml-[75px]">
					{mapItems(9, 10, "custom-github-link")}
				</div>
			</div>
		</section>
	);
};

export default Skills;
