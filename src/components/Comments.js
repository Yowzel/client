import React from 'react'
import CommentCard from './CommentCard'

const Comments = () => {

  const posts = [
    {
      id: 1,
      body:'Best taco stand around sacramento! Juiciest meat in their tacos!',
      pfp:'/images/beef.jpg',
      img:'/images/beef.jpg',
      username:'',
      likes:'1',
      favorites:'30'
    },
    {
      id: 2,
      body:'Best taco stand around sacramento! Juiciest meat in their tacos!',
      pfp:'/images/beef.jpg',
      img:'',
      username:'',
      likes:'1',
      favorites:'30'
    },
    {
      id: 3,
      body:'Best taco stand around sacramento! Juiciest meat in their tacos!',
      pfp:'/images/beef.jpg',
      img:'',
      username:'',
      likes:'1',
      favorites:'30'
    },
    {
      id: 4,
      body:'Best taco stand around sacramento! Juiciest meat in their tacos!',
      pfp:'/images/beef.jpg',
      img:'/images/beef.jpg',
      username:'',
      likes:'1',
      favorites:'30'
    },
    {
      id: 5,
      body:'Best taco stand around sacramento! Juiciest meat in their tacos!',
      pfp:'/images/beef.jpg',
      img:'/images/beef.jpg',
      username:'',
      likes:'1',
      favorites:'30'
    },
    {
      id: 6,
      body:'Best taco stand around sacramento! Juiciest meat in their tacos!',
      pfp:'/images/beef.jpg',
      img:'/images/beef.jpg',
      username:'',
      likes:'1',
      favorites:'30'
    },
  ]

  return (
    <div className='flex mt-20 font-barlow flex-col'>
        <h1 className='flex justify-center text-4xl text-textcolor'> Recent Activity</h1>

        <div className='flex justify-center flex-wrap gap-20 mt-20'>
          
          {posts.map(post =>(
            <CommentCard id={post.id} 
            body={post.body} 
            pfp={post.pfp} 
            img={post.img} 
            username={post.username} 
            likes={post.likes}
            favorites={post.favorites}
            />
          ))}

        </div>
        
    </div>
  )
}

export default Comments