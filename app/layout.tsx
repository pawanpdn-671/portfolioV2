import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "styles/globals.css";
import { Metadata } from "next";
import SocialLink from "@/components/SocialLink";
import AppProvider from "@/utils/Context";

export const metadata: Metadata = {
	title: "PawanPdn",
	description: "My Portfolio",
	icons: {
		icon: "/dark-logo.png",
		apple: "/assets/images/dark-logo.png",
	},
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
