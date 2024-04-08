import React, { useState } from 'react'

import ButtonGroup from '../components/buttongroup';
import Modal from '../components/modal';
import Navigation2 from '../components/navigation2';
import PasswordInput from '../components/passwordInput';
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

    const [search, setSearch] = useState("")

    const Filter = ReviewApi.filter((item) => {
        return item.location.toLowerCase().includes(search.toLowerCase())
    })

    const Check = () => {
        if (Filter) {
            return (Filter.length, 'people are reviewing this loction');
        } else {
          return (Filter.length, 'Reviews');
        }
    }

    return (
        <div className='bg-[#fafcfd]'>
            <div className='fixed bg-[#f2f6fd] px-[2.5rem] md:px-[2rem] sm:px-[1rem] z-[1000] w-full'>
                <Navigation2
                    type="search"
                    name="search"
                    value={search}

                    placeholder="placeholder"
                    onChange={(e)=>setSearch(e.target.value)}
                />

                <div className='flex justify-between items-center mt-8 w-full md:w-[100%] border-[1px] border-[#238c52] md:flex-col'>
                    <div className='flex flex-col'>
                        <h3 className='text-[#252525] font-bold md:font-semibold sm:text-[0.8rem]'>{ search }</h3>
                        <p className='text-[#121111] font-semibold text-[0.9rem] sm:text-[0.5rem]
                        '>
                           {Filter.length > 0 ? `"${Filter.length}" Reviews (People are reviewing about the selected location)` :
                                Filter.length === 0 ? "0 Reviews" : ""}
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

            <section className='py-8  bg-[#fafcfd] rounded-lg mt-[10rem] md:mt-[13rem] px-[2.5rem] md:px-[2rem] sm:px-[1rem]'>
                <div className='flex justify-between md:flex-col'>
                    <div className='basis-[53%] border-2 border-[red] pr-4 md:pr-0 md:order-2'>
                        {Filter.length > 0 ? (
                            Filter.map((item) => (

                                <ReviewCard key={item.id}
                                    user={item.user}
                                    name={item.name}
                                    month={item.month}
                                    rating={item.rating}
                                    like={item.like}
                                    dislikes={item.dislikes}
                                    text={item.text}
                                    comment={item.comment}
                                    //location={item.location}
                                />

                            ))
                        ) : (

                            <div className='flex justify-center py-6'>
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

                        )}

                    </div>

                    <div className='border-[2px] basis-[43%] border-[blue] md:order-1 md:mb-6'>
                        <div className='image-container'>
                            <p>pleas how images</p>
                            <img src={img1} alt="" className='object-cover w-full img1' />


                                <img src={img2} alt="" className='object-cover w-full img2  rounded-lg' />

                                <img src={img3} alt="" className='object-cover w-full img3' />


                            <img src={img4} alt="" className='object-cover w-full img4' />
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
                </div>*/}



            </section>

            <section className=''>
                <Modal />
            </section>

        </div>
    )
}

export default Review1