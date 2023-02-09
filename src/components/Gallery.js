import React from 'react'


const Gallery = (props) => {
  return (
    <div className='font-barlow text-lightshade text-2xl text-center relative'>
        {props.text}
        <img src={`${process.env.PUBLIC_URL}${props.img}`} alt="" style={{width: 290, height: 350}} className="rounded-xl object-cover mt-4"/>
        <button className='absolute bottom-4 left-1/2 -translate-x-1/2 border border-darkshade  bg-lightaccent px-3 py-2 rounded-md'>{props.button}</button>
    </div>
  )
}

export default Gallery