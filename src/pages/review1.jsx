import ButtonGroup from '../components/buttongroup';
import Navigation2 from '../components/navigation2';
import PasswordInput from '../components/passwordInput';
import React from 'react'
import ReviewApi from '../components/reviewapi';
import ReviewCard from '../components/reviewcard';
import ShareButton from '../components/sharebutton';
import emptyreview from '../static/images/empty-review.png'
import icon1 from '../static/images/icon1.png'
import img1 from '../static/images/img1.png'
import img2 from '../static/images/img2.png'
import img3 from '../static/images/img3.png'
import img4 from '../static/images/img4.png'

const Review1 = () => {

    const buttons = ['Schools', 'Hospitals', 'Resort Park', 'Shopping Malls', 'Airport',
        'Train Station', 'Night Life', 'Public Wifi', 'Parking Lot', 'Security',
        'Public transport', 'Bus Station', 'Quiet'
    ]

    return (
        <div className='bg-[#fafcfd]'>
            <div className='fixed bg-[#f2f6fd] px-[2.5rem] md:px-[2rem] sm:px-[1rem] z-[1000] w-full'>
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
            </div><br/>{/*================1st section end=============*/}

            <section className='px-[2.5rem] py-8  bg-[#fafcfd] rounded-lg mt-[10rem] md:mt-[16rem]'>
                <div className='flex justify-between'>
                    <div className='basis-[53%] border-2 border-[red] pr-4'>
                        {ReviewApi.map((item) => (

                            <ReviewCard key={item.id}
                                user={item.user}
                                name={item.name}
                                month={item.month}
                                rating={item.rating}
                                like={item.like}
                                dislikes={item.dislikes}
                                text={item.text}
                                comment={item.comment}
                                location={item.location}
                            />

                        ))}
                    </div>

                    <div className='border-[2px] basis-[43%] border-[blue]'>
                        <div className='grid gap-4 grid-cols-2 '>
                            <img src={img1} alt="" className='object-cover w-full ' />

                            <img src={img2} alt="" className='object-cover w-full  rounded-lg' />

                            <img src={img3} alt="" className='object-cover w-full ' />

                            <img src={img4} alt="" className='object-cover w-full ' />
                        </div>
                    </div>
                </div>

                {/*<div className='flex justify-between'>
                    <div className='basis-[48%] border-2 border-[red] '>
                        <ReviewCard />
                    </div>
                    <div className='flex justify-between basis-[48%] border-[2px] border-[blue]'>
                        <div className='w-[50%]'>
                            <img src={user} alt="" className='w-[auto] h-auto' />
                        </div>
                        <div className='w-[50%]'>
                            <img src={user} alt="" className='w-[auto] h-auto' />
                        </div>
                    </div>
                </div>
                {/*<div className='max-w-[360px] py-8 flex flex-col justify-center items-center'>

                    <img src={emptyreview} alt="empty review" className='w-[100%] h-[auto]' />
                    <p className='py-8 text-center text-[#5f5f5f] text-[1.2rem] font-medium'>Oops! No reviews yet.</p>
                    <a href="/review1"
                        className='flex justify-center w-[200px] text-sm text-center items-center mb-3 p-2 border-[1px] border-[#d8d7d7]
                         text-[#fff] bg-[#3366ff] rounded-lg font-semibold'
                    >
                        LEAVE A REVIEW
                    </a>

                </div>*/}

            </section>

        </div>
    )
}

export default Review1