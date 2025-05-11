function SignupForm() {
    function signupBtnClick(e) {
        e.preventDefault();
        console.log(e);
    }
    return (
        <div className=" flex flex-col gap-2 text-center justify-center px-8 sm:px-12 py-8 sm:py-12">
            <div>
                <h1 className=" text-xl text-gray-300 font-semibold tracking-wider">SignUp</h1>
            </div>
            <form action="" className=" flex flex-col gap-2 w-full justify-center items-center my-4">
                <input type="text" name="username" id="signupusername" placeholder="Username" className=" text-sm px-2 py-1 rounded-md outline-none border-2 border-gray-500 bg-slate-800 text-gray-300 " />
                <input type="email" name="email" id="email" placeholder="Email" className=" text-sm px-2 py-1 rounded-md outline-none border-2 border-gray-500 bg-slate-800 text-gray-300 " />
                <input type="password" name="password" id="signuppassword" placeholder="Password" className=" text-sm px-2 py-1 rounded-md outline-none border-2 border-gray-500 bg-slate-800 text-gray-300 " />
                <button className=" text-sm font-semibold rounded-md text-gray-300 tracking-wider border-[1px] border-purple-800 py-1 px-6 bg-purple-700 hover:bg-purple-500 mt-2" onClick={(e) => signupBtnClick(e)} >SignUp</button>
            </form>
        </div>
    )
}   

export default SignupForm;