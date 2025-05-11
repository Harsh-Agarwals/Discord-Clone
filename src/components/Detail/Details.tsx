import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import SharedPhotos from "./SharedPhotos";
import { photosShared } from '../../utils'

interface userType {
    name: string,
    about1: string
}

function Details({name, about1}: userType) {
    const [btnClick, setBtnClikc] = useState([false, true, false, false]);
    function buttonClick(i: number) {
        setBtnClikc(btnClick.map((value, index) => index==i?!value:value));
    }
    return (
        <div className="w-64 h-[80vh] hidden lg:flex flex-col justify-between">
            <div className="about flex flex-col gap-1 items-center py-4 px-3 border-b-[1px] border-gray-400">
                <p className=" font-medium border-[2px] border-slate-800 text-xl bg-gray-400 text-center py-2 px-4 rounded-full">{name[0].toUpperCase()}</p>
                <h1 className=" font-medium text-lg text-white leading-5 pt-1">{name}</h1>
                <p className=" font-medium text-gray-400 text-xs">{about1}</p>
            </div>
            <div className="lists px-4 py-2 overflow-y-scroll">
                <div>
                    <div className=" flex flex-row justify-between items-center">
                        <h1 className=" text-sm font-semibold text-gray-300 py-1">Chat Settings</h1>
                        <button onClick={() => buttonClick(0)} className={`text-gray-400 text-xs px-[2px] py-[2px] rounded-full bg-slate-700 transition-all ease-linear ${btnClick[0] ? "rotate-90": ""}`}><IoIosArrowForward /></button>
                    </div>
                    <ul className={`${btnClick[0] ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'} duration-300 list-disc px-3 py-1 ease-linear transition-all text-gray-400 text-[13px] tracking-wide leading-4`}>
                        <li>lorem ipsum lorem ipsum lorem ipsum</li>
                        <li>lorem ipsum lorem ipsum lorem ipsum</li>
                        <li>lorem ipsum lorem ipsum lorem ipsum</li>
                        <li>lorem ipsum lorem ipsum lorem ipsum</li>
                    </ul>
                </div>
                <div>
                    <div className=" flex flex-row justify-between items-center">
                        <h1 className=" text-sm font-semibold text-gray-300 py-1">Privacy & help</h1>
                        <button onClick={() => buttonClick(1)} className={`text-gray-400 text-xs px-[2px] py-[2px] rounded-full bg-slate-700 transition-all ease-linear ${btnClick[1] ? "rotate-90": ""}`}><IoIosArrowForward /></button>
                    </div>
                    <ul className={`${btnClick[1] ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'} duration-300 list-decimal px-3 py-1 ease-linear transition-all text-gray-400 text-[13px] tracking-wide leading-4`}>
                        <li>lorem ipsum lorem ipsum lorem ipsum</li>
                        <li>lorem ipsum lorem ipsum lorem ipsum</li>
                        <li>lorem ipsum lorem ipsum lorem ipsum</li>
                        <li>lorem ipsum lorem ipsum lorem ipsum</li>
                    </ul>
                </div>
                <div>
                    <div className=" flex flex-row justify-between items-center">
                        <h1 className=" text-sm font-semibold text-gray-300 py-1">Shared Photos</h1>
                        <button onClick={() => buttonClick(2)} className={`text-gray-400 text-xs px-[2px] py-[2px] rounded-full bg-slate-700 transition-all ease-linear ${btnClick[2] ? "rotate-90": ""}`}><IoIosArrowForward /></button>
                    </div>
                    <div className={`${btnClick[2] ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'} duration-300 list-decimal px-3 py-1 ease-linear transition-all text-gray-400 text-[13px] tracking-wide leading-4`}>
                        <SharedPhotos photos={photosShared} />
                    </div>
                </div>
                <div className=" flex flex-row justify-between items-center">
                    <h1 className=" text-sm font-semibold text-gray-300 py-1">Shared Files</h1>
                    <button onClick={() => buttonClick(3)} className={`text-gray-400 text-xs px-[2px] py-[2px] rounded-full bg-slate-700 transition-all ease-linear ${btnClick[3] ? "rotate-90": ""}`}><IoIosArrowForward /></button>
                </div>
            </div>
            <div className="buttons mt-1 flex flex-row items-center justify-center gap-2 py-3 border-t-[1px] border-gray-400">
                <button className=" text-sm py-[6px] bg-purple-800 hover:bg-purple-900 w-[40%] rounded-md font-semibold text-gray-300">Block User</button>
                <button className=" text-sm py-[6px] bg-red-800 hover:bg-red-900 w-[40%] rounded-md font-semibold text-gray-300">Log Out</button>
            </div>
        </div>
    )
}

export default Details;