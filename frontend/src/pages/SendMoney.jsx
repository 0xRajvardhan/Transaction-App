import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);
    const [success, setSuccess] = useState(false);

    const handleTransfer = () => {
        axios.post(`${import.meta.env.VITE_API_URL.trimEnd('/')}/api/v1/account/transfer`, {
            to: id,
            amount: parseFloat(amount)
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((response) => {
            console.log('Transfer successful:', response.data);
            setSuccess(true); // Trigger success animation
        })
        .catch((error) => {
            console.error('Error during transfer:', error);
            alert("Transfer failed. Please try again.");
        });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white rounded-md shadow-xl p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-4">Send Money</h2>
                <div className="flex items-center mb-4">
                    <div className="bg-green-500 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold text-xl">
                        {name[0].toUpperCase()}
                    </div>
                    <div className="ml-4">
                        <p className="font-bold text-lg">{name}</p>
                        <p className="text-gray-500">Amount (in Rs)</p>
                    </div>
                </div>
                <input
                    onChange={e => setAmount(e.target.value)}
                    type="number"
                    placeholder="Enter amount"
                    className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:border-green-500"
                />
                <button onClick={handleTransfer} className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
                    Initiate Transfer
                </button>
            </div>
            {/* Success Animation */}
            <AnimatePresence>
                {success && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-xl p-8 text-center shadow-xl"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <div className="text-green-500 mb-4">
                                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Success!</h3>
                            <p className="text-gray-600 mb-4">Your transfer was completed successfully.</p>
                            <button
                                onClick={() => setSuccess(false)}
                                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SendMoney;