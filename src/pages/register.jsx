import Navigation from '../components/navigation';
import RegPassword from '../components/regpassword';
import React, {useState} from 'react'
import apple from '../static/images/apple.png'
import facebook from '../static/images/facebook.png'
import google from '../static/images/google.png'
import {useNavigate} from 'react-router-dom'

const Register = () => {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    const [message, setMessage] = useState("")

    const navigate = useNavigate()

    const HandleSubmit = (e) => {
        e.preventDefault()

        if (!firstname || !lastname || !username || !email || !password || !confirmpassword) {
            setMessage("Please fill in all the fileds")
            return;
        }

        const users = { firstname, lastname, username, email, password, confirmpassword };

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        const existingUser = existingUsers.find((u)=>u.email === email)
        if (existingUser) {
            setMessage('User with this email already exists');
            return;
        }

        existingUsers.push(users);

        localStorage.setItem('users', JSON.stringify(existingUsers));
        console.log(users);

        setFirstname('');
        setLastname('');
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmpassword('');
        alert('Successfully registered');
        navigate('/login');
    }

    return (
        <div className='px-[2.5rem] md:px-[2rem] sm:px-[1rem] bg-[#f5f5f5]'>
            <Navigation/>
            <div className='
                flex flex-col items-center px-6 m-auto my-8 max-w-[450px] bg-[#fafcfd] rounded-lg'
            >
                <h4 className='text-black font-semibold pt-5 pb-1'>Sign Up</h4>

                <form className='my-4 w-full' onSubmit={HandleSubmit}>
                    <div className='py-3'>{message && <p>{ message }</p>}</div>
                    <div className='flex flex-col items-start'>
                        <div className='flex justify-between items-center'>
                            <input
                                type="text"
                                name='firstname'
                                value={firstname}
                                placeholder='First Name'
                                onChange={(e)=>setFirstname(e.target.value)}
                                className='w-full h-[42px] bg-[#f3f7fe] text-[1rem] px-3 py-1 mb-5 rounded-lg border-[1px] border-[#9aabdf]
                                focus:border-solid focus:border-[1px] focus:border-blue-500 mr-2'
                            />
                            <input
                                type="text"
                                name='lastname'
                                value={lastname}
                                placeholder='Last Name'
                                onChange={(e)=>setLastname(e.target.value)}
                                className='w-full h-[42px] bg-[#f3f7fe] text-[1rem] px-3 py-1 mb-5 rounded-lg border-[1px]
                                 border-[#9aabdf] focus:border-solid focus:border-[1px] focus:border-blue-500 ml-2'
                            />
                        </div>
                        <input
                            type="text"
                            name='username'
                            value={username}
                            placeholder='Username'
                            onChange={(e)=>setUsername(e.target.value)}
                            className='w-full h-[42px] bg-[#f3f7fe] text-[1rem] px-3 py-1 mb-5 rounded-lg border-[1px] border-[#9aabdf] focus:border-solid focus:border-[1px] focus:border-blue-500'
                        />
                        <input
                            type="email"
                            name='email'
                            value={email}
                            placeholder='E-mail address'
                            onChange={(e)=>setEmail(e.target.value)}
                            className='w-full h-[42px] bg-[#f3f7fe] text-[1rem] px-3 py-1 mb-5 rounded-lg border-[1px] border-[#9aabdf] focus:border-solid focus:border-[1px] focus:border-blue-500'
                        />
                        <div className='w-full'>
                            <RegPassword
                                placeholder="Password"
                                value={password}
                                onChange={(e) =>setPassword(e.target.value)}
                            />
                        </div>

                        <div className='w-full'>
                            <RegPassword
                                placeholder="Confirm Password"
                                value={confirmpassword}
                                onChange={(e) =>setConfirmpassword(e.target.value)}
                            />
                        </div>

                        <button type='submit'
                            className='w-full h-[44px] bg-[#3366ff] text-[1rem] px-3 py-2 mb-5 rounded-lg border-[1px] border-[#9aabdf]
                            focus:border-solid focus:border-[1px] focus:border-blue-500 text-white font-semibold'
                        >
                            SIGN UP
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
                    <p
                        className='my-2 text-underline text-sm font-semibold text-[#727577]'
                    >Already  have an account &nbsp;
                        <a href="/login" className='text-[#3366ff]'>Log In?</a>
                    </p>
                </div>

             </div>

        </div>
    )
}

export default Register