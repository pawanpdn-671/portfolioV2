"use client";

import React, { createContext, ReactNode, useState, useEffect } from "react";

interface AppContextProps {
	theme: string;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
	scrolled: boolean;
	loading: boolean;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	isLiked: boolean;
	setIsLiked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextProps>({
	theme: "",
	setTheme: () => {},
	scrolled: false,
	loading: false,
	setLoading: () => {},
	isLiked: false,
	setIsLiked: () => {},
});

interface AppProviderProps {
	children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
	const [theme, setTheme] = useState<string>("");
	const [scrolled, setScrolled] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [isLiked, setIsLiked] = useState<boolean>(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const storedMode = localStorage.getItem("portfolio-theme");
			if (storedMode) {
				setTheme(JSON.parse(storedMode));
			} else {
				setTheme("dark-theme");
			}
		}
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined" && theme) {
			document.body.classList.remove("dark-theme", "light-theme");
			document.body.classList.add(theme);
			localStorage.setItem("portfolio-theme", JSON.stringify(theme));
		}
	}, [theme]);

	const checkScroll = () => {
		if (window.scrollY === 0) {
			setScrolled(false);
		} else setScrolled(true);
	};

	useEffect(() => {
		window.addEventListener("scroll", checkScroll);
	}, [scrolled]);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const storedLike = localStorage.getItem("portfolio-liked");
			if (storedLike) {
				setIsLiked(Boolean(storedLike));
			}
		}
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem("portfolio-liked", `${isLiked}`);
		}
	}, [isLiked]);

	return (
		<AppContext.Provider value={{ theme, setTheme, scrolled, loading, setLoading, isLiked, setIsLiked }}>
			{children}
		</AppContext.Provider>
	);
}

export default AppProvider;
