import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "../../styles/globals.css";
import SocialLink from "@/components/SocialLink";
import AppProvider from "@/utils/Context";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | PawanPdn",
	description: "Home Page",
	icons: [
		{ rel: "icon", url: "/icon.ico" },
		{ rel: "apple", url: "/icon.ico" },
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="h-full">
			<body className="w-full bg-bodyColor flex flex-col min-h-full overflow-x-hidden overflow-y-auto scroll-smooth font-bodyFont">
				<AppProvider>
					<Navbar />
					{children}
					<SocialLink />
					<Footer />
				</AppProvider>
			</body>
		</html>
	);
}
