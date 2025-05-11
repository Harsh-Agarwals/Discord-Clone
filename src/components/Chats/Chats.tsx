import { useEffect, useState } from "react";
import ChatLists from "./ChatLists";
import Search from "./Search";
import User from "./User";
import { userNames } from '../../utils'

function Chats() {
    const [names, setNames] = useState(userNames);
    const [userNew, setUserNew] = useState('');

    function updateSearch(query: string) {
        setNames(userNames.filter((name) => name.toLowerCase().includes(query)));
    }
    
    function newUser(e: string) {
        setUserNew(e);
    }

    useEffect(() => {
        if (userNew && !names.includes(userNew)) {
            setNames(namex => [...namex, userNew]);
        }
    }, [userNew])

    return (
        <div className="border-r-[1px] border-gray-400 flex-col h-[80vh] hidden sm:flex pb-4">
            <div className="user py-3">
                <User name={"Donald Duck"} />
                <Search searchQuery={updateSearch} newUser={newUser} />
            </div>
            <div className=" flex-1 overflow-y-scroll h-full">
                <ChatLists names={names} />
            </div>
        </div>
    )
}

export default Chats;