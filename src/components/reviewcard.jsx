import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReviewApi from './reviewapi'
import comment from '../static/images/comment.png'
import comment2 from '../static/images/comment2.png'
import dislike2 from '../static/images/dislike2.png'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import like2 from '../static/images/like2.png'

const ReviewCard = ({name, month, text, user, rating, location, like, dislikes, comment}) => {

    //toggle comment section
    const [addComment, setAddComment] = useState(false);
    const ShowComment = () => setAddComment(!addComment);

    return (
        <>
            <div className=''>

                <div className='flex flex-col'>
                    <div className='card-header flex justify-between'>
                        <div className='flex '>
                            <img src={user} alt="user" className='w-[30px] h-[30px] rounded-full' />
                            <div className='flex absolute'>
                                <h4 className='relative left-8 text-[0.8rem] font-semibold top-1'>{name}</h4>
                                <span className='relative left-11 top-[0.3rem] text-[0.7rem]'>{month}</span>
                            </div>
                        </div>
                        <div className='card-left items-center'>
                            <div className='flex'>
                                <p className='relative right-[4px] top-1 text-[0.9rem] text-[#fabb07] cursor-pointer'>
                                        &#9733;<span className='text-[#363535] font-medium'>{ rating}</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card-body py-2">
                        <p className='text-[0.9rem]'>
                            {text}
                        </p>
                        <p>{location }</p>
                    </div>

                    <div className="flex justify-start">
                        <div className="flex justify-around">
                            <span className='flex p-1 items-center text-[#2c3d6e] text-[0.8rem]'>

                                <img src={like2} alt="like" className='w-[18px] h-[18px] mr-1 cursor-pointer' />
                                {like}
                            </span>
                            <span className='flex p-1 mx-4 items-center text-[#2c3d6e] text-[0.8rem]'>
                                <img src={dislike2} alt="dislike" className='w-[15px] h-[15px] mr-1 cursor-pointer' />
                                {dislikes}
                            </span>
                            <span className='flex p-1 items-center text-[#2c3d6e] text-[0.8rem]' onClick={ShowComment}>
                                <img src={comment2} alt="comment" className='w-[15px] h-[15px] mr-1 cursor-pointer' />
                                {comment}
                            </span>

                        </div>

                    </div>

                    {/*======comment section======*/}
                    {addComment &&
                    <div>
                        <hr className='my-4'/>
                        <form action="">
                            <div className='flex items-center top-12 left-0 h-[40px]'>
                                <textarea
                                    className="p-2 mr-4 w-full bg-[#fafcfd]"
                                    name="comment"
                                    id="comment"
                                    cols=""
                                    rows=""
                                    placeholder='Add a comment'
                                >

                                </textarea>
                                <button
                                    type='submit'
                                    className='w-[80px] text-sm text-center p-1
                                    text-[#fff] bg-[#3366ff] rounded-lg font-semibold'
                                >POST
                                </button>
                            </div>
                        </form>
                    </div>
                    }
                    <hr className='my-4'/>
                </div>

            </div>
        </>
    )
}

export default ReviewCard
