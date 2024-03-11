import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const getAll = async (
	email: string,
	setError: React.Dispatch<React.SetStateAction<boolean>>
) => {
	const querySnapshot = await getDocs(collection(db, 'users-beta'));
	let emailExists = false;
	querySnapshot.forEach((doc) => {
		if (doc.data().email === email) {
			emailExists = true;
			setError(true);
			console.error('⛔ El correo electrónico ya se encuentra registrado.');
			return;
		}
	});
	return emailExists;
};

export const registerUser = async (
	email: string,
	setSuccess: React.Dispatch<React.SetStateAction<boolean>>
) => {
	const ref = collection(db, 'users-beta');

	await addDoc(ref, { email })
		.then(() => {
			setSuccess(true);
			console.log('✅ Solicitud enviada correctamente.');
		})
		.catch((error) => console.error('⛔ Error:', error));
};