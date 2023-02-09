import React from 'react'
import Gallery from './Gallery'

const Content = () => {
  return (
    <div className='flex flex-wrap justify-center gap-36 mt-32'>

        <Gallery text='Small businesses near you' img='/images/tacoss.jpg' button='Locate'/>
        <Gallery text='View Local Menus' img='/images/menu.jpg' button='View'/>
        <Gallery text='Our Mission' img='/images/hands.jpg' button='Learn More'/>

    </div>
  )
}

export default Content