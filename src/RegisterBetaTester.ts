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
	try {
		const ref = collection(db, 'users-beta');
		const docRef = await addDoc(ref, { email });

		setSuccess(true);
		console.log('✅ Solicitud enviada correctamente.');

		return docRef.id;
	} catch (error) {
		console.error('⛔ Error:', error);
		throw error;
	}
};
