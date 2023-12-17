import { ButtonProps } from "@/types";
import React from "react";

const Button = ({ text, style }: ButtonProps) => {
	return (
		<button
			className={`${
				style ? style : "px-4 py-2"
			} " rounded-md text-textGreen border border-textGreen hover:bg-hoverColor/10 duration-300"`}>
			{`<${text} />`}
		</button>
	);
};

export default Button;
