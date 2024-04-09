import React from 'react'
import user from '../static/images/user.png';

const Navigation = () => {
    return (
        <nav className='flex justify-between items-center h-[70px] w-full z-[1000]'>
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
                <a href="/login" className='text-[#5882f2] text-sm font-semibold'>LOGIN</a>
                <img src={user} alt="user"  className="hidden" />
            </div>

        </nav>
    )
}

export default Navigation
