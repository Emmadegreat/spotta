//import '../static/css/navigation.css';

import React from 'react'
import user from '../static/images/user.png';

const Navigation = () => {
    return (
        <div className='flex justify-between items-center h-[70px] w-full border-[1px] border-[red]'>
            <div className=''>
                <a href="/"
                    className='text-decoration-none text-blue-700 font-bold text-[0.7rem]'>
                    <b className='text-[#1e1e1e]'>S P O T T A</b>
                    <button
                        className='ml-1 py-[0.1rem] px-[0.3rem] rounded text-[#fff] bg-[#5378f6] focus:outline-none'>
                        NG
                    </button>
                </a>
            </div>
            <div>
                <a href="/login" className='text-[#5882f2] text-sm font-bold'>LOGIN</a>
                <img src={user} alt="user"  className="hidden" />
            </div>

        </div>
    )
}

export default Navigation
