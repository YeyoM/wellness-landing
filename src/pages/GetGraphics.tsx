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
    Brush
} from 'recharts';
import {
	collection,
	getDocs,
	DocumentData,
    query,
    where
} from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { toast, ToastContainer } from 'react-toastify'

const GetGraphics = () => {
	const [type, setType] = useState('favFeature');
	const [data, setData] = useState<DocumentData[] | undefined>(undefined);
    const [loading, setLoading] = useState(false);

	const getData = async () => {
        setLoading(true);
        const usersRef = collection(db, 'users-beta');
        const q = query(usersRef, where('favFeature', '!=', false));
        const capitalNotFalseRes = await getDocs(q);
        const newData = capitalNotFalseRes.docs.map((doc) => doc.data());
        setData(newData);
        console.log(data)
        setLoading(false);
	};

	useEffect(() => {
		getData();
	}, [type]);

    const data_example = [
			{ name: 'María', age: 10, weight: 60 },
			{ name: 'Karina', age: 25, weight: 70 },
			{ name: 'Susana', age: 15, weight: 65 },
			{ name: 'Pedro', age: 35, weight: 85 },
			{ name: 'Felipe', age: 12, weight: 48 },
			{ name: 'Laura', age: 30, weight: 69 },
			{ name: 'Adrián', age: 15, weight: 78 },
		];

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
							<XAxis />
							<YAxis dataKey={type} />
							<Tooltip />
							<Legend />
							<Brush dataKey={type} height={30} stroke="#8884d8" />
							<Bar dataKey={type} fill="#6b48ff" />
						</BarChart>
					</ResponsiveContainer>
				)}
			</div>
			<ToastContainer />
		</div>
	);
};

export default GetGraphics;
