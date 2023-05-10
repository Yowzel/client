import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    
    <div className="bg-gradient-to-b from-maincolor to-darkshade h-screen">
      <div className="bg-gradient-to-b from-maincolor to-darkshade min-h-full">
        <Navbar />

        <div className='text-center mt-10'>
          <h1 className='text-4xl text-textcolor font-lemonada'>Our Mission</h1>
        </div>
        
        <div className='flex gap-24 justify-center mt-16'>
          <p className='text-right w-72'>At Smole, our mission is to empower people to discover the hidden
             gems of small business restaurants that are often overlooked. 
             We believe that every small business restaurant has a unique story
            to tell and a delicious dish to offer. Our goal is to provide 
            authentic and unbiased food reviews that showcase the passion, 
            creativity, and diversity of small business restaurants across
             the world.
          </p>

          <img src ="/images/small.jpg" alt ='helping' className='w-80 h-80 rounded-3xl'/>
        </div>

        <div className='flex gap-24 justify-center mt-16'>
          <img src="/images/small2.jpg" alt= "helping2" className='w-80 h-80 rounded-3xl object-cover'/>

          <p className='text-left w-72'>We are committed to supporting local communities and promoting 
            sustainable and ethical food practices. Our team of expert reviewers 
            carefully selects the restaurants that we feature on our platform, 
            ensuring that they meet our high standards for quality, authenticity, 
            and innovation. We strive to create a community of food lovers who 
            share our passion for discovering new flavors and supporting small 
            businesses.
          </p>
        </div>

        <div className='flex gap-24 justify-center mt-16'>
          <p className='text-right w-72'>At Smole, we believe that food is more than just nourishment – 
            it is a way to connect with people, cultures, and traditions. 
            Through our platform, we hope to inspire people to explore the rich 
            and vibrant culinary landscape of small business restaurants and 
            celebrate the joy of food together.
          </p>

          <img src="/images/small3.jpg" alt= "helping2" className='w-80 h-80 object-cover rounded-3xl'/>
        </div>

      </div>


    </div>
  )
}

export default Home