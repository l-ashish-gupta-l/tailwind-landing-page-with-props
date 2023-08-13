import React from 'react'
import Page2card1 from  "./assets/page2card1.png"
function Card(props) {
  return (
    <div className= 'my-[25vh] w-full h-[55vh] flex justify-between items-center px-10 '>
        <div className=' w-[45%] h-full '>
            <h1 className='text-white w-100 text-[1.8rem] even:bg-gray-100 leading-tight'>{props.cardh1}</h1>
            <div className='w-[100%] h-[25%] mt-8 text-start text-[1.2vw] text-white'>{props.cardpara}</div>
             <button className=' hover:bg-white hover:scale-110 duration-100 mt-10  rounded-3xl w-[13vw] h-[5vh] bg-[#5CE1E6] text-black '>{props.buttoncard}</button>
        
        </div>
        <div className=' w-[45%] h-full '>
            <img src={props.Page2card1} alt='image' className='w-full h-full bg-cover'/>
        </div>

    </div>
  )
}
export const Card2 = (props) => {
  return (
    <div className= ' my-[25vh]   w-full h-[55vh] flex justify-between items-center px-10 flex-row-reverse '>
        <div className=' w-[45%] h-full '>
            <h1 className='text-white w-100 text-[1.8rem] even:bg-gray-100 leading-tight'>{props.cardh2}</h1>
            <div className='w-[100%] h-[25%] mt-8 text-start text-[1.2vw] text-white'>{props.cardpara2}</div>
            <img src={props.img} className='w-1/2 mt-10'/> 
        
        </div>
        <div className=' w-[45%] h-full '>
            <img src={props.Page2card2} alt='image' className='w-full h-full bg-cover'/>
        </div>

    </div>
  )
}

export default Card

