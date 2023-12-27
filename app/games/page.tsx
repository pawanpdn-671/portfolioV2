import AnimatedText from "@/components/AnimatedText";
import GameCard from "@/components/GameCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionMotion from "@/components/SectionMotion";
import { SpaceTop } from "@/components/SpaceTop";
import { gameList } from "@/constant";
import React from "react";

const Games = () => {
	return (
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

						<SectionMotion delay={1}>
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
	);
};

export default Games;
