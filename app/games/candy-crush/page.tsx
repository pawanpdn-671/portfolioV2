import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
	title: "Candy Crush | PawanPdn",
	description: "Play Candy Crush in your PC.",
	icons: [
		{ rel: "icon", url: "/icon.ico" },
		{ rel: "apple", url: "/icon.ico" },
	],
};

const CandyCrush = dynamic(() => import("../_components/CandyCrush"), {
	ssr: false,
});

const Page = () => {
	return <CandyCrush />;
};
export default Page;
