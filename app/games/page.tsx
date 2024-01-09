import AnimatedText from "@/components/AnimatedText";
import GameCard from "@/components/GameCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionMotion from "@/components/SectionMotion";
import { SpaceTop } from "@/components/SpaceTop";
import { gameList } from "@/constant";
import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "Games | PawanPdn",
	description: "Play Games in your mobile or pc.",
	icons: [
		{ rel: "icon", url: "/icon.ico" },
		{ rel: "apple", url: "/icon.ico" },
	],
};

const Games = () => {
	return (
		<>
			<Navbar />
			<div className="w-full bg-bodyColor flex flex-col min-h-full overflow-x-hidden overflow-y-auto scroll-smooth font-bodyFont">
				<MaxWidthWrapper>
					<div className="min-h-screen">
						<SpaceTop />
						<div className="mt-20"></div>
						<div className="mt-10">
							<div>
								<AnimatedText
									text="Feeling bored... try one of these games!"
									className="font-titleFont font-bold !text-6xl !text-left"
								/>

								<SectionMotion delay={0.7}>
									<div className="grid grid-cols-1 items-center mdl:grid-cols-2 lg:grid-cols-3 gap-20 my-20">
										{gameList.map((game, index) => (
											<GameCard key={game.name} game={game} />
										))}
									</div>
								</SectionMotion>
							</div>
						</div>
					</div>
				</MaxWidthWrapper>
			</div>
			<Footer />
		</>
	);
};

export default Games;
