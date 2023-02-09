import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {useState, useEffect} from 'react'
import '../index.css';

const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {

            /*
            if(window.innerWidth > 767) {
                setShowMobileMenu(false);
                setMobileMenuOpen(false);
            } else if (window.innerWidth < 767) {
                setShowMobileMenu(true);
            }
            */
            setWindowWidth(window.innerWidth)

        }
        
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize',handleResize);
        }

    },[]);

    const handleClick = () => {
        if(mobileMenuOpen) {
            setMobileMenuOpen(false)
        } else {
            setMobileMenuOpen(true)
        }
    }
  
    return (
        <div className=' bg-maincolor text-lightshade'>
            
            
            {windowWidth < 767 ? 
                            <div className='flex justify-center'>

                                {   
                                mobileMenuOpen ? 
                                    null
                                    :
                                    <div className='flex gap-20 items-center'>
                                        <h1 className='text-4xl p-5 font-lemonada '>
                                        Smole.
                                        </h1>
                                        <AiOutlineMenu className=' text-lightshade text-4xl' onClick={handleClick}/>
                                    </div>
                                    
                                }
                                
                                {
                                    mobileMenuOpen ? 
                                    <div className='flex flex-col font-barlow items-center h-screen text-3xl m-0 p-0'>
                                        <h1 className='text-4xl p-10 font-lemonada'>
                                        Smole.
                                        </h1>
                                        <ul className='flex flex-col align-middle items-center gap-10'>
                                            <AiOutlineMenu className=' text-lightshade text-4xl' onClick={handleClick}/>
                                            <li>How to help</li>
                                            <li>Search</li>
                                            <li>Post</li>
                                            <li>About</li>
                                            <li>Login</li>
                                            <li>Sign up</li>
                                        </ul>
                                    </div>  
                                    :
                                    null
                                }
                            </div>
                            :
                            null
            }

            {windowWidth >= 767 ? 

                        <div className='flex justify-between'>
                            <h1 className='text-4xl p-10 font-lemonada'>
                                    Smole.
                            </h1>
                            <div className='flex gap-5 text-xl p-10 content-center font-barlow'>
                                 <button>How to help</button>
                                 <button>Search</button>
                                 <button>Post</button>
                                 <button>About</button>
                                 <button className='border border-darkshade px-3 bg-buttoncolor rounded'>Login</button>
                                 <button className='border border-darkshade px-5 bg-lightaccent rounded'>Sign up</button>
                            </div> 
                        </div>
                            

                            
                        :
                        null
                
            }
            
        </div>
  )
}

export default Navbar