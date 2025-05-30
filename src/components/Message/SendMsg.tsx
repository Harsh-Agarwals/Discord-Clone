import { MdAddPhotoAlternate } from "react-icons/md";
import { IoIosReverseCamera } from "react-icons/io";
import { FaMicrophoneLines } from "react-icons/fa6";
import { FaFaceSmile } from "react-icons/fa6";
import EmojiPicker from 'emoji-picker-react';
import { useEffect, useRef, useState } from "react";
import userChats from '../../utils'
import Webcam from 'react-webcam';

function SendMsg() {
    const [text, setText] = useState('');
    const [emojiState, setEmojiState] = useState(false);
    const [userDict, setUserDict] = useState(userChats);
    const inputRef = useRef<any>(null);

    function textChange(value: string) {
        setText(value);
    }

    function textWithEmoji(emoji: string) {
        setText(prev => prev+emoji);
        inputRef.current?.focus();
    }

    function sendMessage() {
        console.log(text);
        let msgDict = {
            text: text,
            time: 'abted',
            by: 'me'
        }
        setUserDict(dict => [...dict, msgDict]);
        console.log(userDict);        
    }

    useEffect(() => {
        function escapePress(e: KeyboardEvent) {
            if (e.key == 'Escape') {
                setEmojiState(false);
            }
        }
        window.addEventListener('keydown', escapePress);
    }, [])

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


                <input ref={inputRef} type="text" name="sendMsg" id="sendMsg" className=" text-sm px-2 ps-8 py-1 rounded-md outline-none bg-slate-800 border-[1px] border-gray-500 text-gray-300 w-auto tracking-wider " placeholder="Type a message..." value={text} onChange={(e) => textChange(e.target.value)} />
            </div>
            <div>
                <button onClick={() => sendMessage()} className=" text-white bg-gray-400 text-sm py-1 px-2 rounded-md hover:bg-gray-500">Send</button>
            </div>
        </div>
    )
}

export default SendMsg;