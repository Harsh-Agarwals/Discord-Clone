import ChatUser from "./ChatUser";
import SendMsg from "./SendMsg";

function Messages() {
    return (
        <div className="user border-r-[1px] border-gray-400 flex flex-col justify-between">
            <ChatUser name={"Sawai Rajpurohit"} about1={"lorem ipsum anduril"} about2={"18: 06"} />
            <SendMsg />
        </div>
    )
}

export default Messages;