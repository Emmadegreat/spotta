import '../static/css/home.css';

import Navigation from '../components/navigation';
import React from 'react'
import Usercard from '../components/usercard';

const Home = () => {
    return (
        <div className='px-[2.5rem] md:px-[2rem] sm:px-[1rem] bg-[#fafcfd]'>
            <Navigation /><br /><br />

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

                </div>

            </div>
        </div>
    )
}

export default Home
