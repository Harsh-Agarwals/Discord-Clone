import { MdAddPhotoAlternate } from "react-icons/md";
import { IoIosReverseCamera } from "react-icons/io";
import { FaMicrophoneLines } from "react-icons/fa6";
import { FaFaceSmile } from "react-icons/fa6";
import EmojiPicker from 'emoji-picker-react'
import { useEffect, useState } from "react";

function SendMsg() {
    const [text, setText] = useState('');
    const [emojiState, setEmojiState] = useState(false);

    function textChange(value: string) {
        setText(value);
    }

    function textWithEmoji(emoji: string) {
        setText(prev => prev+emoji);
    }

    return (
        <div className="relative flex flex-row justify-between gap-2 items-center py-3 px-2 border-t-[1px] border-gray-400">
            <div className=" text-white flex flex-row text-xl items-center gap-1">
                <button className="hover:text-gray-400"><MdAddPhotoAlternate /></button>
                <button className="hover:text-gray-400"><IoIosReverseCamera /></button>
                <button className="hover:text-gray-400"><FaMicrophoneLines /></button>
            </div>
            
            {
                emojiState
                &&
                <div className="absolute bottom-11 left-[50%] translate-x-[-50%] ms-2">
                    <EmojiPicker width={"250px"} height={"350px"} onEmojiClick={(e) => textWithEmoji(e.emoji)} lazyLoadEmojis={true} />
                </div>
            }
            <div className=" relative">
                <button onClick={() => setEmojiState(!emojiState)}><FaFaceSmile className="text-white font-bold absolute text-base top-[50%] translate-y-[-50%] mx-2" /></button>


                <input type="text" name="sendMsg" id="sendMsg" className=" text-sm px-2 ps-8 py-1 rounded-md outline-none bg-slate-800 border-[1px] border-gray-500 text-gray-300 w-64 tracking-wider " placeholder="Type a message..." value={text} onChange={(e) => textChange(e.target.value)} />
            </div>
            <div>
                <button className=" text-white bg-gray-400 text-sm py-1 px-2 rounded-md hover:bg-gray-500">Send</button>
            </div>
        </div>
    )
}

export default SendMsg;