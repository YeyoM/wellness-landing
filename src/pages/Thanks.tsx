import logo_white from '@assets/logo_white.png'

const Thanks = () => {
    return (
			<div className="w-full h-screen bg-primary flex flex-col justify-center items-center gap-2 md:gap-5 px-10 md:px-0">
				<h2 className="font-bold text-center text-xl md:text-5xl">
					¡Gracias por contestar la encuesta!
				</h2>
				<p className="text-xs md:text-sm text-center">
					Pronto enviaremos un código de acceso a los seleccionados al correo
					que nos proporcionaste
				</p>
				<img className='w-48 md:w-80' src={logo_white} alt="wellnes_white_logo" />
			</div>
		);
}

export default Thanks;