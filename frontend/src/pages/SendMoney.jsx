const SendMoney = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white rounded-md shadow-xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-4">Send Money</h2>
          <div className="flex items-center mb-4">
            <div className="bg-green-500 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold text-xl">
              A
            </div>
            <div className="ml-4">
              <p className="font-bold text-lg">Friend&rsquo;s Name</p>
              <p className="text-gray-500">Amount (in Rs)</p>
            </div>
          </div>
          <input
            type="text"
            placeholder="Enter amount"
            className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:border-green-500"
          />
          <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
            Initiate Transfer
          </button>
        </div>
      </div>
    );
  };
  
  export default SendMoney;