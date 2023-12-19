"use client";
import React from "react";
import AnimatedText from "@/components/AnimatedText";
import ProjectCard from "@/components/ProjectCard";
import { SpaceTop } from "@/components/SpaceTop";
import { projects } from "@/constant";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionMotion from "@/components/SectionMotion";

const page = () => {
	return (
		<MaxWidthWrapper>
			<div className="min-h-screen">
				<SpaceTop />
				<div className="mt-20"></div>
				<div className="mt-10">
					<div className="">
						<AnimatedText
							text="Projects developed along the way..."
							className="font-titleFont font-bold !text-6xl !text-left"
						/>

						<SectionMotion delay={1}>
							<div className="grid grid-cols-1 mdl:grid-cols-2 gap-10 mt-10">
								{projects?.map((project, index) => (
									<ProjectCard key={index} project={project} />
								))}
							</div>
						</SectionMotion>
					</div>
				</div>
				<div className="mt-20">
					<AnimatedText
						text="Other noteworthy projects"
						className="font-titleFont font-bold !text-4xl !text-left"
					/>
					<div></div>
				</div>
			</div>
		</MaxWidthWrapper>
	);
};

export default page;
