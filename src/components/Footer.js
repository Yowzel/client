import React from 'react'

const Footer = () => {
  return (
    <div className='flex my-20 pt-7 pb-9 justify-between bg-darkshade'>

        <div className='flex ml-14 flex-col gap-4  text-lightshade font-barlow'>
            <h1 className='font-semibold'>About</h1>
            <h1>About our company</h1>
            <h1>How to help?</h1>
            <h1>How to use?</h1>
        </div>

        <div className='flex  flex-col gap-4  text-lightshade font-barlow'>
            <h1 className='font-semibold'>Socials</h1>
            <h1>Tik Tok</h1>
            <h1>Twitter</h1>
            <h1>Instagram</h1>
            <h1>Facebook</h1>
        </div>

        <div className='flex flex-col gap-4 text-lightshade font-barlow mr-14'>
            <h1 className='font-semibold'>Smole.</h1>
            <h1>Advertise</h1>
            <h1>Contact us</h1>
        </div>

    </div>
  )
}

export default Footer