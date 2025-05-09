import MessageScreen from "./MsgScreen";
import Themes from "./Themes";

function Home() {
    return (
            <div className=" relative h-screen">
                <Themes />
                <div className=" absolute  top-[10%] left-[50%] translate-x-[-50%] h-[80%]">
                    <MessageScreen />
                </div>
            </div>
    )
}

export default Home;