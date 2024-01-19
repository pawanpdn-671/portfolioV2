import dynamic from "next/dynamic";

const FlappyBird = dynamic(() => import("../_components/FlappyBird"), {
	ssr: false,
});

const Page = () => {
	return typeof window !== "undefined" ? <FlappyBird /> : <></>;
};
export default Page;
