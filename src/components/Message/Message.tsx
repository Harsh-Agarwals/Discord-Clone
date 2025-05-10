import Chats from "./Chats";
import ChatUser from "./ChatUser";
import SendMsg from "./SendMsg";
import userChats from '../../utils';

function Messages() {
    return (
        <div className="user lg:border-r-[1px] border-gray-400 flex flex-col justify-between h-[80vh]">
            <ChatUser name={"Duck Duck Go"} about1={"lorem ipsum anduril"} about2={"18: 06"} />
            <Chats userChat={userChats} />
            <SendMsg />
        </div>
    )
}

export default Messages;