import React from 'react'
import {AiFillHeart, AiFillStar} from 'react-icons/ai'

const CommentCard = (props) => {
  return (
    <div className='relative bg-lightshade p-10 rounded-3xl w-80 font-barlow'>
      
        {props.img ? <img src={`${process.env.PUBLIC_URL}${props.img}`} alt='' className='w-64 h-44 object-cover pb-4'/>: null}
        <p className=' text-commentcolor italic pb-8'>{props.body}</p>
        <div className='flex absolute inset-x-0 bottom-0 justify-between font-barlow text-darkshade text-lg'>
            <div className='flex '>
                {props.pfp ? <img src={`${process.env.PUBLIC_URL}${props.pfp}`} alt='' className='w-12 h-12 rounded-full object-cover mx-3 mb-3'/> : null}
                <h2 className='mt-1.5'>{props.username}username</h2>
            </div>
            
            <div className='flex mr-3 mt-1.5'>
                <p className='mr-1'>{props.likes}</p>
                <AiFillHeart className='mt-1.5 mr-1 text-lightaccent' />
                <p className='mr-1'>{props.favorites}</p>
                <AiFillStar className='mt-1.5 text-lightaccent'/>
            </div>
            
        </div>
    </div>
  )
}

export default CommentCard