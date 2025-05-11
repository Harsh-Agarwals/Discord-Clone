import { IoSearch } from "react-icons/io5";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useEffect, useState, type BaseSyntheticEvent } from "react";
import AllUsersShow from "./AllUsersShow";

interface funcType {
    searchQuery: Function,
    newUser: Function
}
function Search({ searchQuery, newUser }: funcType) {
    const [addUser, setAddUser] = useState(false);
    const [userSearch, setUserSearch] = useState<string>('');

    useEffect(() => {
        function escapePress(e: KeyboardEvent) {
            if (e.key == "Escape") {
                setAddUser(false);
            }
        }
        window.addEventListener('keydown', escapePress)
    }, [])

    function userSearchStr(e: BaseSyntheticEvent) {
        setUserSearch(e.target.value);
    }
    
    function changeInput(value: string) {
        searchQuery(value);
    }

    function addUserBtn() {
        setAddUser(!addUser);
    }

    function addingNewUser(e: string) {
        newUser(e);
    }
    return (
        <div>
            <div className=" flex flex-row items-center justify-between py-4 px-3">
                <div className="search flex flex-row relative">
                    <IoSearch className=" text-white font-bold absolute text-lg top-[50%] translate-y-[-50%] mx-2" />
                    <input type="text" name="findUser" id="findUser" className=" text-sm px-2 ps-8 py-1 rounded-md outline-none border-2 border-blue-950 bg-slate-800 text-gray-300 w-52 " placeholder="Search" onChange={(e) => changeInput(e.target.value)} />
                </div>
                <button className=" bg-gray-500 p-1 rounded-md hover:bg-gray-400 text-base text-white" onClick={() => addUserBtn()}>{addUser ? <FaMinus /> : <FaPlus />}</button>
            </div>
            <div>
                {addUser ? <div className="add-user absolute rounded-lg bg-gray-500 px-4 py-8 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
                    <div className=" flex flex-row gap-2">
                        <input type="text" name="username" id="username" className="text-sm px-2 py-1 rounded-md outline-none border-2 border-slate-600 bg-slate-800 text-gray-300 w-52" value={userSearch} onChange={(e) => userSearchStr(e)} placeholder="Username" />
                    </div>
                    <div>
                        <AllUsersShow searchText={userSearch} addingUser={addingNewUser} />
                    </div>
                </div> : <div></div>}
            </div>
        </div>
    )
}

export default Search;