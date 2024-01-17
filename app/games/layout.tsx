import AppProvider from "@/utils/Context";
import "../../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Games | PawanPdn",
	description: "Play Games in your mobile or pc.",
	icons: [
		{ rel: "icon", url: "/icon.ico" },
		{ rel: "apple", url: "/icon.ico" },
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="h-full">
			<body>
				<AppProvider>{children}</AppProvider>
			</body>
		</html>
	);
}
