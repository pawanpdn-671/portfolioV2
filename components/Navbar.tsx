"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
	return (
		<div className="w-full shadow-navbarShadow h-20 lg:h-30 sticky top-0 z-50 bg-bodyColor px-6">
			<div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
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
					<ul className="flex text-white">
						<Link
							href="/"
							className="px-2 font-semibold mx-4 text-lg">
							<motion.li
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.1, delay: 0.1 }}>
								Home
							</motion.li>
						</Link>
						<Link
							href="/projects"
							className="px-2 font-semibold mx-4 text-lg">
							<motion.li
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.1, delay: 0.2 }}>
								Projects
							</motion.li>
						</Link>
						<Link
							href="/about"
							className="px-2 font-semibold mx-4 text-lg">
							<motion.li
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.1, delay: 0.3 }}>
								About
							</motion.li>
						</Link>
						<Link
							href="/games"
							className="font-semibold px-2 mx-4 text-lg">
							<motion.li
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.1, delay: 0.4 }}>
								Games
							</motion.li>
						</Link>
						<Link
							href="/tools"
							className="px-2 font-semibold mx-4 text-lg">
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
			</div>
		</div>
	);
};

export default Navbar;
