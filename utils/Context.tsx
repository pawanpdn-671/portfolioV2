"use client";

import React, { createContext, ReactNode, useState } from "react";

interface ThemeContextProps {
	theme: string;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextProps>({
	theme: "dark-theme",
	setTheme: () => {},
});

interface ThemeProviderProps {
	children: ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
	const [theme, setTheme] = useState<string>(() => {
		const storedMode = localStorage.getItem("portfolio-theme");
		return storedMode ? JSON.parse(storedMode) : "dark-theme";
	});

	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
