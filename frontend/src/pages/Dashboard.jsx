import { useEffect, useState } from "react";
import axios from "axios";
import { Appbar } from '../components/AppBar';
import { Balance } from '../components/Balance';
import { Users } from '../components/Users';

const Dashboard = () => {
  const [firstName, setFirstName] = useState("");
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${import.meta.env.VITE_API_URL.trimEnd('/')}/api/v1/account/balance`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setFirstName(response.data.firstName);
        setBalance(response.data.balance);
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    };
    fetchBalance();
  }, []);

  return (
    <div className="min-h-screen bg-slate-300 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <Appbar value={firstName}/>
        <Balance value={balance} />
        <Users />
      </div>
    </div>
  );
};

export default Dashboard;
