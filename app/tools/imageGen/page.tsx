import Button from "@/components/Button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionMotion from "@/components/SectionMotion";

const Page = () => {
	return (
		<MaxWidthWrapper>
			<SectionMotion delay={0.7}>
				<div className="mt-20">
					<div className="py-14">
						<div className="flex justify-between items-center">
							<h1 className="text-2xl text-textLight font-semibold">ImageGen</h1>
							<Button text="Create"></Button>
						</div>
					</div>
				</div>
			</SectionMotion>
		</MaxWidthWrapper>
	);
};

export default Page;
