import '@fontsource-variable/inter';
import logo from '@assets/logo.png';
import iphone from '@assets/iphone.png';
import lines from '@assets/lines.png';

function App() {
	return (
		<div className="bg-black flex items-center w-full h-screen">
			<div className="flex justify-center items-start gap-20">
				<div className="w-5/12 flex flex-col items-start gap-6 relative z-10">
					<img className="w-9/12" src={logo} alt="logo" />
					<p className="text-white font-bold text-6xl">
						La forma más sencilla de alcanzar tus objetivos
					</p>
					<p className="text-[#9095A1]">
						Entrena con la ayuda de AI y descubre la mejor hora para realizar tu
						rutina
					</p>
					<button className="text-white bg-primary px-4 py-3 font-semibold rounded">
						Unete ya!
					</button>
				</div>
				<div className="relative z-10">
					<img className="w-72" src={iphone} alt="iphone-wellnes" />
				</div>
				<img className="absolute z-0 bottom-0" src={lines} alt="lines-footer" />
			</div>
		</div>
	);
}

export default App;