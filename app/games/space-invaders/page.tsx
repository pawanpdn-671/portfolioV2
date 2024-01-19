import dynamic from "next/dynamic";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Space Invaders | PawanPdn",
	description: "Play Space Invaders in your pc.",
	icons: [
		{ rel: "icon", url: "/icon.ico" },
		{ rel: "apple", url: "/icon.ico" },
	],
};

const SpaceInvaders = dynamic(() => import("../_components/SpaceInvaders"), {
	ssr: false,
});

const Page = () => {
	return <SpaceInvaders />;
};
export default Page;
