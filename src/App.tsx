import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quest from './pages/Quest';
import Thanks from './pages/Thanks';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="/encuesta" element={<Quest />} />
				<Route path="/thanks-for-reply" element={<Thanks />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
