import { FaVideo } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaCircleExclamation } from "react-icons/fa6";

interface UserType {
    name: string,
    about1: string,
    about2: string
}

function ChatUser({name, about1, about2}: UserType) {
    return (
        <div className=" heading py-3 px-3 flex flex-row align-middle items-center justify-between gap-4 border-b-[1px] border-gray-400">
            <div className="about flex flex-row gap-3 items-center w-full md:min-w-64">
                <p className=" font-medium text-lg bg-gray-400 text-center py-1 px-3 rounded-full">{name[0].toUpperCase()}</p>
                <div>
                    <h1 className=" font-medium text-base text-white leading-5">{name}</h1>
                    <p className=" font-medium text-gray-400 text-xs">{about1}, {about2}</p>
                </div>
            </div>
            <div className="options flex flex-row gap-[0.6rem] text-white text-lg">
                <button className=" hover:text-gray-400"><IoCall /></button>
                <button className=" hover:text-gray-400"><FaVideo /></button>
                <button className=" hover:text-gray-400"><FaCircleExclamation /></button>
            </div>
        </div>
    )
}

export default  ChatUser;