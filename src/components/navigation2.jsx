import React, {useState} from 'react'

import user from '../static/images/user.png';

const Navigation2 = () => {
    const [search, setSearch] = useState("")

    return (
        <div className='flex justify-between items-center h-[70px] w-full md:w-full border-[1px] border-[red]'>
            <div className=''>
                <a href="/"
                    className='text-decoration-none text-blue-700 font-bold text-[0.7rem]
                '>
                    <b className='text-[#1e1e1e]'>S P O T T A</b>
                    <button className='ml-1 py-[0.1rem] px-[0.3rem] rounded text-[#fff] bg-[#5378f6] focus:outline-none
                    '>NG</button>
                </a>
            </div>

            <div className='w-[60%] md:w-[88%] md:fixed md:top-14 border-[black]'>
                <div className='relative'>
                <span className='absolute inset-y-0 left-2 top-2 pl-3 rotate-[330deg] flex items-center text-[1.6rem] text-[#3567ff]'>
                    &#9906;
                </span>
                <input
                    type='search'
                    name='search'
                    placeholder='Search'
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}

                    className='w-[90%] md:w-[100%] pl-10 h-[46px] md:h-[40px] text-sm px-4 py-2 rounded border-[1px] border-[#d8d7d7] focus:border-solid focus:border-[1px] focus:border-blue-500'
                />
            </div>
            </div>

            <div>
                <a href="/login" className='text-[#5882f2] text-sm font-bold hidden'>LOGIN</a>
                <p className='flex px-2'>welcome!<img src={user} alt="user"  className="ml-3 block w-[20px] h-[20px]" /></p>
            </div>

        </div>
    )
}

export default Navigation2