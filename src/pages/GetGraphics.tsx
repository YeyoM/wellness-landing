import { useEffect, useState } from 'react';
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import {
	collection,
	getDocs,
	DocumentData,
	query,
	where,
} from 'firebase/firestore';
import { db } from '../firebaseConfig';

const GetGraphics = () => {
	const [type, setType] = useState('favFeature');
	const [data, setData] = useState<DocumentData[] | undefined>(undefined);
	const [loading, setLoading] = useState(false);

	const favFeatureStats = [
		{ Crowdmetwer: 0 },
		{ 'Rutinas Personalizadas': 0 },
		{ 'Reportes de progreso': 0 },
		{ 'Ver el progreso de mis amigos': 0 },
	];

	const soStats = [
		{ iOS: 0 },
		{ Android: 0 },
		{ Otro: 0 }
	];

	const motivationStats = [
		{ Salud: 0 },
		{ Estetica: 0 },
		{ 'Mi gym crush': 0 },
		{ Fuerza: 0 },
	];

	const rateRutinaStats = [
		{ 'Podria mejorar': 0 },
		{ 'Hago la que me dieron en el gym': 0 },
		{ 'No tengo rutina': 0 },
		{ 'No me gusta': 0 },
	];

	const getData = async () => {
		setLoading(true);
		const usersRef = collection(db, 'users-beta');
		const q = query(usersRef, where('favFeature', '!=', false));
		const capitalNotFalseRes = await getDocs(q);
		const newData = capitalNotFalseRes.docs.map((doc) => doc.data());

		newData.forEach((prop) => {
			if (type === 'favFeature') {
				const feature = prop.favFeature;
				const index = favFeatureStats.findIndex((item) => feature in item);
				if (index !== -1) {
					favFeatureStats[index][feature]++;
				}
			} else if (type === 'so') {
				const so = prop.so;
				const index = soStats.findIndex((item) => so in item);
				if (index !== -1) {
					soStats[index][so]++;
				}
			} else if (type === 'motivation') {
				const motivation = prop.motivation;
				const index = motivationStats.findIndex((item) => motivation in item);
				if (index !== -1) {
					motivationStats[index][motivation]++;
				}
			} else if (type === 'rateRutina') {
				const rateRutina = prop.rateRutina;
				const index = rateRutinaStats.findIndex((item) => rateRutina in item);
				if (index !== -1) {
					rateRutinaStats[index][rateRutina]++;
				}
			}
		});

		if (type === 'favFeature') {
			setData(favFeatureStats);
		} else if (type === 'so') {
			setData(soStats);
		} else if (type === 'motivation') {
			setData(motivationStats);
		} else if (type === 'rateRutina') {
			setData(rateRutinaStats);
		}

		setLoading(false);
	};

	useEffect(() => {
		getData();
	}, [type]);

	return (
		<div className="h-screen flex justify-center items-center">
			<div className="w-8/12 flex items-center flex-col gap-5">
				<p>
					<label htmlFor="quest">Results preferences from Quest [{type}]</label>
				</p>
				<div className="flex gap-1">
					<input
						className="border-2 border-primary outline-none p-2 rounded-lg"
						onChange={(e) => setType(e.target.value)}
						list="types"
						value={type}
						name="types"
					/>
					<datalist id="types">
						<option value="favFeature" />
						<option value="motivation" />
						<option value="rateRutina" />
						<option value="so" />
					</datalist>
					<button onClick={() => setType('')}>❌</button>
				</div>
				{loading ? (
					<h2>Cargando...</h2>
				) : (
					<ResponsiveContainer width="100%" aspect={2}>
						<BarChart
							data={data}
							width={500}
							height={300}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5,
							}}>
							<CartesianGrid strokeDasharray="4 1 2" />
							<XAxis dataKey='simple_datakey' />
							<YAxis />
							<Tooltip />
							<Legend />
							{type === 'favFeature' ? (
								<>
									<Bar dataKey="Crowdmetwer" fill="#f00" />
									<Bar dataKey="Rutinas Personalizadas" fill="#0a0" />
									<Bar dataKey="Reportes de progreso" fill="#00f" />
									<Bar dataKey="Ver el progreso de mis amigos" fill="#f0f" />
								</>
							) : (
								''
							)}
							{type === 'motivation' ? (
								<>
									<Bar dataKey="Salud" fill="#0a0" />
									<Bar dataKey="Estetica" fill="#00f" />
									<Bar dataKey="Mi gym crush" fill="#f0f" />
									<Bar dataKey="Fuerza" fill="#a00" />
								</>
							) : (
								''
							)}
							{type === 'so' ? (
								<>
									<Bar dataKey="Android" fill="#0a0" />
									<Bar dataKey="iOS" fill="#00f" />
									<Bar dataKey="Otro" fill="#000" />
								</>
							) : (
								''
							)}
							{type === 'rateRutina' ? (
								<>
									<Bar dataKey="Podria mejorar" fill="#0a0" />
									<Bar dataKey="Hago la que me dieron en el gym" fill="#f00" />
									<Bar dataKey="No tengo rutina" fill="#00f" />
									<Bar dataKey="No me gusta" fill="#000" />
								</>
							) : (
								''
							)}
						</BarChart>
					</ResponsiveContainer>
				)}
			</div>
		</div>
	);
};

export default GetGraphics;
