"use client";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/utils/Context";
import axios from "axios";
import { RiLoader3Fill } from "react-icons/ri";

const SocialLink = () => {
	const { setIsLiked, isLiked, setLoading, loading, likesCount, likesObjID, getLikesCount } = useContext(AppContext);

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

	return (
		<div className="hidden mdl:block fixed bottom-0 right-[20px] text-textLight z-50">
			<div className="flex flex-col gap-4">
				<motion.a
					initial={{ y: -10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.1, delay: 0.5 }}
					onClick={handleLikeClick}>
					<span className="w-10 h-10 text-xl bg-hoverColor/10 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:scale-110 transition-all duration-200 group">
						{loading ? (
							<RiLoader3Fill className="animate-spin h-6 w-6 text-textLight" />
						) : (
							<LikeIcon isLiked={isLiked} />
						)}
					</span>
					<span className="mt-1 block text-center text-sm text-textLight font-semibold">{likesCount}</span>
				</motion.a>
				<motion.a
					initial={{ y: -10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.1, delay: 0.4 }}
					href="https://github.com/pawanpdn-671"
					target="_blank">
					<span className="w-10 h-10 text-xl bg-hoverColor/10 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:scale-110 transition-all duration-200">
						<AiOutlineGithub fontSize={"25px"} />
					</span>
				</motion.a>
				<motion.a
					initial={{ y: -10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.1, delay: 0.3 }}
					href="https://www.linkedin.com/in/pawan-pradhan-363482221/"
					target="_blank">
					<span className="w-10 h-10 text-xl bg-hoverColor/10 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:scale-110 transition-all duration-200">
						<BiLogoLinkedin />
					</span>
				</motion.a>
				<motion.a
					initial={{ y: -10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.1, delay: 0.2 }}
					href="https://www.instagram.com/pawan_pradhan_fd/"
					target="_blank">
					<span className="w-10 h-10 text-xl bg-hoverColor/10 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:scale-110 transition-all duration-200">
						<AiOutlineInstagram />
					</span>
				</motion.a>
			</div>
			<motion.div
				initial={{ y: "100%", opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.1, delay: 0.1 }}
				className="w-[2px] ml-[21px] h-20 bg-textDark"></motion.div>
		</div>
	);
};

export default SocialLink;

export const LikeIcon = ({ isLiked, isMobile }: { isLiked: boolean; isMobile?: string }) => {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth={0}
			version="1"
			viewBox="0 0 48 48"
			enableBackground="new 0 0 48 48"
			height="1em"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
			className={` text-2xl ${isMobile} ${
				isLiked ? "text-red-500 group-hover:text-red-600" : "text-textLight group-hover:text-textGreen"
			} `}
			color="black">
			<path d="M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"></path>
		</svg>
	);
};
