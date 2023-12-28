"use client";

import AnimatedText from "@/components/AnimatedText";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { tools } from "@/constant";
import SectionMotion from "@/components/SectionMotion";
import ToolCard from "@/components/ToolCard";
import { SpaceTop } from "@/components/SpaceTop";

const Page = () => {
	return (
		<MaxWidthWrapper>
			<div className="min-h-screen">
				<SpaceTop />
				<div className="mt-20">
					<AnimatedText
						text={"Some helpful Tools"}
						className="font-titleFont font-extrabold !text-6xl !text-left"
					/>
					<SectionMotion delay={0.7}>
						<div className="mt-10 grid grid-cols-1 mdl:grid-cols-2 gap-20">
							{tools.map((tool, index) => (
								<ToolCard key={index} tool={tool} />
							))}
						</div>
					</SectionMotion>
				</div>
			</div>
		</MaxWidthWrapper>
	);
};

export default Page;
