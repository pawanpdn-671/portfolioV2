"use client";

import AnimatedText from "@/components/AnimatedText";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { tools } from "@/constant";
import SectionMotion from "@/components/SectionMotion";

const Page = () => {
	return (
		<MaxWidthWrapper>
			<div className="mt-20">
				<div className="py-14">
					<AnimatedText
						text={"Some helpful Tools"}
						className="font-titleFont font-extrabold !text-6xl !text-left"
					/>
					<SectionMotion delay={0.7}>
						<div className="mt-10 grid grid-cols-1 mdl:grid-cols-2 gap-10">
							{tools.map((tool, index) => (
								<Link
									key={index}
									href={tool.href}
									className="transition-transform ease-in-out duration-200 hover:-translate-y-1">
									<div className="p-6 text-textLight border rounded-lg border-textDark">
										<div className="">
											<span className="text-xl font-semibold">{tool.name}</span>
										</div>
										<div className=""></div>
										<p className="mt-8 text-lg leading-7">{tool.desc}</p>
									</div>
								</Link>
							))}
						</div>
					</SectionMotion>
				</div>
			</div>
		</MaxWidthWrapper>
	);
};

export default Page;
