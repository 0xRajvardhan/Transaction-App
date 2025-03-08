import { useEffect, useState } from "react"
import axios from "axios";
import { SendMoneyButton } from "./SendMoneyButton";
import { useNavigate } from "react-router-dom";

/* eslint-disable */
export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL.trimEnd('/')}/api/v1/user/bulk?filter=${filter}`)
            .then(response => {
                setUsers(response.data.user)
            })
    }, [filter])

    return <>
        <h3 className="text-lg font-semibold mt-6 mb-2">Users</h3>
        <input
            onChange={e => setFilter(e.target.value)}
            type="text"
            placeholder="Search users..."
            className="w-full p-2 mb-4 border rounded-md border-slate-300"
        />
        <ul className="space-y-4">
            {users.length > 0 ? (
                users.map(user => <User key={user.id} user={user} />)
            ) : (
                <p className="text-gray-500">No users found.</p>
            )}
        </ul>

    </>
}

function User({ user }) {
    const navigate = useNavigate();
    return <li key={user.id} className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                {user.firstName[0].toUpperCase()}{user.lastName[0].toUpperCase()}
            </div>
            <span className="font-semibold text-lg">{user.firstName} {user.lastName}</span>
        </div>
        <SendMoneyButton onClick={(e) => {
            navigate(`/send?id=${user.id}&name=${user.firstName}`)
        }} label={"Send Money"} />
    </li>
}
