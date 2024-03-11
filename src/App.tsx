import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quest from './pages/Quest';
import Thanks from './pages/Thanks';
import ErrorPage from './pages/Error';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="/encuesta" element={<Quest />} />
				<Route path="/thanks-for-reply" element={<Thanks />} />
				<Route path="/*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
