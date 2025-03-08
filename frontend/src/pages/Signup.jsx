import { useState } from "react";
import axios from "axios";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL.trimEnd('/')}/api/v1/user/signup`, {
        username,
        firstName,
        lastName,
        password
      });

      const data = response.data;

      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (error) {
      setError(error.response?.data?.message || "Invalid credentials. Please try again.");
    } 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-300">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <Heading label={"Sign Up"} />
        <SubHeading label={"Enter your information to create an account"} />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <InputBox onChange={e => {
              setFirstName(e.target.value)
            }} label={"First Name"} placeholder={"John"} />
          </div>
          <div className="mb-4">
            <InputBox onChange={e => {
              setLastName(e.target.value)
            }} label={"Last Name"} placeholder={"Doe"} />
          </div>
          <div className="mb-4">
            <InputBox onChange={e => {
              setUsername(e.target.value)
            }} label={"Email"} placeholder={"johndoe@example.com"} />
          </div>
          <div className="mb-6">
            <InputBox onChange={e => {
              setPassword(e.target.value)
            }} label={"Password"} placeholder={" "} />
          </div>
          <Button label={"Sign up"} />
          {/* Show Error Message */}
          {error && <p className="text-red-500 text-center mt-5" >{error}</p>}
        </form>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  );
};

export default Signup;