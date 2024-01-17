import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Flappy Bird | PawanPdn",
	description: "Play Flappy Bird in your mobile or pc.",
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
