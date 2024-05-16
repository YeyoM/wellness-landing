import { HerramientasCardMiniI } from '../vite-env';

const HerramientasCardMini = ({
	icon,
	title,
	description,
	row
}: HerramientasCardMiniI) => {
	return (
		<div
			className={`w-80 flex ${
				row ? 'flex-row gap-5' : 'flex-col'
			} items-center text-center text-white gap-2 transition hover:sm:scale-110`}>
			<img src={icon} alt="Icono de la herramienta" />
			<div>
				<h3 className={`${row ? 'text-left' : ''} font-bold text-2xl`}>
					{title}
				</h3>
				<p className={`${row ? 'text-left' : ''} text-[#BDC1CA]`}>
					{description}
				</p>
			</div>
		</div>
	);
};

export default HerramientasCardMini;