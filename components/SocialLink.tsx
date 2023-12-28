"use client";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { motion } from "framer-motion";

const SocialLink = () => {
	return (
		<div className="hidden mdl:block fixed  bottom-0 right-[20px] text-textLight z-50">
			<div className="flex flex-col gap-4">
				<motion.a
					initial={{ y: -10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.1, delay: 0.2 }}
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
					transition={{ duration: 0.1, delay: 0.4 }}
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
