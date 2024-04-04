import '../static/css/home.css';

import React from 'react'
import scholar from '../static/images/scholar.jpg'

const Home = () => {
    return (
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
                        <input type="search" placeholder='Enter Address' name="search" />
                    </div>

                    <button type='submit'>Search</button>
                </div>

            </div>
            <div className='part2 bg-[#eef0f1]'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eos doloremque, harum illo dignissimos possimus. Sint ex, vitae sapiente voluptatibus iste voluptatem dicta suscipit illo, quasi quae sed amet temporibus.
                </p>
                <div className='card flex flex-col bg-[#f8fafb] p-3 rounded-lg'>
                    <div className='card-header flex justify-between'>
                        <div className='card-right flex'>
                            <img src={scholar} alt="user"  className='w-[40px] h-[40px] rounded-full'/>
                            <div className='flex flex-col absolute'>
                                <h4 className='relative left-11 text-[0.8rem] font-semibold bottom-0'>James T.</h4>
                                <span  className='relative left-11 top-[-5px] text-[0.7rem]'>5 months ago</span>
                            </div>
                        </div>
                        <div className='card-left'>
                            <div className='flex flex-col'>
                                <h4 className='relative right-[5px] text-[0.8rem] font-semibold bottom-0'>Ikate, Lekki</h4>
                                <p className='relative right-[4px] top-[-5px] text-[1rem] text-[#fabb07]'>
                                    &#9733; &#9733; &#9733;  <span className='text-[#d1d1d1]'>&#9733; &#9733;</span></p>
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

                    <div className="card-footer">
                        <div>
                            <div className="div"></div>
                            <div className="div"><button>power</button></div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home
