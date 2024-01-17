import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Candy Crush | PawanPdn",
	description: "Play Candy Crush in your PC.",
	icons: [
		{ rel: "icon", url: "/icon.ico" },
		{ rel: "apple", url: "/icon.ico" },
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="h-full">
			<body>{children}</body>
		</html>
	);
}
