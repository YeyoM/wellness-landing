import '@fontsource-variable/inter';
import '../App.css';

// Images
import logo from '@assets/logo.png';
import iphone from '@assets/iphone.png';
import chasing from '@assets/chasing.png';
import maxes from '@assets/maxes.png';
import phone_inclined from '@assets/phone_inclined.png';
import iphone_top from '@assets/iphone_top.png';
import iphone_bottom from '@assets/iphone_bottom.png';

// SVG
import icon_1 from '@assets/svg/icon_1.svg';
import icon_2 from '@assets/svg/icon_2.svg';
import icon_3 from '@assets/svg/icon_3.svg';
import icon_4 from '@assets/svg/icon_4.svg';
import icon_5 from '@assets/svg/icon_5.svg';
import icon_6 from '@assets/svg/icon_6.svg';
import semicircle from '@assets/svg/semicircle.svg';

// Components
import Footer from '@components/Footer';
import Button from '@components/Button';
import HerramientasCardMini from '@components/HerramientasMini';
import Counter from '@components/Counter';
import { useState } from 'react';
import { HashLoader } from 'react-spinners';
import { useForm } from 'react-hook-form';
import { getAll, registerUser } from '../RegisterBetaTester';
import { useNavigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

function Home() {
	const [email, setEmail] = useState('');
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const { handleSubmit } = useForm();
	const navigate = useNavigate();

	const handleEmail = (text: string) => {
		setSuccess(false);
		setError(false);
		setEmail(text);
	};

	const onSubmit = handleSubmit(async () => {
		setLoading(true);
		setError(false);
		setSuccess(false);
		const emailExists = await getAll(email, setError);

		if (!emailExists) {
			setError(false);
			const id = await registerUser(email, setSuccess);
			setTimeout(() => {
				navigate('/encuesta', { state: { id, email } });
			}, 1000);
		}

		setLoading(false);
	});

	return (
		<>
			<div className="bg-[url('@assets/bg.jpg')] bg-no-repeat bg-cover bg-center flex items-center w-full lg:h-screen h-auto p-5 lg:p-0 relative justify-center lg:justify-normal font-inter">
				<div className="flex justify-center items-center lg:items-start flex-col gap-8 lg:gap-20 lg:flex-row">
					<div className="lg:w-5/12 w-11/12 flex flex-col items-start gap-6 relative z-20">
						<img className="w-64 lg:w-9/12" src={logo} alt="logo" />
						<h2 className="text-white font-bold text-4xl lg:text-6xl">
							La forma más sencilla de alcanzar tus objetivos
						</h2>
						<p className="text-[#9095A1]">
							Entrena con la ayuda de AI y descubre la mejor hora para realizar
							tu rutina
						</p>
						<Button redirect>Unete ya!</Button>
					</div>
					<div className="relative z-20">
						<img className="w-72" src={iphone} alt="iphone-wellnes" />
					</div>
				</div>
			</div>
			<div className="bg-black w-full lg:h-screen lg:py-0 py-14 flex flex-col gap-16 justify-center items-center font-inter">
				<div className="flex flex-col gap-5 text-white text-center w-1/2">
					<h2 className="font-bold text-3xl sm:text-5xl">100% personalizado</h2>
					<p>
						Cada persona tiene diferentes objetivos dentro del gimnasio es por
						eso que las herramientas dentro de la app se adaptaran completamente
						a tus metas personales.
					</p>
				</div>
				<div className="flex flex-wrap justify-center items-center w-9/12 gap-20">
					<HerramientasCardMini
						icon={icon_1}
						title="Entrenamientos Personalizados"
						description="La IA crea planes de entrenamiento adaptados a tus objetivos, nivel y equipo disponible."
					/>
					<HerramientasCardMini
						icon={icon_2}
						title="Retos Personalizados"
						description="Desafía a tus amigos con rutinas específicas y compartan su progreso."
					/>
					<HerramientasCardMini
						icon={icon_3}
						title="Ajustes en Tiempo Real"
						description="Modifica tu rutina en la app siguiendo las recomendaciones para optimizar tu entrenamiento."
					/>
					<HerramientasCardMini
						icon={icon_4}
						title="Crowdmeter Inteligente"
						description="Elige la hora ideal para entrenar evitando las multitudes con información en tiempo real."
					/>
					<HerramientasCardMini
						icon={icon_5}
						title="Seguimiento Integral"
						description="Visualiza tu progreso como nunca antes con reportes detallados de cada entrenamiento."
					/>
					<HerramientasCardMini
						icon={icon_6}
						title="Comunidad Motivadora"
						description="Conecta con personas que comparten tus objetivos en un espacio de apoyo y motivación."
					/>
				</div>
			</div>
			<div className="bg-black w-full py-16 h-auto xl:h-screen flex xl:flex-row flex-col-reverse xl:gap-0 gap-14 justify-center items-center font-inter">
				<div className="flex flex-col items-center xl:items-start gap-10">
					<div className="flex flex-col xl:items-start items-center gap-3">
						<h2 className="text-white text-center xl:text-left text-5xl font-bold w-4/6">
							Comparte tus logros en tu perfil
						</h2>
						<p className="text-[#9095A1] text-center xl:text-left">
							Inspira a otros usuarios
						</p>
					</div>
					<img
						className="transition hover:scale-105"
						src={maxes}
						alt="maxes"
						width={350}
					/>
					<div className="w-10/12 flex justify-center xl:justify-end">
						<img
							className="transition hover:scale-105"
							src={chasing}
							alt="chasing"
							width={350}
						/>
					</div>
				</div>
				<img
					className="w-80 xl:w-[520px]"
					src={phone_inclined}
					alt="phone inclined"
				/>
			</div>
			<div className="lg:h-72 py-10 lg:py-0 bg-black flex justify-center items-center gap-7 lg:gap-24 flex-col lg:flex-row text-white font-inter">
				<div className="flex flex-col gap-3">
					<h3 className="lg:w-96 font-bold text-xl lg:text-4xl">
						Con <Counter n={2000} />+ ejercicios diferentes
					</h3>
					<p>Crea la rutina perfecta para ti</p>
				</div>
				<div className="flex flex-col gap-5">
					<HerramientasCardMini
						icon={icon_1}
						title="10,000+"
						description="Combinaciones de rutinas"
						row
					/>
					<HerramientasCardMini
						icon={icon_5}
						title="500+"
						description="Challenges"
						row
					/>
				</div>
			</div>
			<div
				id="access_to_app"
				className="bg-primary flex items-center lg:justify-center flex-col lg:flex-row gap-5 lg:gap-20 pt-10 lg:py-0 font-inter">
				<div className="w-10/12 md:w-7/12 lg:w-4/12 flex flex-col justify-center gap-3">
					<h3 className="text-text_blue font-bold text-4xl">
						Solo 50 lugares disponibles para la primera fase
					</h3>
					<p className="text-text_blue">
						Ingresa tu correo para ser seleccionado y ser uno de los primeros en
						tener acceso a la App{' '}
					</p>
					<form onSubmit={onSubmit} className="flex flex-col items-start gap-3">
						<label className="text-white">E-mail:</label>
						<input
							className="w-full rounded-full p-3"
							required
							type="email"
							name="email"
							onChange={(e) => handleEmail(e.target.value)}
							placeholder="fitnessjoe@example.com"
						/>
						{success ? (
							<div className="w-full flex justify-center lg:justify-normal">
								<button className="bg-white text-black px-10 py-3 rounded-2xl transition hover:bg-black hover:text-white">
									Enviado!
								</button>
							</div>
						) : (
							<div className="w-full flex justify-center lg:justify-normal">
								<button className="bg-black text-white px-10 py-3 rounded-2xl transition hover:bg-white hover:text-black">
									{loading ? <HashLoader color={'#fff'} size={18} /> : 'Enviar'}
								</button>
							</div>
						)}
						{error ? (
							<p className="text-sm text-red-600 font-bold lg:w-auto w-full lg:text-left text-center">
								Parece ser que el correo que intentas enviar, ya ha sido
								registrado
							</p>
						) : (
							<>
								{success ? (
									<p className="text-green-500 font-bold lg:w-auto w-full lg:text-left text-center">
										¡Registro enviado correctamente!
									</p>
								) : (
									''
								)}
							</>
						)}
					</form>
				</div>
				<div className="lg:h-[65vh] flex flex-col lg:flex-row gap-5">
					<div className="flex items-start">
						<img width={232} src={iphone_top} alt="iphone_top" />
					</div>
					<div className="flex items-end">
						<img width={232} src={iphone_bottom} alt="iphone_bottom" />
					</div>
				</div>
			</div>
			<div className="h-[60vh] xl:h-[38vh] bg-black text-white flex justify-center items-center">
				<div className="w-8/12 flex flex-col xl:flex-row xl:justify-between items-center xl:border-t xl:pt-5 relative gap-10 xl:gap-0">
					<div className="w-96 flex flex-col gap-3 px-5 xl:px-0">
						<h3 className="text-3xl xl:text-4xl font-bold">
							Buscas practicas profesionales
						</h3>
						<p>
							Unete a nuestro equipo y ayudanos a revoluzionar la industria del
							fitness
						</p>
					</div>
					<div className="xl:w-0 w-96 border-t"></div>
					<div className="relative xl:right-24">
						<Button>Sube tu CV aqui!</Button>
						<img
							className="absolute z-0 -top-3 scale-[1.5] xl:scale-[1.8]"
							src={semicircle}
							alt="semicircle"
						/>
					</div>
				</div>
			</div>
			<Footer />
			<Analytics />
		</>
	);
}

export default Home;
