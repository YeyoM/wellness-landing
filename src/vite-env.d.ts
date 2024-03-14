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

export interface FavFeatureStatsI {
	Crowdmetwer: number;
	'Rutinas Personalizadas': number;
	'Reportes de progreso': number;
	'Ver el progreso de mis amigos': number;
}

export interface SoStatsI {
	iOS: number;
	Android: number;
	Otro: number;
}

export interface MotivationStatsI {
	Salud: number;
	Estetica: number;
	'Mi gym crush': number;
	Fuerza: number;
}

export interface RateRutinaStatsI {
	'Podria mejorar': number;
	'Hago la que me dieron en el gym': number;
	'No tengo rutina': number;
	'No me gusta': number;
}
