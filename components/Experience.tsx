"use client";
import { useState, useEffect } from "react";
import { experiences } from "@/constant";
import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
import { CompanyDetails } from "@/types";

const Experience = () => {
	const [tabIndex, setTabIndex] = useState(0);
	const [tabDetails, setTabDetails] =
		useState<CompanyDetails>(Object);

	useEffect(() => {
		setTabDetails(experiences[tabIndex]);
	}, [tabIndex]);

	return (
		<section className="w-full mt-10 lgl:mt-20 flex flex-col md:flex-row gap-16">
			<ul className="flex flex-col shrink-0">
				{experiences?.map((exp, i) => (
					<li
						key={i}
						className={`border-l-2 ${
							tabIndex === i
								? "border-l-textGreen"
								: "border-l-hoverColor"
						} text-textDark bg-transparent hover:bg-[#112240] py-3 text-md cursor-pointer duration-300 px-8`}
						onClick={() => setTabIndex(i)}>
						{exp.company}
					</li>
				))}
			</ul>
			{Object.keys(tabDetails)?.length > 0 && (
				<motion.div
					initial={{ y: -10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="w-full">
					<h3 className="text-xl font-semibold text-textLight">
						{tabDetails.role}
						<span className="text-textGreen tracking-wide">
							@{tabDetails.company}
						</span>
					</h3>
					<p className="text-sm mt-1 font-medium text-textDark">
						{tabDetails.startDate} - {tabDetails.endDate}
					</p>
					<ul className="text-textLight mt-4 gap-2">
						{tabDetails.desc?.map((item, i) => (
							<li
								key={i}
								className="text-base flex gap-2 text-textDark mt-2">
								<span className="text-textGreen mt-1">
									<TiArrowForward />
								</span>
								{item}
							</li>
						))}
					</ul>
				</motion.div>
			)}
		</section>
	);
};

export default Experience;
