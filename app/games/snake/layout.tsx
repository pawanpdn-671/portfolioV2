import { Metadata } from "next";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
	title: "Snake Game | PawanPdn",
	description: "Play Snake Game in your pc.",
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
