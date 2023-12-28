"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "styles/globals.css";
import { Metadata } from "next";
import SocialLink from "@/components/SocialLink";
import AppProvider from "@/utils/Context";
import { usePathname } from "next/navigation";

export const metadata: Metadata = {
	title: "PawanPdn",
	description: "My Portfolio",
	icons: {
		icon: "/dark-logo.png",
		apple: "/assets/images/dark-logo.png",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const hideNav = pathname.startsWith("/tools") && pathname !== "/tools";
	const hideNav2 = pathname.startsWith("/games") && pathname !== "/games";

	return (
		<html lang="en" className="h-full">
			<body className="w-full bg-bodyColor flex flex-col min-h-full overflow-x-hidden overflow-y-auto scroll-smooth font-bodyFont">
				<AppProvider>
					{hideNav || hideNav2 ? <></> : <Navbar />}
					{children}
					{hideNav || hideNav2 ? (
						<></>
					) : (
						<>
							<SocialLink />
							<Footer />
						</>
					)}
				</AppProvider>
			</body>
		</html>
	);
}
