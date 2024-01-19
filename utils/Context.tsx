"use client";

import axios from "axios";
import { usePathname } from "next/navigation";
import React, { createContext, ReactNode, useState, useEffect } from "react";

interface AppContextProps {
	theme: string;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
	scrolled: boolean;
	loading: boolean;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	isLiked: boolean;
	setIsLiked: React.Dispatch<React.SetStateAction<boolean>>;
	likesCount: number;
	setLikesCount: React.Dispatch<React.SetStateAction<number>>;
	likesObjID: string;
	setLikesObjID: React.Dispatch<React.SetStateAction<string>>;
	getLikesCount: () => void;
}

export const AppContext = createContext<AppContextProps>({
	theme: "",
	setTheme: () => {},
	scrolled: false,
	loading: false,
	setLoading: () => {},
	isLiked: false,
	setIsLiked: () => {},
	likesCount: 0,
	setLikesCount: () => {},
	likesObjID: "",
	setLikesObjID: () => {},
	getLikesCount: () => {},
});

interface AppProviderProps {
	children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
	const [theme, setTheme] = useState<string>("");
	const [scrolled, setScrolled] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [isLiked, setIsLiked] = useState<boolean>(false);
	const [likesCount, setLikesCount] = useState(0);
	const [likesObjID, setLikesObjID] = useState("");
	const pathname = usePathname();

	const getLikesCount = async () => {
		setLoading(true);
		try {
			let res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/likes`);
			let data = res.data;

			setLikesCount(data?.result[0]?.counts);
			setLikesObjID(data?.result[0]?._id);
		} catch (error) {
			console.log(error);
			return { success: false };
		} finally {
			setLoading(false);
		}
	};

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
	}, [theme, pathname]);

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
				setIsLiked(JSON.parse(storedLike));
			}
		}
	}, []);

	useEffect(() => {
		getLikesCount();
	}, []);

	return (
		<AppContext.Provider
			value={{
				theme,
				setTheme,
				scrolled,
				loading,
				setLoading,
				isLiked,
				setIsLiked,
				likesCount,
				likesObjID,
				setLikesCount,
				setLikesObjID,
				getLikesCount,
			}}>
			{children}
		</AppContext.Provider>
	);
}

export default AppProvider;
