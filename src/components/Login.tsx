import { useEffect, useState } from "react";
import LoginForm from "./auth/LoginForm";
import SignupForm from "./auth/SignupForm";

interface inputTypes {
    loaderpass: (status: boolean) => void,
    logger: (status: boolean) => void
}

function Login({ loaderpass, logger }: inputTypes) {
    const [isLogin, setIsLogin] = useState<Boolean>(false);
    function loginIn(status: Boolean) {
        setIsLogin(status);
    }

    useEffect(() => {
        if (isLogin) {
            const timer = setTimeout(() => {
                logger(true); // Final log-in transition to main app
            }, 2000); // skeleton shown for 2s
            return () => clearTimeout(timer);
        }
    }, [isLogin]);

    const Skeleton = () => (
        <div className="flex flex-col items-start gap-4 w-full animate-pulse">
            <div className="h-6 bg-gray-500 rounded w-64 mx-auto"></div>
            <div className="h-6 bg-gray-500 rounded w-full"></div>
            <div className="h-6 bg-gray-500 rounded w-full"></div>
            <div className="h-8 bg-gray-500 rounded w-full"></div>
            <div className="h-8 bg-gray-500 rounded w-2/3"></div>
        </div>
    );

    if (isLogin) {
        return (
            <div className="flex flex-col justify-start items-start h-full px-8 sm:px-12 py-8 sm:py-12">
                <Skeleton />
            </div>
        )
    }

    return (
        <div className=" flex flex-col-reverse sm:flex-row">
            <div className="login">
                <LoginForm loaderpass={loaderpass} onlogin={loginIn} />
            </div>
            <div className="signup">
                <SignupForm loaderpass={loaderpass} signup={logger} />
            </div>
        </div>
    )
}

export default Login;