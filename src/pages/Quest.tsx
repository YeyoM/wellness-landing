import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import BtnRpta from '@components/BtnRpta';
import left_icon from '@assets/svg/left.svg';
import right_icon from '@assets/svg/right.svg';

const Quest = () => {
	const { state } = useLocation();
	const [ favFeature, setFavFeature ] = useState('');
	const [so, setSO] = useState('');
	const [rateRutina, setRateRutina] = useState('');
	const [motivation, setMotivation] = useState('');

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
		<div className="bg-primary relative w-full h-screen flex justify-between p-5 sm:p-14 items-center font-inter">
			<button onClick={decrementIndex}>
				<img
					className="w-10 top-[10vh] left-5 md:left-0 md:top-0 md:w-14 absolute md:relative bg-white px-3 py-4 rounded-full transition hover:bg-[#ddd]"
					src={left_icon}
					alt="left-icon"
				/>
			</button>
			{index === 1 ? (
				<div className="flex flex-col items-center gap-10 font-bold">
					<p>{index}/4 </p>
					<h2 className="text-base text-center sm:text-left sm:text-lg lg:text-3xl xl:text-4xl">
						¿Que feature de Wellness App te gusto más?
					</h2>
					<div className="flex flex-col sm:flex-row flex-wrap justify-center gap-5 w-full sm:w-9/12">
						<BtnRpta
							value={favFeature}
							set={setFavFeature}
							text="Crowdmetwer"
						/>
						<BtnRpta
							value={favFeature}
							set={setFavFeature}
							text="Rutinas Personalizadas"
						/>
						<BtnRpta
							value={favFeature}
							set={setFavFeature}
							text="Reportes de progreso"
						/>
						<BtnRpta
							value={favFeature}
							set={setFavFeature}
							text="Ver el progreso de mis amigos"
						/>
						<BtnRpta value={favFeature} set={setFavFeature} text="Otro" />
					</div>
				</div>
			) : (
				''
			)}
			{index === 2 ? (
				<div className="flex flex-col items-center gap-10 font-bold">
					<p>{index}/4 </p>
					<h2 className="text-base text-center sm:text-left sm:text-lg lg:text-3xl xl:text-4xl">
						¿En que sistema operativo utilizaras Wellness App?
					</h2>
					<div className="flex flex-col sm:flex-row flex-wrap justify-center gap-5 w-9/12">
						<BtnRpta value={so} set={setSO} text="iOS" />
						<BtnRpta value={so} set={setSO} text="Android" />
						<BtnRpta value={so} set={setSO} text="Otro" />
					</div>
				</div>
			) : (
				''
			)}
			{index === 3 ? (
				<div className="flex flex-col items-center gap-10 font-bold">
					<p>{index}/4 </p>
					<h2 className="text-base text-center sm:text-left sm:text-lg lg:text-3xl xl:text-4xl">
						¿Como calificarías tu rutina actual?
					</h2>
					<div className="flex flex-col sm:flex-row flex-wrap justify-center gap-5 w-9/12">
						<BtnRpta value={rateRutina} set={setRateRutina} text="11/10" />
						<BtnRpta
							value={rateRutina}
							set={setRateRutina}
							text="Podria mejorar"
						/>
						<BtnRpta
							value={rateRutina}
							set={setRateRutina}
							text="Hago la que me dieron en el gym"
						/>
						<BtnRpta
							value={rateRutina}
							set={setRateRutina}
							text="No tengo rutina"
						/>
						<BtnRpta
							value={rateRutina}
							set={setRateRutina}
							text="No me gusta"
						/>
					</div>
				</div>
			) : (
				''
			)}
			{index === 4 ? (
				<div className="flex flex-col items-center gap-10 font-bold">
					<p>{index}/4 </p>
					<h2 className="text-base text-center sm:text-left sm:text-lg lg:text-3xl xl:text-4xl">
						¿Que te motiva a ir al gimnasio?
					</h2>
					<div className="flex flex-col sm:flex-row flex-wrap justify-center gap-5 w-9/12">
						<BtnRpta value={motivation} set={setMotivation} text="Salud" />
						<BtnRpta value={motivation} set={setMotivation} text="Estetica" />
						<BtnRpta
							value={motivation}
							set={setMotivation}
							text="Mi gym crush"
						/>
						<BtnRpta value={motivation} set={setMotivation} text="Fuerza" />
					</div>
				</div>
			) : (
				''
			)}
			<button onClick={incrementIndex}>
				<img
					className="w-10 top-[10vh] right-5 md:right-0 md:top-0 md:w-14 absolute md:relative bg-white px-3 py-4 rounded-full transition hover:bg-[#ddd]"
					src={right_icon}
					alt="right-icon"
				/>
			</button>
		</div>
	);
};

export default Quest;
