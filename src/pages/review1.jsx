import ButtonGroup from '../components/buttongroup';
import Navigation2 from '../components/navigation2';
import PasswordInput from '../components/passwordInput';
import React from 'react'
import ShareButton from '../components/sharebutton';
import emptyreview from '../static/images/empty-review.png'
import icon1 from '../static/images/icon1.png'
import share from '../static/images/share.png'

const Review1 = () => {

    const buttons = ['Schools', 'Hospitals', 'Resort Park', 'Shopping Malls', 'Airport',
        'Train Station', 'Night Life', 'Public Wifi', 'Parking Lot', 'Security',
        'Public transport', 'Bus Station', 'Quiet']

    return (
        <div className='fiexd'>
            <Navigation2 />
            <div className='flex justify-between items-center mt-8 w-full md:w-[100%] border-[1px] border-[#238c52] md:flex-col'>
                <div className='flex flex-col'>
                    <h3 className='text-[#252525] font-bold md:font-semibold sm:text-[0.8rem]'>Bonny and Clyde Street, Ajao Estate, Lagos</h3>
                    <p className='text-[#121111] font-semibold text-[0.8rem] sm:text-[0.5rem]
                    '>
                        <b className='text-[#504f4f]'>“450” Reviews</b>  (People are raving about the selected location)
                    </p>
                </div>

                <div className='flex justify-between items-center md:mt-2'>
                    <a href="/review1"
                        className='w-[150px] text-sm text-center p-2
                         text-[#fff] bg-[#3366ff] rounded-lg font-semibold'
                    >
                        LEAVE A REVIEW
                    </a>
                    <a href="#" className='mx-4 p-2 border-[1px] border-[#3366ff] rounded'>
                        <img src={icon1} alt="user" className="w-[20px] h-[20px]" />
                    </a>
                    <a href="#" className='p-2 border-[1px] border-[#3366ff] rounded'>
                        <ShareButton/>
                    </a>

                </div>

            </div>

            <div className='w-full'>
                <ButtonGroup buttons={buttons} />
            </div>

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

        </div>
    )
}

export default Review1