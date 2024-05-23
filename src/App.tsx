import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quest from './pages/Quest';
import Thanks from './pages/Thanks';
import ErrorPage from './pages/Error';
import GetGraphics from './pages/GetGraphics';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import DeleteUser from './pages/DeleteUser';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="/encuesta" element={<Quest />} />
				<Route path="/thanks-for-reply" element={<Thanks />} />
				<Route path="/resultados" element={<GetGraphics />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				<Route path="/terms-conditions" element={<TermsConditions />} />
				<Route path="/remover-usuario" element={<DeleteUser />} />
				<Route path="/*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
