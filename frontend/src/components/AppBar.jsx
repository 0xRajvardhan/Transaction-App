/* eslint-disable */
export const Appbar = ({ value = "User" }) => {
    return <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Payments App</h1>
        <div className="flex items-center space-x-4">
            <span className="text-gray-600">Hello, {value}</span>
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                {value?.[0]?.toUpperCase() || "U"}
            </div>
        </div>
    </div>
}