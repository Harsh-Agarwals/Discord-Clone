import Chats from "./Chats/Chats";
import Details from "./Detail/Details";
import Messages from "./Message/Message";

function MessageScreen() {
    return (
        <div className=" grid grid-cols-[1fr_2fr_1fr] bg-transparent backdrop-blur-2xl border-gray-400 rounded-lg border-[1px] overflow-hidden overflow-y-scroll h-full">
            <Chats />
            <Messages />
            <Details />
        </div>
    )
}

export default MessageScreen;