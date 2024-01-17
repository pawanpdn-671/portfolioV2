import AnimatedText from "@/components/AnimatedText";
import GameCard from "@/components/GameCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionMotion from "@/components/SectionMotion";
import { SpaceTop } from "@/components/SpaceTop";
import { gameList } from "@/constant";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Games = () => {
	return (
		<>
			<Navbar />
			<div className="w-full bg-bodyColor flex flex-col min-h-full overflow-x-hidden overflow-y-auto scroll-smooth font-bodyFont">
				<MaxWidthWrapper>
					<div className="min-h-screen">
						<SpaceTop />
						<div className="mt-5 mdl:mt-20"></div>
						<div>
							<AnimatedText
								text="Feeling bored... try one of these games"
								className="font-titleFont font-bold !text-3xl sml:!text-3xl mdl:!text-6xl !text-left"
							/>

							<SectionMotion delay={0.7}>
								<div className="max-w-3xl mx-auto grid grid-cols-1 items-center mdl:grid-cols-2 w-[1200px]:grid-cols-3 gap-20 my-20">
									{gameList.map((game, index) => (
										<GameCard key={game.name} game={game} />
									))}
								</div>
							</SectionMotion>
						</div>
					</div>
				</MaxWidthWrapper>
			</div>
			<Footer />
		</>
	);
};

export default Games;
