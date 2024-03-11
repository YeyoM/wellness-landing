import { BtnRptaI } from "../vite-env";

const BtnRpta = ({ text }: BtnRptaI) => {
    return (
        <button className="bg-white rounded-2xl p-3 font-sans">{ text }</button>
    )
}

export default BtnRpta;