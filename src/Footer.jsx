import React from 'react'
import logo from "./assets/logo-nav.png"
function Footer() {
    return (
        <div className='text-white h-[38vh] w-full bg-black flex flex-col '>
            <div className='w-[80%] flex justify-between   mx-auto'>
                <div className='w-[35%] flex flex-col justify-center   h-[30vh] '>
                    <img src={logo} className='w-2/6 my-5' />
                    <p className='text-xs w-[70%]  '>A new way to make the payments easy, reliable and secure.</p>
                </div>
                <div className='w-[60%] px-16 h-[30vh] text-white flex justify-between items-center'>
                    <ul className='text-sm'>
                        <h1 className='text-lg font-bold'>LINKS</h1>
                        <li><a className=' font-extralight hover:text-[#5CE1E6]' href='#'>link</a></li>
                        <li><a className='hover:text-[#5CE1E6]' href='#'>link</a></li>
                        <li><a className='hover:text-[#5CE1E6]' href='#'>link</a></li>
                        <li><a className='hover:text-[#5CE1E6]' href='#'>link</a></li>


                    </ul>

                    <ul className='text-sm'>
                        <h1 className='text-lg font-bold'>LINKS</h1>
                        <li><a className=' font-extralight hover:text-[#5CE1E6]' href='#'>link</a></li>
                        <li><a className='hover:text-[#5CE1E6]' href='#'>link</a></li>
                        <li><a className='hover:text-[#5CE1E6]' href='#'>link</a></li>
                        <li><a className='hover:text-[#5CE1E6]' href='#'>link</a></li>


                    </ul>

                    <ul className='text-sm'>
                        <h1 className='text-lg font-bold'>LINKS</h1>
                        <li><a className=' font-extralight hover:text-[#5CE1E6]' href='#'>link</a></li>
                        <li><a className='hover:text-[#5CE1E6]' href='#'>link</a></li>
                        <li><a className='hover:text-[#5CE1E6]' href='#'>link</a></li>
                        <li><a className='hover:text-[#5CE1E6]' href='#'>link</a></li>


                    </ul>



                </div>

            </div>
             <div className=' flex px-[10%] justify-between items-center border-t-[.5px] border-white h-[20%]'>
                      <h1 className='text-xs'> Copyright  &#169;&nbsp;&nbsp;&nbsp;&nbsp; 2021 HooBank. All Rights Reserved.</h1>
                      <h1 className='text-lg mr-10 '><a href='#'> <i class="ri-facebook-circle-line"></i> <i class="ri-instagram-line"></i> <i class="ri-github-line"></i> <i class="ri-linkedin-box-fill"></i></a></h1>
             </div>
        </div>
    )
}

export default Footer