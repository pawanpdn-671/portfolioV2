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
