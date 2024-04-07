import '../static/css/home.css';

import Navigation from '../components/navigation';
import React from 'react'
import Usercard from '../components/usercard';
import comment from '../static/images/comment.png'
import dislike from '../static/images/dislike.png'
import like from '../static/images/like.png'
import user from '../static/images/user.png'

const Home = () => {
    return (
        <div className='px-[2.5rem] md:px-[2rem] sm:px-[1rem] bg-[#fafcfd]'>
            <Navigation />

            <div className='home'>
                <div className='part1'>
                    <h1>Find a place you <br/>will love to live!</h1>
                    <p>
                        See through the lenses of people who have lived or visited
                        the neighbourhood you might have in mind.
                    </p>
                    <div className='search-cont'>
                        <div className='search-wrapper'>
                            <span className='search'>
                                &#9906;
                            </span>
                            <input
                                type="search"
                                placeholder='Enter Address'
                                name="search"
                                className='text-sm'
                            />
                        </div>

                        <button type='submit'>Search</button>
                    </div>

                </div>
                <div className='part2 bg-[#eef0f1]'>

                    <Usercard />

                {/*<p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eos doloremque, harum illo dignissimos possimus. Sint ex, vitae sapiente voluptatibus iste voluptatem dicta suscipit illo, quasi quae sed amet temporibus.
                </p>
                <div className='card flex flex-col bg-[#f8fafb] p-4 rounded-xl'>
                    <div className='card-header flex justify-between'>
                        <div className='card-right flex'>
                            <img src={user} alt="user"  className='w-[40px] h-[40px] rounded-full'/>
                            <div className='flex flex-col absolute'>
                                <h4 className='relative left-11 text-[0.8rem] font-semibold bottom-0'>James T.</h4>
                                <span  className='relative left-11 top-[-5px] text-[0.7rem]'>5 months ago</span>
                            </div>
                        </div>
                        <div className='card-left'>
                            <div className='flex flex-col'>
                                <h4 className='relative right-[4px] text-[0.8rem] font-semibold bottom-0'>Ikate, Lekki</h4>
                                <p className='relative right-[4px] top-[-5px] text-[1.1rem] text-[#fabb07] cursor-pointer'>
                                    &#9733; &#9733; &#9733;  <span className='text-[#d1d1d1]'>&#9733; &#9733;</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card-body py-2">
                        <p>
                            There is no stable electricity. The roads are fairly good and
                            there is a sense of community. The drainage system is poor and
                            most residents litter their surroundings. There are lots of
                            stores and supermarkets.
                        </p>
                    </div>

                    <div className="card-footer flex justify-between">
                        <div className="flex justify-around">
                            <span className='flex p-1 items-center text-[#8f95b2]'>
                                <img src={like} alt="like" className='w-[20px] h-[20px] mr-1 cursor-pointer' />
                                24
                            </span>
                            <span className='flex p-1 items-center text-[#8f95b2]'>
                                <img src={dislike} alt="dislike" className='w-[20px] h-[20px] mr-1 cursor-pointer' />
                                 02
                            </span>
                            <span className='flex p-1 items-center text-[#8f95b2]'>
                                <img src={comment} alt="comment" className='w-[20px] h-[20px] mr-1 cursor-pointer' />
                                 125
                            </span>
                        </div>
                        <div className="div">
                            <button className='
                            font-semibold py-0 px-3 text-[0.9rem]  text-[#594510] rounded-xl
                             bg-[#f5e9cb] border-2 border-solid border-[#594510]'>
                                traffic
                            </button>
                        </div>
                    </div>

                </div>*/}

                </div>

            </div>
        </div>
    )
}

export default Home
