import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "styles/globals.css";
import { Metadata } from "next";
import SocialLink from "@/components/SocialLink";

export const metadata: Metadata = {
	title: "PawanPdn",
	description: "My Portfolio",
	icons: {
		icon: "/dark-logo.png",
		apple: "/assets/images/dark-logo.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="w-full bg-bodyColor overflow-x-hidden overflow-y-auto scroll-smooth font-bodyFont">
				<Navbar />
				{children}
				<SocialLink />
				{/* <Footer /> */}
			</body>
		</html>
	);
}
