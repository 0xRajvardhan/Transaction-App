import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-300">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <Heading label={"Sign Up"} />
        <SubHeading label={"Enter your information to create an account"} />
        <form>
          <div className="mb-4">
            <InputBox label={"First Name"} placeholder={"John"} />
          </div>
          <div className="mb-4">
            <InputBox label={"Last Name"} placeholder={"Doe"} />
          </div>
          <div className="mb-4">
            <InputBox label={"Email"} placeholder={"johndoe@example.com"} />
          </div>
          <div className="mb-6">
            <InputBox label={"Password"} placeholder={" "} />
          </div>
          <Button label={"Sign up"} />
        </form>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  );
};

export default Signup;

