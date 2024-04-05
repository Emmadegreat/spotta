import Navigation from '../components/navigation';
import React from 'react'

const Login = () => {

    return (
        <>
            <Navigation/><br/>
            <div className='flex flex-col items-center m-auto my-4 max-w-[500px]'>
                <h4>Log In</h4>

                <form action="">
                    <div className='flex flex-col items-start'>
                        <input type="email" name='email' placeholder='Email' />
                        <div className=''>
                            <span className='search'>
                                &#9906;
                            </span>
                            <input className=''
                                type="password" placeholder='Password' name="password"
                            />
                        </div>

                         <button type='submit'>LOG In</button>
                    </div>
                </form>

             </div>

        </>
    )
}

export default Login