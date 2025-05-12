import MessageScreen from "./MsgScreen";
import Themes from "./Themes";
import { ToastContainer } from 'react-toastify'

function Home() {
    return (
            <div className=" relative h-full">
                <Themes />
                <div className=" absolute  top-[10%] left-[50%] translate-x-[-50%] h-[80%]">
                    <MessageScreen />
                </div>
                <ToastContainer position="bottom-right" autoClose={5000} theme="dark" />
            </div>
    )
}

export default Home;