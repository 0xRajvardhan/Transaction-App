const Signin = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold mb-2 text-center">Sign Up</h2>
        <p className="text-gray-600 mb-6 text-center">Enter your information to create an account</p>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input type="email" placeholder="johndoe@example.com" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
          </div>
          <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300">Sign Up</button>
        </form>
        <p className="text-center text-gray-600 mt-4">Already have an account? <a href="#" className="text-black font-semibold underline">Login</a></p>
      </div>
    </div>
    )
}

export default Signin;