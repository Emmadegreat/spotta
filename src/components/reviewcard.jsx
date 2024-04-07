import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ReviewApi from './reviewapi'
import comment from '../static/images/comment.png'
import comment2 from '../static/images/comment2.png'
import dislike2 from '../static/images/dislike2.png'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import like2 from '../static/images/like2.png'

const ReviewCard = () => {

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
            {ReviewApi.map((item, index) => {
                return (

                <div className='flex flex-col' key={index}>
                    <div className='card-header flex justify-between'>
                        <div className='flex '>
                            <img src={item.user} alt="user" className='w-[30px] h-[30px] rounded-full' />
                            <div className='flex absolute'>
                                <h4 className='relative left-8 text-[0.8rem] font-semibold top-1'>{item.name}</h4>
                                <span className='relative left-11 top-[0.3rem] text-[0.7rem]'>5 months ago</span>
                            </div>
                        </div>
                        <div className='card-left items-center'>
                            <div className='flex'>
                                <p className='relative right-[4px] top-1 text-[0.9rem] text-[#fabb07] cursor-pointer'>
                                        &#9733;<span className='text-[#363535] font-medium'>{ item.rating}</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card-body py-2">
                        <p className='text-[0.9rem]'>
                            {item.text}
                        </p>
                    </div>

                    <div className="flex justify-start">
                        <div className="flex justify-around">
                            <span className='flex p-1 items-center text-[#2c3d6e] text-[0.8rem]'>

                                <img src={like2} alt="like" className='w-[18px] h-[18px] mr-1 cursor-pointer' />
                                {item.like}
                            </span>
                            <span className='flex p-1 mx-4 items-center text-[#2c3d6e] text-[0.8rem]'>
                                <img src={dislike2} alt="dislike" className='w-[15px] h-[15px] mr-1 cursor-pointer' />
                                {item.dislikes}
                            </span>
                            <span className='flex p-1 items-center text-[#2c3d6e] text-[0.8rem]'>
                                <img src={comment2} alt="comment" className='w-[15px] h-[15px] mr-1 cursor-pointer' />
                                {item.comment}
                            </span>
                        </div>

                    </div>
                    <hr className='my-4'/>
                </div>

            )})}
        </>
    )
}

export default ReviewCard
