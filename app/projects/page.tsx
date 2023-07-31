import AnimatedText from "@/components/AnimatedText";
import React from "react";

const page = () => {
	return (
		<div className="min-h-screen">
			<div></div>
			<div className="mt-10">
				<div className="">
					<AnimatedText text="Project I had developed along the way..." className="" />
				</div>
			</div>
			<div className="mt-20">
				<AnimatedText text="Other noteworthy projects" className="" />
				<div></div>
			</div>
		</div>
	);
};

export default page;
