import { BtnRptaI } from "../vite-env";

const BtnRpta = ({ value, set, text }: BtnRptaI) => {
    return (
			<button
				onClick={() => set(text)}
				className={`${
					value === text ? 'text-white bg-[#105ec4]' : 'text-black bg-white'
				} rounded-2xl p-3 font-sans`}>
				{text}
			</button>
		);
}

export default BtnRpta;