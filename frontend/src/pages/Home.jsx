import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-300 ">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h1 className="text-4xl font-bold mb-6">Transaction App</h1>
                <p className="text-lg mb-6">Make seamless payments to your friends and family.</p>
                <div className="flex gap-4 w-60">
                    <button onClick={() => { navigate("/signup") }} className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300">Sign-Up</button>
                    <button onClick={() => { navigate("/signin") }} className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300">Sign-In</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
