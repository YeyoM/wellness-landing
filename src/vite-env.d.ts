/// <reference types="vite/client" />

export interface ButtonI {
	children: ReactChild | ReactChildren;
	redirect?: boolean;
}

export interface HerramientasCardMiniI {
	icon: string;
	title: string;
	description: string;
	row?: boolean;
}

export interface CounterI {
	n: number;
	className?: string;
}

export interface BtnRptaI {
	text: string;
	value: string;
	set: React.Dispatch<React.SetStateAction<string>>;
}