import React, { useState } from 'react'

import ButtonGroup from '../components/buttongroup';
import Navigation2 from '../components/navigation2';
import ReviewApi from '../components/reviewapi';
import ReviewCard from '../components/reviewcard';
import ShareButton from '../components/sharebutton';
import emptyreview from '../static/images/empty-review.png'
import icon1 from '../static/images/icon1.png'

const Review1 = () => {

    const buttons = ['Schools', 'Hospitals', 'Resort Park', 'Shopping Malls', 'Airport',
        'Train Station', 'Night Life', 'Public Wifi', 'Parking Lot', 'Security',
        'Public transport', 'Bus Station', 'Quiet'
    ]
    const AmenitiesList = [{ 'name': 'Parking Lot' }, { 'name': 'Free Wifi' },
        { 'name': 'Nightlife' }, { 'name': 'Petstore' }, { 'name': 'Hospitals' },
        { 'name': 'Childcare' }, { 'name': 'Adult Home' }, { 'name': 'Gym' },
        { 'name': 'Schools' }, { 'name': 'Security' },

    ]

    const [search, setSearch] = useState("")

    const Filter = ReviewApi.filter((item) => {
        return item.location.toLowerCase().includes(search.toLowerCase())
    })

    const [showModal, setShowModal] = useState(false);
    const ToggleModal = (e) => {
        e.preventDefault(setShowModal(!showModal));
    }

    const [showAmenities, setshowAmenities] = useState(false);
    const ToggleShowAmenities = () => setshowAmenities(!showAmenities);

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

                <div className='flex justify-between items-center mt-8 w-full md:w-[100%] md:flex-col'>
                    <div className='flex flex-col'>
                        <h3 className='text-[#252525] font-bold md:font-semibold sm:text-[0.8rem]'>{ search }</h3>
                        <p className='text-[#121111] font-semibold text-[0.9rem] sm:text-[0.5rem]
                        '>
                           {Filter.length > 0 ? `"${Filter.length}" Reviews (People are reviewing about the selected location)` :
                                Filter.length === 0 ? "0 Reviews" : ""}
                        </p>
                    </div>

                    <div className='flex justify-between items-center md:mt-2'>
                        <button
                            className='w-[150px] text-sm text-center p-2
                            text-[#fff] bg-[#3366ff] rounded-lg font-semibold md:text-[0.7rem]'
                            onClick={ToggleModal}
                        >
                            LEAVE A REVIEW
                        </button>
                        <a href="/" className='mx-4 p-2 border-[1px] border-[#3366ff] rounded'>
                            <img src={icon1} alt="user" className="w-[20px] h-[20px]" />
                        </a>
                        <a href="/" className='p-2 border-[1px] border-[#3366ff] rounded'>
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
                    <div className='basis-[53%] pr-4 md:pr-0 md:order-2'>
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

                    <div className='basis-[43%] md:order-1 md:mb-6'>
                        <div className='image-container'>
                            <img src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1712607405/samples/General/img1_hwn0lu.png" alt="Image1" className='img1' />


                            <img src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1712608382/samples/General/img2_dd1iax.png" alt="Image2" className='img2' />

                            <img src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1712608428/samples/General/img3_b4cifz.png" alt="Image3" className='img3' />

                            <img src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1712608041/samples/General/img4_ictshl.png" alt="Image4" className='img4' />

                        </div>
                    </div>
                </div>

                {showModal && (
                    <div className='fixed opacity-[0.99] flex items-center w-full z-[2000] h-[100%] bg-[#213449] top-0 bottom-0 left-0 right-0'>
                        <div className='z-[1500] fixed top-[10%] left-[30%] bottom-[10%] w-[40%] bg-[#fff] text-[#000] p-4 rounded-2xl modal-content' >
                            <h4 className='text-center font-semibold text-[#1E1E1E]'>Review Location</h4>
                            <p className='text-[start] pt-2 font-medium'>{ search }</p>

                            <div className='flex justify-between p-2 bg-[#f3f7fe] items-center rounded'>
                                <span className='text-[#1E1E1E] text-sm'>Select Amenties</span>
                                <span>
                                    <img src='https://res.cloudinary.com/dbnxbly1r/image/upload/v1702851638/hyggex/Frame_1_zdsoot.png'
                                        className='text-[1.8rem] text-[#28262C] cursor-pointer' alt="toggle show amenities icon"
                                        onClick={ToggleShowAmenities}
                                    />
                                </span>
                            </div>
                            <form onSubmit="">

                                {showAmenities && (
                                    <div className='bg-[#f3f7fe] rounded boder-1 border-blue-400 show-amenities'>
                                        {AmenitiesList.map((item) => (
                                            <div key={item.id} className='text-[0.7rem] md:text-[0.6rem] flex items-center'>

                                                <label>
                                                    <input type="checkbox"
                                                        className='mr-1'
                                                        name="checkbox" id="" />
                                                    {item.name}
                                                </label>


                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className='flex flex-col flex-start'>
                                    <p className='py-1 text-[#1E1E1E]  md:text-sm font-medium'>Rate Location</p>
                                    <p className='text-[1.4rem] md:text-[1.1rem] text-[#fabb07] cursor-pointer opacity-[0.5]'>
                                        &#9733; &#9733; &#9733; &#9733; &#9733;
                                    </p>
                                </div>

                                <div className='py-3'>
                                    <p className='py-2 text-[#1E1E1E] text-sm'>Write Review</p>
                                    <textarea
                                        required
                                        placeholder='Write Review'
                                        name="review" id="" cols="" rows=""
                                        className='bg-[#fbfafc] h-[100px] md:h-[100px] w-full rounded p-2'>

                                    </textarea>
                                    <div className='my-2'>
                                        <input type="checkbox" name="checkbox" id="" required />
                                        <span className='ml-2 text-[#484851] md:text-[0.6rem]'>Post as Anonymous</span>
                                    </div>

                                    <div className='flex items-center justify-between py-2 md:py-1'>
                                        <button

                                            type='submit'
                                            className='w-[48%] text-sm text-center p-2
                                            text-[#fff] bg-[#3366ff] rounded font-semibold'
                                        >
                                        SUBMIT
                                        </button>
                                        <button
                                            onClick={ToggleModal}
                                            className='w-[48%] text-sm text-center p-2
                                        bg-[#fff] text-[#3366ff] rounded border-[0.05rem] border-[#3366ff] font-semibold'
                                        >CANCEL
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                )}
            </section>





        </div>
    )
}

export default Review1