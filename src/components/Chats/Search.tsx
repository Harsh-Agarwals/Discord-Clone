import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

interface funcType {
    searchQuery: Function
}
function Search({ searchQuery }: funcType) {

    function changeInput(value: string) {
        searchQuery(value);
    }
    return (
        <div className=" flex flex-row items-center justify-between py-4 px-3">
            <div className="search flex flex-row relative">
                <IoSearch className=" text-white font-bold absolute text-lg top-[50%] translate-y-[-50%] mx-2" />
                <input type="text" name="findUser" id="findUser" className=" text-sm px-2 ps-8 py-1 rounded-md outline-none border-2 border-blue-950 bg-slate-800 text-gray-300 w-52 " placeholder="Search" onChange={(e) => changeInput(e.target.value)} />
            </div>
            <button className=" bg-gray-500 p-1 rounded-md hover:bg-gray-400 text-base text-white"><FaPlus /></button>
        </div>
    )
}

export default Search;