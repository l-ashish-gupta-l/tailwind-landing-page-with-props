import React from 'react'
import Img from "./assets/logo-nav.png"



function Nav() {
  return (
    <nav className=' border-2 border-red-500 bg-transparent w-screen h-[10vh] flex justify-between  px-[5vw]'>
       <div> <a href="#" className=' w-[15vw] h-full flex justify-center items-center'>
        <img src={Img}  className=' w-1/2 h-1/2 '/></a>
       </div>
       <div className= ' w-1/2 h-full flex justify-between items-center '>
        <h1 className='hover:scale-110 duration-500' ><a className='font-light text-white hover:text-[#5CE1E6]' href='#'>HOME</a></h1>
        <h1 className='hover:scale-110 duration-500' ><a className='font-light text-white hover:text-[#5CE1E6]' href='#'>ABOUT</a></h1>
        <h1 className='hover:scale-110 duration-500' ><a className='font-light text-white hover:text-[#5CE1E6]' href='#'>FEATURES</a></h1>
        <h1 className='hover:scale-110 duration-500' ><a className='font-light text-white hover:text-[#5CE1E6]' href='#'>CONTACT US</a></h1>
       </div>
    </nav>
  )
}

export default Nav