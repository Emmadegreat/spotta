import '../static/css/home.css';

import React from 'react'

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
            <div className='part2'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eos doloremque, harum illo dignissimos possimus. Sint ex, vitae sapiente voluptatibus iste voluptatem dicta suscipit illo, quasi quae sed amet temporibus.
                </p>

            </div>

        </div>
    )
}

export default Home
