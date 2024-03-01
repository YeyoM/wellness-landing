import '@fontsource-variable/inter';
import logo from '@assets/logo.png';
import iphone from '@assets/iphone.png';
import chasing from '@assets/chasing.png';
import maxes from '@assets/maxes.png';
import phone_inclined from '@assets/phone_inclined.png';
import iphone_top from '@assets/iphone_top.png';
import iphone_bottom from '@assets/iphone_bottom.png';
import icon_1 from '@assets/svg/icon_1.svg';
import icon_2 from '@assets/svg/icon_2.svg';
import icon_3 from '@assets/svg/icon_3.svg';
import icon_4 from '@assets/svg/icon_4.svg';
import icon_5 from '@assets/svg/icon_5.svg';
import icon_6 from '@assets/svg/icon_6.svg';
// import line_primary from '@assets/svg/line_primary.svg';
import lines from '@assets/lines.png';
import Footer from '@components/Footer';
import Button from '@components/Button';
import HerramientasCardMini from '@components/HerramientasMini';
import './App.css'

function App() {
	return (
		<>
			<div className="bg-black flex items-center w-full h-screen relative font-inter">
				<div className="flex justify-center items-start gap-20">
					<div className="w-5/12 flex flex-col items-start gap-6 relative z-20">
						<img className="w-9/12" src={logo} alt="logo" />
						<h2 className="text-white font-bold text-6xl">
							La forma más sencilla de alcanzar tus objetivos
						</h2>
						<p className="text-[#9095A1]">
							Entrena con la ayuda de AI y descubre la mejor hora para realizar
							tu rutina
						</p>
						<Button
							btn
							className="text-white bg-primary px-4 py-3 font-semibold rounded hover:bg-[#1159b8] transition">
							Unete ya!
						</Button>
					</div>
					<div className="relative z-20">
						<img className="w-72" src={iphone} alt="iphone-wellnes" />
					</div>
					<img
						className="absolute z-10 bottom-0"
						src={lines}
						alt="lines-footer"
					/>
					{/* <img
					className="absolute object-cover left-0 bottom-0 w-full h-60 z-0"
					src={line_primary}
					alt="lines-footer"
				/> */}
				</div>
			</div>
			<div className="bg-black w-full h-screen flex flex-col gap-16 justify-center items-center font-inter">
				<div className="flex flex-col gap-5 text-white text-center w-1/2">
					<h2 className="font-bold text-5xl">100% personalizado</h2>
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
						description="Registra tu actividad, alimentación y sueño en un solo lugar para un análisis completo."
					/>
					<HerramientasCardMini
						icon={icon_6}
						title="Comunidad Motivadora"
						description="Conecta con personas que comparten tus objetivos en un espacio de apoyo y motivación."
					/>
				</div>
			</div>
			<div className="bg-black w-full h-screen flex justify-center items-center font-inter">
				<div className="flex flex-col items-start gap-10">
					<div className="flex flex-col gap-3">
						<h2 className="text-white text-5xl font-bold w-4/6">
							Comparte tus logros en tu perfil
						</h2>
						<p className="text-[#9095A1]">Inspira a otros usuarios</p>
					</div>
					<img
						className="transition hover:scale-105"
						src={maxes}
						alt="maxes"
						width={350}
					/>
					<div className="w-10/12 flex justify-end">
						<img
							className="transition hover:scale-105"
							src={chasing}
							alt="chasing"
							width={350}
						/>
					</div>
				</div>
				<img width={520} src={phone_inclined} alt="phone inclined" />
			</div>
			<div className="h-72 bg-black flex justify-center items-center gap-24 text-white font-inter">
				<div className="flex flex-col gap-3">
					<h3 className="w-96 font-bold text-4xl">
						Con 200+ ejercicios diferentes
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
			<div className="bg-primary flex justify-center gap-20 font-inter">
				<form className="w-4/12 flex flex-col justify-center gap-3">
					<h3 className="text-text_blue font-bold text-4xl">
						Solo 50 lugares disponibles para la primera fase
					</h3>
					<p className="text-text_blue">
						Ingresa tu correo para ser seleccionado y ser uno de los primeros en
						tener acceso a la App{' '}
					</p>
					<div className="flex flex-col gap-3">
						<label className="text-white">E-mail:</label>
						<input
							className="rounded-full p-3"
							required
							type="email"
							placeholder="fitnessjoe@example.com"
						/>
					</div>
				</form>
				<div className="h-[65vh] flex gap-5">
					<div className="flex items-start">
						<img width={232} src={iphone_top} alt="iphone_top" />
					</div>
					<div className="flex items-end">
						<img width={232} src={iphone_bottom} alt="iphone_bottom" />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default App;
