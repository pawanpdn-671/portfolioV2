import React from "react";
import { about } from "@/constant";
import AnimatedText from "@/components/AnimatedText";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { SpaceTop } from "@/components/SpaceTop";
import SectionMotion from "@/components/SectionMotion";
import Skills from "@/components/Skills";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About | PawanPdn",
	description: "Get to know the developer of this Portfolio",
	icons: [
		{ rel: "icon", url: "/icon.ico" },
		{ rel: "apple", url: "/icon.ico" },
	],
};

const About = () => {
	return (
		<MaxWidthWrapper>
			<div className="min-h-screen">
				<SpaceTop />
				<div className="my-5 mb-20 mdl:my-20">
					<div className="bg-[url('/assets/images/illus-1.svg')] bg-no-repeat bg-center bg-contain">
						<div className="bg-bodyColor opacity-[0.85]">
							<AnimatedText
								text={about.title}
								className="font-titleFont font-bold !text-3xl sml:!text-3xl mdl:!text-6xl !text-left"
							/>

							<div className="mt-10 text-base mdl:text-lg font-medium mdl:font-semibold w-full mdl:w-4/5 text-textLight">
								<SectionMotion delay={1.1}>
									<p className="leading-8 my-8">{about.desc}</p>
								</SectionMotion>
								<SectionMotion delay={1.2}>
									<p className="leading-8 my-8 mdl:ml-5">{about.skills}</p>
								</SectionMotion>
								<SectionMotion delay={1.3}>
									<p className="leading-8 my-8 mdl:ml-10">{about.sets_apart}</p>
								</SectionMotion>
								<SectionMotion delay={1.4}>
									<p className="leading-8 my-8 mdl:ml-16">{about.connect}</p>
								</SectionMotion>
							</div>
						</div>
					</div>
					<div className="mt-20">
						<Skills delay={1.5} />
					</div>
				</div>
			</div>
		</MaxWidthWrapper>
	);
};

export default About;
