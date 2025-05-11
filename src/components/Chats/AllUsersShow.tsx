import { useEffect, useState } from 'react';
import { allUsers, userNames } from '../../utils'
import { FaPlus } from "react-icons/fa6";

interface returnTypes {
    searchText: string,
    addingUser: Function
}

function AllUsersShow({ searchText, addingUser }: returnTypes ) {
    const [users, setUsers] = useState(allUsers);

    useEffect(() => {
        setUsers(allUsers.filter(user => user.toLowerCase().includes(searchText)))
    }, [searchText]);

    function addNewUser(user: string) {
        if (!userNames.includes(user)) {
            setUsers(users.filter(userx => userx!=user))
            addingUser(user);
        }
    }

    return (
        <div className=' bg-slate-600 my-2 overflow-y-scroll h-[40vh]'>
            {
                users.map(user => {
                    return (
                        <div key={Math.random()} className=' flex flex-row items-center justify-between px-2 py-2 border-b-[1px] border-gray-400'>
                            <div className='flex flex-row items-center gap-2'>
                                <p className=' text-sm px-[8px] py-[3px] rounded-full bg-gray-400'>{user[0].toUpperCase()}</p>
                                <h1 className='  text-sm text-slate-300 tracking-wider'>{user}</h1>
                            </div>
                            <button className=' text-xs border-[1px] border-gray-500 rounded-full text-gray-200 p-1 hover:bg-gray-900' onClick={() => addNewUser(user)}><FaPlus /></button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllUsersShow;