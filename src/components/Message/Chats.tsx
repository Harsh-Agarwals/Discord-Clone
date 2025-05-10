import { useEffect, useRef } from "react";

interface UserChatType {
    text: string,
    time: string,
    by: string
}

interface ChatProps {
    userChat: UserChatType[]
}

function Chats({ userChat }: ChatProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({
            behavior: "smooth"
        })
    }, [])

    return (
        <div className=" overflow-y-scroll px-4 my-4">
            {
                userChat.map((chat) => (
                    <div key={Math.random()} className={`py-2 flex flex-col ${chat.by=="other" ? "items-start" : "items-end"}`}>
                        {
                            ['jpg', 'jpeg', 'svg', 'gif', 'png', 'webp'].some(ext => chat.text.endsWith(ext)) ? <img src={chat.text} className=" w-[8rem]" /> : <h1 className={`${chat.by=="other" ? "bg-slate-400" : "bg-stone-300"} rounded-md text-sm px-2 py-1 w-[65%]`}>{chat.text}</h1>
                        }
                        
                        <p className={`text-xs pt-1 tracking-wider text-gray-200 ${chat.by=="me" ? "text-slate-400" : "text-stone-300"}`}>{chat.time}</p>
                    </div>
                ))
            }
            <div ref={scrollRef}></div>
        </div>
    )
}

export default Chats;