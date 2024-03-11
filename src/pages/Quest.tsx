import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import BtnRpta from '@components/BtnRpta';
import left from '@assets/svg/left.svg';
import right from '@assets/svg/right.svg';

const Quest = () => {
	const { state } = useLocation();

	if (!state || state.email === null) {
		location.href = '/';
	}

	const { email } = state;
	const [index, setIndex] = useState(1);

	const incrementIndex = () => {
		if (index < 4) {
			setIndex((prev) => prev + 1);
		}
	};

	const decrementIndex = () => {
		if (index > 1) {
			setIndex((prev) => prev - 1);
		}
	};

	return (
		<div className="bg-primary w-full h-screen flex justify-between p-14 items-center font-inter">
			<button onClick={decrementIndex}>
				<img
					className="bg-white px-3 py-4 rounded-full transition hover:bg-[#ddd]"
					src={left}
					alt="left-icon"
				/>
			</button>
			{index === 1 ? (
				<div className="flex flex-col items-center gap-10 font-bold">
					<p>{index}/4 </p>
					<h2 className="text-4xl">
						¿Que feature de Wellness App te gusto más?
					</h2>
					<div className="flex flex-wrap justify-center gap-5 w-9/12">
						<BtnRpta text="Crowdmetwer" />
						<BtnRpta text="Rutinas Personalizadas" />
						<BtnRpta text="Reportes de progreso" />
						<BtnRpta text="Ver el progreso de mis amigos" />
						<BtnRpta text="Otro" />
					</div>
				</div>
			) : (
				''
			)}
			{index === 2 ? (
				<div className="flex flex-col items-center gap-10 font-bold">
					<p>{index}/4 </p>
					<h2 className="text-4xl">
						¿En que sistema operativo utilizaras Wellness App?
					</h2>
					<div className="flex flex-wrap justify-center gap-5 w-9/12">
						<BtnRpta text="iOS" />
						<BtnRpta text="Android" />
						<BtnRpta text="Otro" />
					</div>
				</div>
			) : (
				''
			)}
			{index === 3 ? (
				<div className="flex flex-col items-center gap-10 font-bold">
					<p>{index}/4 </p>
					<h2 className="text-4xl">¿Como calificarías tu rutina actual?</h2>
					<div className="flex flex-wrap justify-center gap-5 w-9/12">
						<BtnRpta text="11/10" />
						<BtnRpta text="Podria mejorar" />
						<BtnRpta text="Hago la que me dieron en el gym" />
						<BtnRpta text="No tengo rutina" />
						<BtnRpta text="No me gusta" />
					</div>
				</div>
			) : (
				''
			)}
			{index === 4 ? (
				<div className="flex flex-col items-center gap-10 font-bold">
					<p>{index}/4 </p>
					<h2 className="text-4xl">¿Que te motiva a ir al gimnasio?</h2>
					<div className="flex flex-wrap justify-center gap-5 w-9/12">
						<BtnRpta text="Salud" />
						<BtnRpta text="Estetica" />
						<BtnRpta text="Mi gym crush" />
						<BtnRpta text="Fuerza" />
					</div>
				</div>
			) : (
				''
			)}
			<button onClick={incrementIndex}>
				<img
					className="bg-white px-3 py-4 rounded-full transition hover:bg-[#ddd]"
					src={right}
					alt="right-icon"
				/>
			</button>
		</div>
	);
};

export default Quest;
