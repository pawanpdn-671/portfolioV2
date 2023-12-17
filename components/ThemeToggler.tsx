import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "@/utils/Context";
import { useContext } from "react";

const ThemeToggler: React.FC = () => {
	const [mode, setMode] = useState<string>(() => {
		const storedMode = localStorage.getItem("portfolio-theme");
		return storedMode ? JSON.parse(storedMode) : "dark-theme";
	});

	const themeContext = useContext(ThemeContext);

	const handleToggleChange = (): void => {
		setMode((prevMode) => {
			const newMode = prevMode === "dark-theme" ? "light-theme" : "dark-theme";
			localStorage.setItem("portfolio-theme", JSON.stringify(newMode));
			return newMode;
		});
	};

	useEffect(() => {
		const storedMode = localStorage.getItem("portfolio-theme");
		if (!storedMode) return document.body.classList.add("dark-theme");
		document.body.classList.remove("dark-theme", "light-theme");
		themeContext.setTheme(JSON.parse(storedMode) === "dark-theme" ? "dark-theme" : "light-theme");
		document.body.classList.add(JSON.parse(storedMode) === "dark-theme" ? "dark-theme" : "light-theme");
	}, [mode]);

	return (
		<label className="flex items-center cursor-pointer">
			<input
				type="checkbox"
				className="hidden"
				onChange={handleToggleChange}
				checked={mode === "dark-theme" ? true : false}
			/>
			<div className={`relative w-16 h-8 border-2 border-textDark/30 rounded-full shadow-inner`}>
				<div
					className={`absolute left-[2px] top-0.5 w-6 h-6 bg-textDark/20 rounded-full shadow-md transform ${
						mode === "dark-theme" ? "translate-x-8" : "translate-x-0"
					} transition-transform duration-300`}></div>
				{mode === "dark-theme" ? (
					<FaMoon className="absolute left-[3px] top-0.5 w-6 h-6 text-gray-300" />
				) : (
					<FaSun className="absolute w-6 h-6 top-0.5 text-yellow-400 right-[3px]" />
				)}
			</div>
		</label>
	);
};

export default ThemeToggler;
