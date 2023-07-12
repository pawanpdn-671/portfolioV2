"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
	return (
		<div className="w-full shadow-navbarShadow h-20 lg:h-30 sticky top-0 z-50 bg-bodyColor px-4">
			<div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
				<div>
					<Image
						src="/assets/images/light-logo.png"
						alt="logo"
						width={100}
						height={50}
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
