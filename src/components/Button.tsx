import { ButtonI } from '../vite-env';

const Button = ({ children, className, btn }: ButtonI) => {
	return btn ? (
		<a href='#access_to_app' className={className}>{children}</a>
	) : (
		<div className={className}>{children}</div>
	);
};

export default Button;
