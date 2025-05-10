import { useState } from "react";
import ChatLists from "./ChatLists";
import Search from "./Search";
import User from "./User";

const userNames: string[] = ["John Schiff", "Bill Clinton", "Shakira", "Nikunj", "John Schiff", "Bill Clinton", "Shakira", "Nikunj", "John Schiff", "Bill Clinton", "Shakira", "Nikunj", "John Schiff", "Bill Clinton", "Shakira", "Nikunj", "Yash Agarwal", "John Schiff", "Bill Clinton", "Shakira", "Nikunj"]

function Chats() {
    const [names, setNames] = useState(userNames);

    function updateSearch(query: string) {
        setNames(userNames.filter((name) => name.toLowerCase().includes(query)));
    }

    return (
        <div className="border-r-[1px] border-gray-400 flex-col h-[80vh] hidden sm:flex pb-4">
            <div className="user py-3">
                <User name={"Donald Duck"} />
                <Search searchQuery={updateSearch} />
            </div>
            <div className=" flex-1 overflow-y-scroll h-full">
                <ChatLists names={names} />
            </div>
        </div>
    )
}

export default Chats;