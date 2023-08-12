import React from 'react'
import HomeImg from './assets/home-page img.png'

function Page1(props) {
    console.log(props)
    return (
    
        <div className='w-full h-[90vh] flex justify-between items-center'>
            <div className=' ml-5 w-[55%] gap-5 h-full flex flex-col  items-center'>
                <div className=' mt-20  bg-gradient-to-r from-[#272727] to-[#11101D] rounded-xl w-[80%] h-8 text-white   flex items-center justify-center'>{props.bonus}</div>
                <div className='w-full h-[50%]'>
                    <h1 className='text-white w-100px text-[3.2rem] even:bg-gray-100 leading-tight'>{props.content1}<span className='text-[#5CE1E6] '>{props.content2}</span>{props.content3}</h1>
                </div>
                <div className='w-[100%] h-[25%] -mt-10 text-start text-white'>{props.para}</div>
                {/* <button className=' hover:bg-white hover:scale-110 duration-100 -mt-10  rounded-3xl w-[13vw] h-[5vh] bg-[#5CE1E6] text-black '>Learn more →</button> */}
            </div>
            <div className='w-[45%] h-full'>
                <img src={HomeImg} className=' w-[80%] ml-[5vw] h-full drop-shadow bg-center object-cover' />
            </div>
        </div>
        
          

    )
}

export default Page1