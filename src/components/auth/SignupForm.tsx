import { useState, type BaseSyntheticEvent } from "react";

function SignupForm() {
    const [profileChosen, setProfileChosen] = useState(false);
    const [profile, setProfile] = useState<string>('');

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function usernameInp(e: BaseSyntheticEvent) {
        setUserName(e.target.value);
    }

    function emailInp(e: BaseSyntheticEvent) {
        setEmail(e.target.value);
    }

    function passwordInp(e: BaseSyntheticEvent) {
        setPassword(e.target.value);
    }

    function signupBtnClick(e: BaseSyntheticEvent) {
        e.preventDefault();
        if (username.length>=6 && email.includes(".") && email.includes("@") && password.length>=8) {
            console.log("Correct");
        } else {
            console.log("Incorrect");
        }
    }

    function fileInput(e: BaseSyntheticEvent) {
        setProfileChosen(true);
        setProfile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <div className=" flex flex-col gap-2 text-center justify-center px-8 sm:px-12 py-8 sm:py-12">
            <div>
                <h1 className=" text-xl text-gray-300 font-semibold tracking-wider">SignUp</h1>
            </div>
            <form action="" className=" flex flex-col gap-2 w-full justify-center items-center my-4">
                <div className="flex flex-col-reverse items-center">
                    {
                        profileChosen && <div><img src={profile} alt="profile_pic" className=" w-8 h-8 rounded-md mt-2" /></div>
                    }
                    <label htmlFor="profile_pic" className="text-gray-300 text-sm cursor-pointer underline">Upload Profile Pic</label>
                    <input type="file" onChange={(e) => fileInput(e)} name="profile_pic" id="profile_pic" className=" hidden" />
                </div>
                <input type="text" name="username" id="signupusername" placeholder="Username" value={username} onChange={(e) => usernameInp(e)} className=" text-sm px-2 py-1 rounded-md outline-none border-2 border-gray-500 bg-slate-800 text-gray-300 " required />
                <input type="email" name="email" id="email" value={email} placeholder="Email" onChange={(e) => emailInp(e)} className=" text-sm px-2 py-1 rounded-md outline-none border-2 border-gray-500 bg-slate-800 text-gray-300 " required />
                <input type="password" name="password" id="signuppassword" placeholder="Password" onChange={(e) => passwordInp(e)} value={password} className=" text-sm px-2 py-1 rounded-md outline-none border-2 border-gray-500 bg-slate-800 text-gray-300 " required />
                <button className=" text-sm font-semibold rounded-md text-gray-300 tracking-wider border-[1px] border-purple-800 py-1 px-6 bg-purple-700 hover:bg-purple-500 mt-2" onClick={(e) => signupBtnClick(e)} >SignUp</button>
            </form>
        </div>
    )
}   

export default SignupForm;