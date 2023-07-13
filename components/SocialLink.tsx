"use client";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

const SocialLink = () => {
	return (
		<div className="hidden h-screen justify-center xl:flex fixed flex-col bottom-0 right-[20px] text-textLight gap-4 z-50">
			<div className="flex flex-col gap-4">
				<a href="https://github.com/pawanpdn-671" target="_blank">
					<span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:scale-110 transition-all duration-200">
						<AiOutlineGithub fontSize={"25px"} />
					</span>
				</a>
				<a
					href="https://www.linkedin.com/in/pawan-pradhan-363482221/"
					target="_blank">
					<span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:scale-110 transition-all duration-200">
						<BiLogoLinkedin />
					</span>
				</a>
				<a
					href="https://www.instagram.com/pawan_pradhan_fd/"
					target="_blank">
					<span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:scale-110 transition-all duration-200">
						<AiOutlineInstagram />
					</span>
				</a>
			</div>
			<div className="w-[2px] h"></div>
		</div>
	);
};

export default SocialLink;
