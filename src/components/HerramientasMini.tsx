import { HerramientasCardMiniI } from '../vite-env';

const HerramientasCardMini = ({
	icon,
	title,
	description,
}: HerramientasCardMiniI) => {
	return (
		<div className="w-80 flex flex-col items-center text-center text-white gap-2 transition hover:scale-110">
			<img src={icon} alt="Icono de la herramienta" />
			<h3 className="font-bold text-2xl">{title}</h3>
			<p className="text-[#BDC1CA]">{description}</p>
		</div>
	);
};

export default HerramientasCardMini;