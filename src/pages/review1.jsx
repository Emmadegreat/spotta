import Navigation from '../components/navigation';
import PasswordInput from '../components/passwordInput';
import React from 'react'
import apple from '../static/images/apple.png'
import emptyreview from '../static/images/empty-review.png'
import facebook from '../static/images/facebook.png'

const Review1 = () => {

    return (
        <>
            <Navigation/>
            <div className='
                flex flex-col items-center px-6 m-auto my-8  bg-[#fafcfd] rounded-lg'
            >


                <div className='max-w-[360px] py-8 flex flex-col justify-center items-center'>

                    <img src={emptyreview} alt="empty review" className='w-[100%] h-[auto]' />
                    <p className='py-8 text-center text-[#5f5f5f] text-[1.2rem] font-medium'>Oops! No reviews yet.</p>
                    <a href="/review1"
                        className='flex justify-center w-[200px] text-sm text-center items-center mb-3 p-2 border-[1px] border-[#d8d7d7]
                         text-[#fff] bg-[#3366ff] rounded-lg font-semibold'
                    >
                        LEAVE A REVIEW
                    </a>

                </div>

            </div>

        </>
    )
}

export default Review1