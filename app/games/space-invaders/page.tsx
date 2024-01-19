import dynamic from "next/dynamic";

const SpaceInvaders = dynamic(() => import("../_components/SpaceInvaders"), {
	ssr: false,
});

const Page = () => {
	return typeof window !== "undefined" ? <SpaceInvaders /> : <></>;
};
export default Page;
