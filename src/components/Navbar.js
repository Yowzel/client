import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
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
        <div className=' text-textcolor'>
            
            
            {windowWidth < 767 ? 
                            <div className='flex justify-center'>

                                {   
                                mobileMenuOpen ? 
                                    null
                                    :
                                    <div className='flex gap-20 items-center'>
                                        <h1 className='text-4xl p-5 font-lemonada '>
                                        <Link to='/home'>Smole.</Link>
                                        </h1>
                                        <AiOutlineMenu className=' text-textcolor text-4xl' onClick={handleClick}/>
                                    </div>
                                    
                                }
                                
                                {
                                    mobileMenuOpen ? 
                                    <div className='flex flex-col font-barlow items-center h-screen text-3xl m-0 p-0'>
                                        <h1 className='text-4xl p-10 font-lemonada'>
                                        <Link to='/home'>Smole.</Link>
                                        </h1>
                                        <ul className='flex flex-col align-middle items-center gap-10'>
                                            <AiOutlineMenu className=' text-textcolor text-4xl' onClick={handleClick}/>
                                            <li>How to help</li>
                                            <li>Search</li>
                                            <li><Link to='/review'>Post</Link></li>
                                            <li><Link to='/about'>About</Link></li>
                                            <li><Link to='/login'>Login</Link></li>
                                            <li><Link to='/signup'>Sign up</Link></li>
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
                                 <button><Link to='/review'>Post</Link></button>
                                 <button><Link to='/about'>About</Link></button>
                                 <button className='border border-textcolor px-3 bg-maincolor rounded'><Link to='/login'>Login</Link></button>
                                 <button className='border border-textcolor px-5 bg-darkshade rounded text-lightshade'><Link to='/signup'>Sign up</Link></button>
                            </div> 
                        </div>
                            

                            
                        :
                        null
                
            }
            
        </div>
  )
}

export default Navbar