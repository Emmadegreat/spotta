import { FacebookShareButton, TwitterShareButton } from 'react-share'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import share from '../static/images/share.png' // Assuming the icon name is "fa-share"

const ShareButton = () => {
    const ShareUrl = 'http://localhost:3000/review1'
    const ShareContent = 'share-content'

    return (
        <div className="w-[20px] h-[20px]">
            <FacebookShareButton url={ShareUrl} title={ShareContent} >
                <img src={share} alt="user"  />
            </FacebookShareButton>
        </div>
    )
}

export default ShareButton
