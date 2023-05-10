import React from 'react'


const Gallery = (props) => {
  return (
    <div className='font-barlow text-textcolor text-2xl text-center relative'>
        {props.text}
        <img src={`${process.env.PUBLIC_URL}${props.img}`} alt="" style={{width: 290, height: 350}} className="rounded-xl object-cover mt-4"/>
        <button className='text-lightshade absolute bottom-4 left-1/2 -translate-x-1/2 border border-textcolor  bg-darkshade px-3 py-2 rounded-md'>{props.button}</button>
    </div>
  )
}

export default Gallery