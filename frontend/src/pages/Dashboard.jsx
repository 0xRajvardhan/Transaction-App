import { useState } from 'react';

const users = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
  { id: 3, name: 'User 3' }
];

const Dashboard = () => {
  const [search, setSearch] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Payments App</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Hello, User</span>
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              U
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-2">Your Balance <span className="text-green-600">$5000</span></h2>

        <h3 className="text-lg font-semibold mt-6 mb-2">Users</h3>
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md"
        />

        <ul className="space-y-4">
          {filteredUsers.map(user => (
            <li key={user.id} className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  U{user.id}
                </div>
                <span className="font-semibold">{user.name}</span>
              </div>
              <button className="p-2 px-4 text-white bg-black rounded-md hover:bg-gray-800">
                Send Money
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
