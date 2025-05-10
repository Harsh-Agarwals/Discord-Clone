interface UsersType {
    names: string[]
}

function ChatLists({names}: UsersType) {
    return (
        <div className="border-r-[0] border-t-[1px] border-gray-400 my-1">
            {
                names.map(name => (
                    (
                        <div key={Math.random()} className=" text-slate-300 font-light text-base border-b-[1px] border-slate-400 px-3 py-2 hover:bg-slate-800 flex flex-row align-middle items-center gap-2 cursor-pointer">
                            <p className="font-medium text-sm bg-slate-500 text-center py-1 px-[10px] text-slate-200 rounded-full">{name[0].toUpperCase()}</p>
                            <h1>{name}</h1>
                        </div>
                    )
                ))
            }
        </div>
    )
}

export default ChatLists;