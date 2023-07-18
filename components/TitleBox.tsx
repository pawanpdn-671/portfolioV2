"use client";

interface TitleBoxProps {
	title: string;
}

const TitleBox = ({ title }: TitleBoxProps) => {
	return (
		<div className="w-full flex items-center my-4">
			<div className="px-4 py-2 rounded-md border-2 border-textDark text-xl lgl:text-3xl lgl:p-6">
				<span className="text-textLight font-titleFont">
					{title}
				</span>
			</div>
			<div className="h-[2px] grow bg-textDark"></div>
		</div>
	);
};

export default TitleBox;
