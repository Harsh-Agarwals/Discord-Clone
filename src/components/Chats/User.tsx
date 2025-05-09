import { HiDotsHorizontal } from "react-icons/hi";
import { FaVideo } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";

interface UserType {
    name: string
}

function User({ name }: UserType) {
    return (
        <div className=" flex flex-row align-middle items-center justify-between gap-2 px-3">
            <div className="about flex flex-row gap-2 items-center w-[10rem] md:w-44">
                <p className=" font-medium text-lg bg-gray-400 text-center py-1 px-3 rounded-full">{name[0].toUpperCase()}</p>
                <h1 className=" font-medium text-base text-white leading-5">{name}</h1>
            </div>
            <div className="options flex flex-row gap-[0.6rem] text-white text-lg">
                <button className=" hover:text-gray-400"><HiDotsHorizontal /></button>
                <button className=" hover:text-gray-400"><FaVideo /></button>
                <button className=" hover:text-gray-400"><BiEdit /></button>
            </div>
        </div>
    )
}

export default User;