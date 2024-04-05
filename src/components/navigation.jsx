import '../static/css/navigation.css';

import React from 'react'

const Navigation = () => {
    return (
        <div className='navigation'>
            <div className='logo'>
                <a href="/"><b>S P O T T A</b>  <button>NG</button></a>
            </div>
            <a href="/login">LOGIN</a>

        </div>
    )
}

export default Navigation
