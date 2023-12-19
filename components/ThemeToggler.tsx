import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { AppContext } from "@/utils/Context";
import { useContext } from "react";

const ThemeToggler: React.FC = () => {
	const appContext = useContext(AppContext);
	const { theme, setTheme } = appContext;

	const handleToggleChange = (): void => {
		setTheme(theme === "dark-theme" ? "light-theme" : "dark-theme");
	};

	return (
		<label className="flex items-center cursor-pointer">
			<input type="checkbox" className="hidden" onChange={handleToggleChange} checked={theme === "dark-theme"} />
			<div className={`relative w-16 h-8 border-2 border-textDark/30 rounded-full shadow-inner`}>
				<div
					className={`absolute left-[2px] top-0.5 w-6 h-6 bg-textDark/20 rounded-full shadow-md transform ${
						theme === "dark-theme" ? "translate-x-8" : "translate-x-0"
					} transition-transform duration-300`}></div>
				{theme === "dark-theme" ? (
					<FaMoon className="absolute left-[3px] top-0.5 w-6 h-6 text-gray-300" />
				) : (
					<FaSun className="absolute w-6 h-6 top-0.5 text-yellow-400 right-[3px]" />
				)}
			</div>
		</label>
	);
};

export default ThemeToggler;
