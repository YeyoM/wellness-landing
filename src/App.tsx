import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quest from './pages/Quest';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index path='/' element={<Home />} />
				<Route path='/encuesta' element={<Quest />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
