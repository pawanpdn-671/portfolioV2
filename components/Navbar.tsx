"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);

	const checkScroll = () => {
		if (window.scrollY === 0) {
			setScrolled(false);
		} else setScrolled(true);
	};

	useEffect(() => {
		window.addEventListener("scroll", checkScroll);
	}, [scrolled]);

	return (
		<div
			className={`fixed w-full ${
				scrolled ? "h-20 lg:px-5" : "h-24"
			} top-0 z-50 transition-all delay-100 duration-300 ease-in`}>
			<div
				className={`max-w-container h-full mx-auto flex px-5 items-center justify-between ${
					scrolled
						? "shadow-navbarShadow lg:px-8 lg:rounded-full"
						: ""
				} bg-bodyColor transition-all delay-100 duration-300 ease-in`}>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}>
					<Image
						src="/assets/images/light-logo.png"
						alt="logo"
						width={100}
						height={50}
					/>
				</motion.div>
				<div className="hidden mdl:inline-flex items-center">
					<ul className="flex">
						<Link
							href="/"
							className="px-2 font-semibold mx-4 text-lg text-textDark navLink">
							<motion.li
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.1, delay: 0.1 }}>
								Home
							</motion.li>
						</Link>
						<Link
							href="/projects"
							className="px-2 font-semibold mx-4 text-lg text-textDark navLink">
							<motion.li
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.1, delay: 0.2 }}>
								Projects
							</motion.li>
						</Link>
						<Link
							href="/about"
							className="px-2 font-semibold mx-4 text-lg text-textDark navLink">
							<motion.li
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.1, delay: 0.3 }}>
								About
							</motion.li>
						</Link>
						<Link
							href="/games"
							className="font-semibold px-2 mx-4 text-lg text-textDark navLink">
							<motion.li
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.1, delay: 0.4 }}>
								Games
							</motion.li>
						</Link>
						<Link
							href="/tools"
							className="px-2 font-semibold mx-4 text-lg text-textDark navLink">
							<motion.li
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.1, delay: 0.5 }}>
								Tools
							</motion.li>
						</Link>
					</ul>
					<a href="/assets/resume/resume-1.pdf" target="_blank">
						<motion.button
							initial={{ y: -10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.1, delay: 0.5 }}
							className="px-4 py-2 ml-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
							{"<Resume />"}
						</motion.button>
					</a>
				</div>
				<div className="w-8 h-5 flex flex-col justify-between items-center mdl:hidden text-textGreen cursor-pointer overflow-hidden group">
					<span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
					<span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
					<span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
