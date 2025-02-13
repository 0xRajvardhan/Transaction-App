/* eslint-disable */
export function Button({label, onClick}) {
    return <button onClick={onClick} type="button" className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300">{label}</button>
}
