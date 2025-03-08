/* eslint-disable */
export const Balance = ({ value }) => {
    return <h2 className="text-xl font-bold">
        Your Balance <span className="text-green-600">Rs.{Number(value).toFixed(2)}</span>
    </h2>


}