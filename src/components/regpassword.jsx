import React, { useState } from 'react';

import lockpassword from '../static/images/lockpassword.png';

const RegPassword = ({placeholder, value, onChange }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <>

            <div className='relative w-full'>
                <span
                    onClick={togglePasswordVisibility}
                    className='absolute inset-y-0 right-2 bottom-8 pl-3 flex items-center text-[1.6rem] text-[#9ca1bc]'
                    id='togglePassword'
                >< img src={lockpassword} alt='password display icon' />
                </span>
                <input
                    type={isPasswordVisible ? 'text' : 'password'}
                    className='w-[100%] h-[42px] bg-[#f3f7fe] text-[1rem]
                        px-3 py-1 mb-8 rounded-lg border-[1px] border-[#9aabdf] focus:border-solid focus:border-[1px] focus:border-blue-500'
                    placeholder={placeholder}
                    name="ConfirmPassword"
                    id='ConfirmPassword'
                    value={value}
                    onChange={onChange}
                />
            </div>
        </>
    );
};

export default RegPassword;
