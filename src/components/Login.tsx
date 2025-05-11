import LoginForm from "./auth/LoginForm";
import SignupForm from "./auth/SignupForm";

function Login() {
    return (
        <div className=" flex flex-col-reverse sm:flex-row">
            <div className="login">
                <LoginForm />
            </div>
            <div className="signup">
                <SignupForm />
            </div>
        </div>
    )
}

export default Login;