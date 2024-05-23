import { useState } from 'react';
import { db } from '../firebaseConfig.js';
import {
	query,
	collection,
	deleteDoc,
	where,
	getDocs,
} from 'firebase/firestore';

const DeleteUser = () => {
	const [confirm, setConfirm] = useState(false);
	const [userEmail, setUserEmail] = useState('');
    const [userDelete, setUserDelete] = useState(false);

	const returnHome = () => {
		location.href = '/';
	};

	const handleConfirm = () => {
		setConfirm(true);
	};

	const removeUser = async () => {
		const querySnapshot = await getDocs(
			query(collection(db, 'users'), where('email', '==', userEmail))
		);

		if (!querySnapshot.empty) {
			const userDoc = querySnapshot.docs[0];
			await deleteDoc(userDoc.ref);
            setUserDelete(true);
		} else {
			console.log(
				'No se encontró ningún usuario con el correo electrónico proporcionado'
			);
		}
	};

	return (
		<>
			<header className="w-100 bg-text_blue text-white font-bold p-5 text-3xl">
				<h1>Remover Usuario</h1>
			</header>
			<main className="w-100 h-[calc(100vh-76px)] flex justify-center items-center bg-primary">
				<section className={`${confirm ? 'hidden' : ''} flex flex-col gap-6`}>
					<p className="text-2xl">
						¿Estás seguro que deseas remover tu usuario?
					</p>
					<div className="flex justify-around">
						<button
							onClick={handleConfirm}
							className="bg-white text-lg px-14 py-2 rounded-lg">
							Si
						</button>
						<button
							onClick={returnHome}
							className="font-bold bg-text_blue text-white text-lg px-14 py-2 rounded-lg">
							No
						</button>
					</div>
				</section>
				{userDelete ? (
					''
				) : (
					<section className={`${confirm ? '' : 'hidden'} flex flex-col gap-2`}>
						<p className="text-2xl">Escriba su correo electrónico</p>
						<div className="flex flex-col justify-around gap-4">
							<input
								onChange={(e) => setUserEmail(e.target.value)}
								className="w-[30em] p-3"
								type="text"
								placeholder={'example@example.example'}
							/>
							<button
								onClick={removeUser}
								className="font-bold bg-text_blue text-white text-lg px-14 py-2 rounded-lg">
								Confirmar
							</button>
						</div>
					</section>
				)}
				<section
					className={`${userDelete ? '' : 'hidden'} flex flex-col items-center gap-3`}>
					<p className="text-white text-2xl font-bold">Usuario eliminado exitosamente</p>

					<button
						onClick={returnHome}
						className="font-bold bg-text_blue text-white text-lg px-10 py-2 rounded-lg">
						Volver
					</button>
				</section>
			</main>
		</>
	);
};

export default DeleteUser;
