import { useState } from "react";
import Chats from "./Chats/Chats";
import Details from "./Detail/Details";
import Messages from "./Message/Message";
import Login from "./Login";

function MessageScreen({ loaderpass }: { loaderpass: (status: boolean) => void }) {
    const [isLogin, setIsLogin] = useState<Boolean>(false);
    function logIn(status: Boolean) {
        setIsLogin(status);
    }
    return (
        <div>
            {isLogin ? 
                <div className=" grid grid-cols-[1fr_2fr_1fr] bg-transparent backdrop-blur-2xl border-gray-400 rounded-lg border-[1px] h-full">
                    <Chats />
                    <Messages />
                    <Details name={"Duck Duck Go"} about1={"lorem ipsum anduril"} />
                </div>
                : <div className=" bg-transparent backdrop-blur-2xl border-gray-400 rounded-lg border-[1px] mt-9 h-full">
                    <Login loaderpass={loaderpass} logger={logIn} />
            </div> }
        </div>
    )
}

export default MessageScreen;