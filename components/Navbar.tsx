"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [showMobileMenu, setShowMobileMenu] = useState(false);

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
							className={`px-2 font-semibold mx-4 text-lg text-textDark navLink ${
								pathname === "/" ? "active-link" : ""
							}`}>
							<motion.li
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.1, delay: 0.1 }}>
								Home
							</motion.li>
						</Link>
						<Link
							href="/projects"
							className={`px-2 font-semibold mx-4 text-lg text-textDark navLink ${
								pathname === "/projects" ? "active-link" : ""
							}`}>
							<motion.li
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.1, delay: 0.2 }}>
								Projects
							</motion.li>
						</Link>
						<Link
							href="/about"
							className={`px-2 font-semibold mx-4 text-lg text-textDark navLink ${
								pathname === "/about" ? "active-link" : ""
							}`}>
							<motion.li
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.1, delay: 0.3 }}>
								About
							</motion.li>
						</Link>
						<Link
							href="/games"
							className={`font-semibold px-2 mx-4 text-lg text-textDark navLink ${
								pathname.includes("/games")
									? "active-link"
									: ""
							}`}>
							<motion.li
								initial={{ y: -10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.1, delay: 0.4 }}>
								Games
							</motion.li>
						</Link>
						<Link
							href="/tools"
							className={`px-2 font-semibold mx-4 text-lg text-textDark navLink ${
								pathname.includes("/tools")
									? "active-link"
									: ""
							}`}>
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
							transition={{ duration: 0.1, delay: 0.6 }}
							className="px-4 py-2 ml-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
							{"<Resume />"}
						</motion.button>
					</a>
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
							className="w-[80%] h-full overflow-y-auto bg-[#112240] px-4 py-10 relative">
							<MdOutlineClose
								onClick={() => setShowMobileMenu(false)}
								className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
							/>
							<div className="flex flex-col items-center">
								<ul className="flex flex-col py-6 text-base items-start gap-7">
									<Link
										href="/"
										className={`font-semibold text-lg text-textDark navLink ${
											pathname === "/" ? "active-link" : ""
										}`}>
										<motion.li
											initial={{ y: -10, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											transition={{
												duration: 0.1,
												delay: 0.1,
											}}>
											Home
										</motion.li>
									</Link>
									<Link
										href="/projects"
										className={`font-semibold text-lg text-textDark navLink ${
											pathname === "/projects"
												? "active-link"
												: ""
										}`}>
										<motion.li
											initial={{ y: -10, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											transition={{
												duration: 0.1,
												delay: 0.2,
											}}>
											Projects
										</motion.li>
									</Link>
									<Link
										href="/about"
										className={`font-semibold text-lg text-textDark navLink ${
											pathname === "/about"
												? "active-link"
												: ""
										}`}>
										<motion.li
											initial={{ y: -10, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											transition={{
												duration: 0.1,
												delay: 0.3,
											}}>
											About
										</motion.li>
									</Link>
									<Link
										href="/games"
										className={`font-semibold text-lg text-textDark navLink ${
											pathname.includes("/games")
												? "active-link"
												: ""
										}`}>
										<motion.li
											initial={{ y: -10, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											transition={{
												duration: 0.1,
												delay: 0.4,
											}}>
											Games
										</motion.li>
									</Link>
									<Link
										href="/tools"
										className={`font-semibold text-lg text-textDark navLink ${
											pathname.includes("/tools")
												? "active-link"
												: ""
										}`}>
										<motion.li
											initial={{ y: -10, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											transition={{
												duration: 0.1,
												delay: 0.5,
											}}>
											Tools
										</motion.li>
									</Link>
									<a
										href="/assets/resume/resume-1.pdf"
										target="_blank">
										<motion.button
											initial={{ y: -10, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											transition={{
												duration: 0.1,
												delay: 0.6,
											}}
											className="px-3 py-1 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
											{"<Resume />"}
										</motion.button>
									</a>
								</ul>

								<div className="flex text-textLight gap-4 mt-2">
									<motion.a
										initial={{ y: -10, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{
											duration: 0.1,
											delay: 0.7,
										}}
										href="https://github.com/pawanpdn-671"
										target="_blank">
										<span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:scale-110 transition-all duration-200">
											<AiOutlineGithub fontSize={"25px"} />
										</span>
									</motion.a>
									<motion.a
										initial={{ y: -10, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{
											duration: 0.1,
											delay: 0.8,
										}}
										href="https://www.linkedin.com/in/pawan-pradhan-363482221/"
										target="_blank">
										<span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:scale-110 transition-all duration-200">
											<BiLogoLinkedin />
										</span>
									</motion.a>
									<motion.a
										initial={{ y: -10, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{
											duration: 0.1,
											delay: 0.9,
										}}
										href="https://www.instagram.com/pawan_pradhan_fd/"
										target="_blank">
										<span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:scale-110 transition-all duration-200">
											<AiOutlineInstagram />
										</span>
									</motion.a>
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
							</div>
						</motion.div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
