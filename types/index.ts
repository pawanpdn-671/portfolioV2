export interface CompanyDetails {
	company: string;
	role: string;
	startDate: string;
	endDate: string;
	desc: Array<string>;
}

export interface ButtonProps {
	text: string;
	style?: string;
	onClick?: () => void;
}

export interface ProjectCardProps {
	name: string;
	techUsed: Array<any>;
	desc: string;
	deployLink: string;
	codeLink: string;
}

export interface ProjectProps {
	key: number;
	project: ProjectCardProps;
}

export interface InputFieldProps {
	labelName: string;
	type: string;
	name: string;
	placeholder: string;
	value: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isSurpriseMe?: boolean;
	handleSurpriseMe?: () => void;
}
