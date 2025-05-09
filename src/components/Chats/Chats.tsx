import { useState } from "react";
import ChatLists from "./ChatLists";
import Search from "./Search";
import User from "./User";

const userNames: string[] = ["Sawai Rajpurohit", "Yash Agarwal", "Saanya", "Nikunj", "Pranjal Soni", "Sawai Rajpurohit", "Yash Agarwal", "Saanya", "Nikunj", "Pranjal Soni", "Sawai Rajpurohit", "Yash Agarwal", "Saanya", "Nikunj", "Pranjal Soni", "Sawai Rajpurohit", "Yash Agarwal", "Saanya", "Nikunj", "Pranjal Soni"]

function Chats() {
    const [names, setNames] = useState(userNames);

    function updateSearch(query: string) {
        setNames(userNames.filter((name) => name.toLowerCase().includes(query)));
    }

    return (
        <div className="border-r-[1px] border-gray-400">
            <div className="user py-3">
                <User name={"Harsh Agarwal"} />
                <Search searchQuery={updateSearch} />
                <ChatLists names={names} />
            </div>
        </div>
    )
}

export default Chats;