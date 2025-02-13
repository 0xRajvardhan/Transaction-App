/* eslint-disable */
import { Link } from "react-router-dom"

export function BottomWarning({ label, buttonText, to }) {
    return <>
        <div className="text-center text-gray-600 mt-4">
            {label}
            <Link className="text-black font-semibold underline pl-1" to={to} >
                {buttonText}
            </Link>
        </div>
    </>
}