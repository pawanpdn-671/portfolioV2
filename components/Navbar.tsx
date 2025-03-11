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
import { AppContext } from "@/utils/Context";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { RiLoader3Fill } from "react-icons/ri";
import { LikeIcon } from "./SocialLink";
import axios from "axios";

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
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const appContext = useContext(AppContext);

	const { theme, scrolled, isLiked, setIsLiked, getLikesCount, loading, setLoading, likesCount, likesObjID } =
		appContext;

	const pathname = usePathname();

	const handleLikeClick = async () => {
		if (loading) return;
		setLoading(true);
		try {
			let res = await axios.patch(`${process.env.NEXT_PUBLIC_URL}/api/likes`, {
				counts: isLiked ? likesCount - 1 : likesCount + 1,
				_id: likesObjID,
			});
			if (res.data.success) {
				setIsLiked(!isLiked);
				localStorage.setItem("portfolio-liked", `${!isLiked}`);
				getLikesCount();
			}
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		setShowMobileMenu(false);
	}, [pathname]);

	return (
		<div className={`fixed w-full bg-transparent ${scrolled ? "h-[72px]" : "h-[84px]"} top-0 z-50 nav-container`}>
			<MaxWidthWrapper isNav>
				<div
					className={`h-full mx-auto flex items-center px-3 mdl:px-5 justify-between ${
						scrolled ? "shadow-navbarShadow lg:px-6 lg:rounded-full" : "lg:px-0 "
					} bg-bodyColor transition-navbar `}>
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
						<Image
							src={`${
								theme === "dark-theme" ? "/assets/images/light-logo.png" : "/assets/images/dark-logo.png"
							}`}
							alt="logo"
							priority={true}
							width={100}
							height={50}
						/>
					</motion.div>
					<div className="hidden mdl:inline-flex items-center">
						<ul className="flex">
							{paths.map((path, index) => (
								<Link
									key={index}
									href={path.path}
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
												href={path.path}
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
									<motion.div
										initial={{ x: 50, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ duration: 0.1, delay: 1.5 }}
										onClick={handleLikeClick}>
										<span className="mt-8 w-14 h-14 text-xl bg-hoverColor/10 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:scale-110 transition-all duration-200 group">
											{loading ? (
												<RiLoader3Fill className="animate-spin h-6 w-6 text-textLight" />
											) : (
												<LikeIcon isLiked={isLiked} isMobile="w-10 h-10" />
											)}
										</span>
										<span
											className={`-mt-9 ${
												isLiked ? "text-white" : "text-bodyColor"
											} block text-center text-sm font-bold`}>
											{likesCount}
										</span>
									</motion.div>
								</div>
							</motion.div>
						</div>
					)}
				</div>
			</MaxWidthWrapper>
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
