/* eslint-disable */
export function InputBox({ label, placeholder, onChange }) {
    return <>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
            {label}
        </label>
        <input onChange={onChange} placeholder={placeholder} className="w-full px-4 py-2 border rounded border-slate-300" />
    </>
}