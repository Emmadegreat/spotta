import Navigation from '../components/navigation';
import React from 'react'
import apple from '../static/images/apple.png'
import eye from '../static/images/eye.png'
import facebook from '../static/images/facebook.png'
import google from '../static/images/google.png'

const Login = () => {

    return (
        <>
            <Navigation/>
            <div className='
                flex flex-col items-center px-6 m-auto my-8 max-w-[360px] bg-[#fafcfd] rounded-lg'
            >
                <h4 className='text-black font-semibold pt-5 pb-1'>Log In</h4>

                <form className='my-4 w-full'>
                    <div className='flex flex-col items-start'>
                        <input
                            type="email"
                            name='email'

                            placeholder='E-mail'
                            className='w-full h-[42px] bg-[#f3f7fe] text-[1rem] px-3 py-1 mb-5 rounded-lg border-[1px] border-[#9aabdf] focus:border-solid focus:border-[1px] focus:border-blue-500'
                        />
                        <div className='relative w-full'>
                            <img src={eye} alt="lock password"
                                className='absolute inset-y-0 right-2 top-4 pl-3 rotate-[180deg] w-[] flex items-center text-[1.6rem] text-[#9ca1bc]'

                            />
                            <input
                                className='w-[100%] h-[42px] bg-[#f3f7fe] text-[1rem]
                                px-3 py-1 mb-8 rounded-lg border-[1px] border-[#9aabdf] focus:border-solid focus:border-[1px] focus:border-blue-500'
                                type="password"
                                placeholder='Password'
                                name="password"
                            />
                        </div>

                        <button type='submit'
                            className='w-full h-[44px] bg-[#3366ff] text-[1rem] px-3 py-2 mb-5 rounded-lg border-[1px] border-[#9aabdf]
                            focus:border-solid focus:border-[1px] focus:border-blue-500 text-white font-semibold'
                        >
                            LOG IN
                        </button>
                    </div>
                    <div className='flex justify-center'>
                        <hr className='w-[50%] mt-4 border-[#b4c8fe] border-[0.03rem]' />
                        <span className='text-[1.3rem] text-[#9ca1bc]'>or</span>
                        <hr className='w-[50%] mt-4 border-[#b4c8fe] border-[0.03rem]' />

                    </div>


                </form>

                <div className='flex flex-col w-full'>
                    <a href="https://www.google.com"
                        className='flex justify-center text-sm text-center items-center mb-3 p-2 border-[1px] border-[#d8d7d7]
                         text-[#5f5f5f] bg-slate-50 rounded-lg font-semibold'
                    >
                        <img src={google} alt="google" className='w-[30px] mr-2 h-[30px]' />
                        Log in with Google
                    </a>
                    <a href="https://www.facebook.com"
                        className='flex justify-center text-sm text-center items-center mb-3 p-2 border-[1px] border-[#d8d7d7]
                         text-[#5f5f5f] bg-slate-50 rounded-lg font-semibold'
                    >
                        <img src={facebook} alt="google" className='w-[28px] mr-2 h-[28px]' />
                        Log in with Facebook
                    </a>
                    <a href="https://www.apple.com"
                        className='flex justify-center text-sm text-center items-center mb-3 p-2 border-[1px] border-[#d8d7d7]
                         text-[#5f5f5f] bg-slate-50 rounded-lg font-semibold'
                    >
                        <img src={apple} alt="google" className='w-[28px] mr-2 h-[28px]' />
                        Log in with Apple
                    </a>
                </div>

                <div className='my-4 text-center'>
                    <a href="/" className='text-underline underline text-sm font-semibold text-[#727577]'>Forgot your password?</a>
                    <p
                        className='my-2 text-underline text-sm font-semibold text-[#727577]'
                    >Don't have an account &nbsp;
                        <a href="/" className='text-[#3366ff]'>Sign Up?</a>
                    </p>
                </div>

             </div>

        </>
    )
}

export default Login