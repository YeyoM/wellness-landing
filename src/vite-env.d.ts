/// <reference types="vite/client" />

export interface ButtonI {
	children: ReactChild | ReactChildren;
	className: string;
	btn?: boolean;
}

export interface HerramientasCardMiniI {
	icon: string;
	title: string;
	description: string;
	row?: boolean;
}