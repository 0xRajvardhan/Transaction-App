/* eslint-disable */
export function SendMoneyButton({ label, onClick }) {
    return (
        <button onClick={onClick} className="p-2 px-4 text-white bg-black rounded-md hover:bg-gray-800">
            {label}
        </button>
    )
}