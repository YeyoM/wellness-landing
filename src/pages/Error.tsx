import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
	const navigate = useNavigate();

	setTimeout(() => {
		navigate('/');
	}, 1500);

    return (
        <p className='p-5'>Redirect...</p>
    )
};

export default ErrorPage;
