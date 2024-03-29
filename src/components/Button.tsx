import { ButtonI } from '../vite-env';

const Button = ({ children, redirect }: ButtonI) => {
	return redirect ? (
		<a
			href="#access_to_app"
			className="text-white bg-primary px-4 py-3 font-semibold rounded hover:bg-[#1159b8] transition">
			{children}
		</a>
	) : (
		<a
			href="https://forms.gle/W11vRPKh5SUCGvpKA"
			target='_blank'
			className="text-white text-2xl bg-primary px-4 py-3 font-bold rounded hover:bg-[#1159b8] transition relative z-10">
			{children}
		</a>
	);
};

export default Button;
