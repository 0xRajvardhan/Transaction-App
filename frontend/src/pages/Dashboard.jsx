import { Appbar } from '../components/AppBar';
import { Balance } from '../components/Balance';
import { Users } from '../components/Users';

const Dashboard = () => {

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <Appbar />
        <Balance value={5000} />
        <Users />
      </div>
    </div>
  );
};

export default Dashboard;
