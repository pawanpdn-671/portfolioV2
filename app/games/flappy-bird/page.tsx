import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
	title: "Flappy Bird | PawanPdn",
	description: "Play Flappy Bird in your mobile or pc.",
	icons: [
		{ rel: "icon", url: "/icon.ico" },
		{ rel: "apple", url: "/icon.ico" },
	],
};

const FlappyBird = dynamic(() => import("../_components/FlappyBird"), {
	ssr: false,
});

const Page = () => {
	return <FlappyBird />;
};
export default Page;
