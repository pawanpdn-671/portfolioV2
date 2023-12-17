"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import ThemeToggler from "./ThemeToggler";
import { useContext } from "react";
import { ThemeContext } from "@/utils/Context";

const paths = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "Projects",
		path: "/projects",
	},
	{
		name: "Games",
		path: "/games",
	},
	{
		name: "Tools",
		path: "/tools",
	},
	{
		name: "About",
		path: "/about",
	},
];

const sociallinks = [
	{
		path: "https://github.com/pawanpdn-671",
		icon: <AiOutlineGithub fontSize={"25px"} />,
	},
	{
		path: "#",
		icon: <AiOutlineInstagram />,
	},
	{
		path: "https://www.linkedin.com/in/pawan-pradhan-363482221/",
		icon: <BiLogoLinkedin fontSize={"25px"} />,
	},
];

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const themeContext = useContext(ThemeContext);

	const pathname = usePathname();

	const checkScroll = () => {
		if (window.scrollY === 0) {
			setScrolled(false);
		} else setScrolled(true);
	};

	useEffect(() => {
		window.addEventListener("scroll", checkScroll);
	}, [scrolled]);

	return (
		<div className={`fixed w-full ${scrolled ? "h-20 lg:px-5" : "h-24"} top-0 z-50 nav-container`}>
			<div
				className={`max-w-container h-full mx-auto flex px-5 items-center justify-between ${
					scrolled ? "shadow-navbarShadow lg:px-20 lg:rounded-full" : ""
				} bg-bodyColor transition-navbar`}>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
					<Image
						src={`/assets/images/${themeContext?.theme === "dark-theme" ? "light" : "dark"}-logo.png`}
						alt="logo"
						width={100}
						height={50}
					/>
				</motion.div>
				<div className="hidden mdl:inline-flex items-center">
					<ul className="flex">
						{paths.map((path, index) => (
							<Link
								key={index}
								href="/"
								className={`px-2 font-semibold mx-4 text-lg text-textDark navLink ${
									pathname === path.path ? "active-link" : ""
								}`}>
								<motion.li
									className="after:bg-textGreen"
									initial={{ y: -10, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.1, delay: 0.1 + index * 0.1 }}>
									{path.name}
								</motion.li>
							</Link>
						))}
					</ul>
					<motion.div
						initial={{ y: -10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							duration: 0.1,
							delay: 0.6,
						}}>
						<ThemeToggler />
					</motion.div>
				</div>
				<div
					onClick={() => setShowMobileMenu(true)}
					className="w-8 h-5 flex flex-col justify-between items-center mdl:hidden text-textGreen cursor-pointer overflow-hidden group">
					<span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
					<span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
					<span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
				</div>
				{showMobileMenu && (
					<div
						className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
						onClick={() => setShowMobileMenu(false)}>
						<motion.div
							onClick={(e) => e.stopPropagation()}
							initial={{ x: 50, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.3 }}
							className="w-[80%] h-full overflow-y-auto bg-bodyColor px-4 py-10 relative">
							<MdOutlineClose
								onClick={() => setShowMobileMenu(false)}
								className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
							/>
							<div className="flex flex-col items-center">
								<ul className="flex flex-col py-6 text-base items-start gap-7">
									{paths.map((path, index) => (
										<Link
											key={index}
											href="/"
											className={`font-semibold text-lg text-textDark navLink ${
												pathname === path.path ? "active-link" : ""
											}`}>
											<motion.li
												className="after:bg-textGreen"
												initial={{ y: -10, opacity: 0 }}
												animate={{ y: 0, opacity: 1 }}
												transition={{
													duration: 0.1,
													delay: 0.1 + index * 0.1,
												}}>
												{path.name}
											</motion.li>
										</Link>
									))}
								</ul>

								<div className="flex text-textLight gap-4 mt-2">
									{sociallinks.map((link, index) => (
										<motion.a
											key={index}
											initial={{ y: -10, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											transition={{
												duration: 0.1,
												delay: 0.7 + index * 0.1,
											}}
											href={link.path}
											target="_blank">
											<span className="w-10 h-10 text-xl bg-hoverColor/10 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:scale-110 transition-all duration-200">
												{link.icon}
											</span>
										</motion.a>
									))}
								</div>
								<motion.p
									initial={{ x: 50, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{
										duration: 0.5,
										delay: 1,
									}}
									className="text-textGreen text-center mt-6 break-all">
									pawanpradhanpc671@gmail.com
								</motion.p>
								<motion.div
									initial={{ x: 50, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{
										duration: 0.5,
										delay: 1.2,
									}}
									className="mt-6">
									<ThemeToggler />
								</motion.div>
							</div>
						</motion.div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;

{
	/* <a href="/assets/resume/resume-1.pdf" target="_blank">
										<motion.span
											initial={{ y: -10, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											transition={{
												duration: 0.1,
												delay: 0.6,
											}}>
											<Button text="Resume" style="" />
										</motion.span>
									</a> */
}
