"use client";

import { useState, useEffect } from "react";
export const SpaceTop = () => {
	const [scrolled, setScrolled] = useState(false);

	const checkScroll = () => {
		if (window.scrollY === 0) {
			setScrolled(false);
		} else setScrolled(true);
	};

	useEffect(() => {
		window.addEventListener("scroll", checkScroll);
	}, [scrolled]);

	return <div className={`w-full block ${scrolled ? "h-[80px]" : "h-[96px]"}`}></div>;
};
