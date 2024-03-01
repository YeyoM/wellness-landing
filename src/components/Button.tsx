import { ButtonI } from '../vite-env';

const Button = ({ children, className, btn }: ButtonI) => {
	return btn ? (
		<button className={className}>{children}</button>
	) : (
		<div className={className}>{children}</div>
	);
};

export default Button;
