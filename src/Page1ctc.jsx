import React from 'react'

function Page1ctc(props) {
  return (
    <div className='w-[100%] rounded-full mt-[8vh] h-[20vh flex justify-between '>
      <div className=' w-[30%] h-full flex justify-center items-center '><h1 className='m-2 text-3xl text-white'>{props.score1}</h1><p className=' text-[#5CE1E6]'>{props.score1line}</p></div>      
      <div className=' w-[35%] h-full flex justify-center items-center '><h1 className='m-2 text-3xl text-white'>{props.score2}</h1><p className=' text-[#5CE1E6]'>{props.score2line}</p></div>      
      <div className=' w-[30%] h-full flex justify-center items-center '><h1 className='m-2 text-3xl text-white'>{props.score3}</h1><p className=' text-[#5CE1E6]'>{props.score3line}</p></div>      
           
    </div>
  )
}

export default Page1ctc