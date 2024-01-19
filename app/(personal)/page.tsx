"use client";
import AnimatedBlob from "@/components/AnimatedBlob";
import ContactPage from "@/components/Contact";
import Experience from "@/components/Experience";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionMotion from "@/components/SectionMotion";
import TitleBox from "@/components/TitleBox";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
	return (
		<MaxWidthWrapper>
			<div className="min-h-screen flex flex-col justify-center">
				<motion.h4
					initial={{ y: -10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					className="text-textGreen text-lg lgl:text-2xl tracking-wide font-semibold">
					{"Hi, I'm Pawan"}
				</motion.h4>
				<div className="mt-7 text-textLight">
					<div className="flex flex-col">
						<div className="flex flex-wrap gap-3">
							<motion.h1
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.7 }}
								className="font-titleFont font-black  text-5xl md:text-7xl lgl:text-8xl">
								Exploring,
							</motion.h1>
							<motion.h1
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.8 }}
								className="lgl:ml-6 font-titleFont font-black text-5xl md:text-7xl lgl:text-8xl">
								Learning
							</motion.h1>
						</div>
						<div className="flex mt-2 lgl:mt-4 gap-3 flex-wrap">
							<motion.h1
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.9 }}
								className="font-titleFont font-black text-5xl md:text-7xl lgl:text-8xl">
								and
							</motion.h1>
							<motion.h1
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 1 }}
								className="lgl:ml-6 font-titleFont font-black text-5xl md:text-7xl lgl:text-8xl">
								Developing
							</motion.h1>
						</div>
					</div>
					<motion.p
						initial={{ y: -10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 1.1 }}
						className="mt-3 lgl:mt-6 text-3xl md:text-5xl lgl:text-7xl flex font-bold">
						<span className="h-[3px] mt-4 lgl:mt-9 lgl:h-[5px] bg-textDark w-[30px] lgl:w-[80px] mr-4 lgl:mr-8"></span>
						Things for the Web
					</motion.p>
					<Link href="/projects" className="mt-6 lgl:mt-10 block w-max">
						<motion.button
							initial={{ x: -30, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.2, delay: 1.2 }}
							className="px-4 py-2 rounded-md text-textGreen text-[16px] lgl:text-[20px] border border-textGreen hover:bg-hoverColor/10 duration-300">
							{"<CheckoutProjects />"}
						</motion.button>
					</Link>
				</div>
			</div>
			<SectionMotion delay={1}>
				<AnimatedBlob section="hero" />
				<AnimatedBlob section="hero2" />
			</SectionMotion>
			<div className="max-w-container mx-auto py-10 lgl:py-24">
				<SectionMotion delay={1}>
					<TitleBox title={"Work Experience"} />
					<Experience />
				</SectionMotion>
			</div>
			<div className="py-20 lgl:py-24">
				<SectionMotion delay={1.1}>
					<TitleBox title={"Get in Touch"} />
					<ContactPage />
				</SectionMotion>
			</div>
		</MaxWidthWrapper>
	);
}
