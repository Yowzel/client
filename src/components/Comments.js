import React from 'react'
import CommentCard from './CommentCard'

const Comments = () => {
  return (
    <div className='flex mt-20 font-barlow flex-col'>
        <h1 className='flex justify-center text-4xl text-lightshade'> Recent Activity</h1>

        <div className='flex justify-center flex-wrap gap-20 mt-20'>
          
            <CommentCard className='' body='Best taco stand around sacramento! Juiciest meat in their tacos!' pfp='/images/beef.jpg' img='/images/beef.jpg' username='' likes='1' favorites='30'/>
            <CommentCard className='' body='Customer Service off the charts!' pfp='/images/beef.jpg' img='' likes='20' favorites='2'/>
            <CommentCard className='' body='Lots of parking near by, great selection of food and good prices!' pfp='/images/beef.jpg' img='' username='' likes='2' favorites='40'/>
            <CommentCard className='' body='Customer service was amazingg!!!' pfp='/images/beef.jpg' img='' username='' likes='3' favorites='2'/>
            <CommentCard className='' body='Best taco stand around sacramento! Juiciest meat in their tacos!' pfp='/images/beef.jpg' img='/images/beef.jpg' username='' likes='100' favorites='2'/>
            <CommentCard className='' body='Not a lot of ppl! still a lowkey place with the best food' pfp='/images/beef.jpg' img='' username='' likes='20' favorites='50'/>

        </div>
        
    </div>
  )
}

export default Comments