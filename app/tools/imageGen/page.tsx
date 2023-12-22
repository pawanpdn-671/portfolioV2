"use client";
import Button from "@/components/Button";
import Card from "@/components/ImageGenCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionMotion from "@/components/SectionMotion";
import Link from "next/link";
import { useState } from "react";
import { RiLoader3Fill } from "react-icons/ri";

export interface CardProps {
	title: string;
	data: any;
}

const Cards = ({ data, title }: CardProps) => {
	if (data?.length > 0) {
		return data.map((post: any) => <Card key={post._id} {...post} />);
	}
	return <h2 className="mt-5 font-bold text-textDark text-xl uppercase">{title}</h2>;
};

const Page = () => {
	const [loading, setLoading] = useState(false);
	const [allPosts, setAllPosts] = useState<[] | null>(null);
	const [searchText, setSearchText] = useState("fdsfd");

	return (
		<MaxWidthWrapper>
			<div className="mt-0">
				<div className="py-10">
					<div className="flex justify-between items-center">
						<h1 className="text-2xl text-textLight font-semibold">ImageGen</h1>
						<Link href="/tools/imageGen/create">
							<Button text="Create"></Button>
						</Link>
					</div>
					<SectionMotion delay={0.7}>
						<div className="mt-6">
							<h1 className="font-extrabold text-textLight text-5xl font-titleFont">The Community Showcase</h1>
							<p className="mt-2 text-textDark text-lg">
								Browse the community showcase to see what others have built with the ImageGen.
							</p>
						</div>

						<div className="mt-16"></div>
						<div className="mt-10">
							{loading ? (
								<div className="flex justify-center items-center">
									<RiLoader3Fill className="animate-spin h-10 w-10 text-textLight" />
								</div>
							) : (
								<>
									{searchText && (
										<h2 className="text-textLight text-xl mb-3">
											Showing results for <span className="text-textDark">{searchText}</span>
										</h2>
									)}
									<div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
										{searchText ? (
											<Cards data={[]} title="No Search Results Found" />
										) : (
											<Cards data={[]} title="No Posts Found" />
										)}
									</div>
								</>
							)}
						</div>
					</SectionMotion>
				</div>
			</div>
		</MaxWidthWrapper>
	);
};

export default Page;
