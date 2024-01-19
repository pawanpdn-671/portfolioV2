import dynamic from "next/dynamic";
import { Metadata } from "next";

const SnakeGame = dynamic(() => import("../_components/SnakeGame"), {
	ssr: false,
});

export const metadata: Metadata = {
	title: "Snake Game | PawanPdn",
	description: "Play Snake Game in your pc.",
	icons: [
		{ rel: "icon", url: "/icon.ico" },
		{ rel: "apple", url: "/icon.ico" },
	],
};

const Page = () => {
	return <SnakeGame />;
};
export default Page;
