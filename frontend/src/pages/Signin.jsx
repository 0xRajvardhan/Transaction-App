import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

const Signin = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-300">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <Heading label={"Sign In"} />
                <SubHeading label={"Enter your credentials to access your account"} />
                <form>

                    <div className="mb-4">
                        <InputBox label={"Email"} placeholder={"johndoe@example.com"} />
                    </div>
                    <div className="mb-6">
                        <InputBox label={"Password"} placeholder={" "} />
                    </div>
                    <Button label={"Sign in"} />
                </form>
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
            </div>
        </div>
    );
}

export default Signin;