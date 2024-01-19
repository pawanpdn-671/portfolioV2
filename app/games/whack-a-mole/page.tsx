import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
	title: "Whack-A-Mole | PawanPdn",
	description: "Play Whack-A-Mole in your mobile or pc.",
	icons: [
		{ rel: "icon", url: "/icon.ico" },
		{ rel: "apple", url: "/icon.ico" },
	],
};

const WhackAMole = dynamic(() => import("../_components/WhackAMole"), {
	ssr: false,
});

const Page = () => {
	return <WhackAMole />;
};
export default Page;
