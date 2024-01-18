import { GameProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const GameCard = (props: GameProps) => {
	const { desc, name, path, source, mdl } = props.game;

	return (
		<Link href={path} className="w-full block">
			<div className="custom-game-card-hover">
				<Image className="custom-thumb" src={source} alt={"thumbnail"} width={500} height={500} />
				<Image className="custom-mdl" src={mdl} alt={"thumbnail"} width={500} height={500} />
				<span className="font-gameFont text-4xl">{name}</span>
				<p className="font-body text-sm sml:text-base font-semibold sml:font-bold">{desc}</p>
			</div>
		</Link>
	);
};
export default GameCard;
