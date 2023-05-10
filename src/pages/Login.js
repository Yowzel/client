import React from 'react'
import Navbar from '../components/Navbar'
import GoogleLogin from '../components/GoogleLog'
import { useEffect } from 'react'
import {gapi} from 'gapi-script'
import {Link} from 'react-router-dom'

const clientId = '553859060156-h3632svbkihq01qs1p68uakep7glhs2a.apps.googleusercontent.com';

const Login = () => {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }

    gapi.load('client:auth2', start);
  })

  return (
    <div className="bg-gradient-to-b from-maincolor to-darkshade h-screen">
      <div className="bg-gradient-to-b from-maincolor to-darkshade min-h-full">
    
        <Navbar />
        <div className='flex justify-center mt-32'>

            <div className='flex flex-col bg-lightshade w-[500px] h-[700px] rounded-3xl'>
                <h1 className='flex text-darkshade text-4xl font-barlow font-bold mt-7 justify-center'>Login</h1>

                <form className='flex flex-col justify-center mt-7 p-20 gap-6 font-barlow'>
                    <input type='text' placeholder='username' className='p-2'/>
                    <input type='password' placeholder='password' className='p-2'/>
                    <button className='bg-darkshade p-3 text-lightshade text-2xl rounded-xl'>Login</button>
                </form>

                <div className='flex justify-center'>
                  <GoogleLogin/>
                </div>
                

                <div className='flex justify-center flex-col mt-32 font-barlow'>
                    <h2 className='flex justify-center text-lg text-lightaccent font-semibold'>Don't have an account?</h2>
                    <button className='text-xl text-darkshade font-semibold'><Link to='/signup'>Sign up</Link></button>
                </div>

            </div>
            
            
            
        </div>

      </div>
    </div>
  )
}

export default Login