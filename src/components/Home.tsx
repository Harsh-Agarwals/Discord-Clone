import { useState } from "react";
import MessageScreen from "./MsgScreen";
import Themes from "./Themes";
import { ToastContainer } from 'react-toastify'

function Home() {
    const [loader, setLoader] = useState<Boolean>(true);
    function loaderShow(status: Boolean) {
        setLoader(status);
    }
    return (
            <div className=" relative h-full">
                {
                    loader && 
                    <div className={` fixed inset-0 z-50 bg-black flex flex-col items-center justify-center gap-4 bg-opacity-60`}>
                        <div className="w-12 h-12 border-4 border-gray-300 border-t-purple-600 rounded-full animate-spin mx-auto"></div>
                        <p className="font-extrabold text-4xl text-gray-300 tracking-wider">loading...</p>
                    </div>
                }
                <Themes />
                <div className=" absolute  top-[10%] left-[50%] translate-x-[-50%] h-[80%]">
                    <MessageScreen loaderpass={loaderShow} />
                </div>
                <ToastContainer position="bottom-right" autoClose={5000} theme="dark" />
            </div>
    )
}

export default Home;