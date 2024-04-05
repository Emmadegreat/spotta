import React, { useState } from 'react';

import Eyeicon from './eyeicon';

const PasswordInput = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <>
        {/*<div className="relative w-full">
            <input
                type={isPasswordVisible ? 'text' : 'password'}
                className="w-[100%] h-[42px] bg-[#f3f7fe] text-[1rem] px-3 py-1 mb-8 rounded-lg border-[1px] border-[#9aabdf] focus:border-solid focus:border-[1px] focus:border-blue-500"
                placeholder="Password"
                name="password"
                id="passwordInput"
            />
            <span
                id="togglePassword"
                className="absolute right-3 top-5 cursor-pointer"
                onClick={togglePasswordVisibility}
            >
                {/* Add your eye icon component here
            </span>
        </div>*/}

        <div className='relative w-full'>
            <span
                onClick={togglePasswordVisibility}
                className='absolute inset-y-0 right-2 bottom-8 pl-3 rotate-[180deg] flex items-center text-[1.6rem] text-[#9ca1bc]'
                id='togglePassword'
                ><Eyeicon />
            </span>
            <input
                type={isPasswordVisible ? 'text' : 'password'}
                className='w-[100%] h-[42px] bg-[#f3f7fe] text-[1rem]
                    px-3 py-1 mb-8 rounded-lg border-[1px] border-[#9aabdf] focus:border-solid focus:border-[1px] focus:border-blue-500'
                placeholder='Password'
                name="password"
                id='passwordInput'
            />
        </div>
        </>
    );
};

export default PasswordInput;
