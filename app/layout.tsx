import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "styles/globals.css";
import { Metadata } from "next";

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
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
