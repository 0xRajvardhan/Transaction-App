import { useState } from "react"
/* eslint-disable */
export const Users = () => {
    // Replace with backend call
    const [users, setUsers] = useState([{
        firstName: "Rajvardhan",
        lastName: "Singh",
        _id: 1
    }]);

    return <>
        <h3 className="text-lg font-semibold mt-6 mb-2">Users</h3>
        <input
            type="text"
            placeholder="Search users..."
            className="w-full p-2 mb-4 border rounded-md"
        />
        <ul className="space-y-4">
            <div>
                {users.map(user => <User user={user} />)}
            </div>
        </ul>
    </>
}

function User({ user }) {
    return <li key={user.id} className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                {user.firstName[0]}{user.lastName[0]}
            </div>
            <span className="font-semibold">{user.firstName} {user.lastName}</span>
        </div>
        <button className="p-2 px-4 text-white bg-black rounded-md hover:bg-gray-800">
            Send Money
        </button>
    </li>
}
