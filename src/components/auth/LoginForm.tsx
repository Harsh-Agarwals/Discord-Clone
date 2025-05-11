import { useState, type BaseSyntheticEvent } from "react";

function LoginForm() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function usernameInp(e: BaseSyntheticEvent) {
        setUserName(e.target.value);
    }

    function passwordInp(e: BaseSyntheticEvent) {
        setPassword(e.target.value);
    }

    function loginBtnClick(e: BaseSyntheticEvent) {
        e.preventDefault();
        if (username.length>=6 && password.length>=8) {
            console.log("Correct");
        } else {
            console.log("Incorrect");
        }
    }
    return (
        <div className=" flex flex-col gap-2 text-center justify-center px-8 sm:px-12 py-8 sm:py-12 border-t-[1px] sm:border-t-0 sm:border-r-[1px] border-gray-400 h-full">
            <div>
                <h1 className=" text-xl text-gray-300 font-semibold tracking-wider underline underline-offset-2">Login</h1>
            </div>
            <form action="" className=" flex flex-col gap-2 w-full justify-center items-center my-4">
                <input type="text" name="username" id="username" placeholder="Username" value={username} onChange={(e) => usernameInp(e)} className=" text-sm px-2 py-1 rounded-md outline-none border-2 border-gray-500 bg-slate-800 text-gray-300 " required />
                <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => passwordInp(e)} className=" text-sm px-2 py-1 rounded-md outline-none border-2 border-gray-500 bg-slate-800 text-gray-300 " required />
                <button className=" text-sm font-semibold rounded-md text-gray-200 tracking-wider border-[1px] border-red-800 py-1 px-6 bg-red-600 hover:bg-red-500 mt-2" onClick={(e) => loginBtnClick(e)}>LogIn</button>
            </form>
        </div>
    )
}

export default LoginForm;