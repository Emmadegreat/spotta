import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

import Api from './api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import comment from '../static/images/comment.png'
import dislike from '../static/images/dislike.png'
import like from '../static/images/like.png'
import user from '../static/images/user.png'

const Usercard = () => {

    const colors = [
    'bg-[#fbdbee] border-[#93346d] text-[#93346d]',
    'bg-[#f5e9cb] border-[#594510] text-[#594510]',
    'bg-[#f66a57] border-[#101012] text-[#101012]',
    'bg-[#d1e4fa] border-[#1f4781] text-[#1f4781]',
    'bg-[#fbdbee] border-[#93346d] text-[#93346d]',
    'bg-[#f5e9cb] border-[#594510] text-[#594510]',

  ];

    return (
        <>
            {Api.map((item, index) => {
                return (

                <div className='card flex flex-col bg-[#f8fafb] p-3 rounded-xl' key={index}>
                    <div className='card-header flex justify-between'>
                        <div className='card-right flex'>
                            <img src={item.user} alt="user" className='w-[30px] h-[30px] rounded-full' />
                            <div className='flex flex-col absolute'>
                                <h4 className='relative left-8 text-[0.8rem] font-semibold bottom-0'>{item.name}</h4>
                                <span className='relative left-8 top-[-5px] text-[0.7rem]'>5 months ago</span>
                            </div>
                        </div>
                        <div className='card-left'>
                            <div className='flex flex-col'>
                                <h4 className='relative right-[4px] text-[0.8rem] font-semibold bottom-0'>{item.location}</h4>
                                <p className='relative right-[4px] top-[-5px] text-[0.8rem] text-[#fabb07] cursor-pointer'>
                                    &#9733; &#9733; &#9733;  <span className='text-[#d1d1d1]'>&#9733; &#9733;</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card-body py-2">
                        <p className='text-[0.9rem]'>
                            {item.text}
                        </p>
                    </div>

                    <div className="card-footer flex justify-between">
                        <div className="flex justify-around">
                            <span className='flex p-1 items-center text-[#8f95b2] text-[0.8rem]'>
                                <FontAwesomeIcon icon={faThumbsUp} className='w-[17px] h-[17px] mr-1 cursor-pointer'/>
                                {item.like}
                            </span>
                            <span className='flex p-1 items-center text-[#8f95b2] text-[0.8rem]'>
                                <FontAwesomeIcon icon={faThumbsDown} className='w-[17px] h-[17px] mr-1 cursor-pointer'/>
                                {item.dislikes}
                            </span>
                            <span className='flex p-1 items-center text-[#8f95b2] text-[0.8rem]'>
                                <img src={comment} alt="comment" className='w-[15px] h-[15px] mr-1 cursor-pointer' />
                                {item.comment}
                            </span>
                        </div>
                        <div className="">
                            <button className={`
                            font-semibold py-0 px-3 text-[0.9rem]  ${colors[index % colors.length]} rounded-xl
                             border-2 border-solid`}>
                                {item.amenities}
                            </button>
                        </div>
                    </div>

                </div>
            )})}
        </>
    )
}

export default Usercard
