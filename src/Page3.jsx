import React from 'react'
import cardlogo from "./assets/mark.png"


function Page3card (props){
   return( <div className='w-[30%] gap-10 flex flex-col justify-center items-center p-5 hover:bg-gradient-to-br from-[#6D6D6D] to-[#11101D]   rounded-3xl h-full  border-white text-white '>
              <img src={cardlogo} alt='"' className='w-[12%]'/>
              <p>{props.para}</p>
              <div className='flex w-full '>
                <img src={props.pimg} className='w-[50px]'/>
                <h1 className='mx-5'>{props.pname}<br/><span className='text-[10px]'>{props.pdegi}</span></h1>
              </div>
    </div>
   )
}

export {Page3card}



function Page3(props) {
  return (
    <div className='w-full h-[110vh]    '>
        <div className='w-full h-[40vh] flex '>
            <h1 className='text-white text-5xl leading-snug text-start flex items-center  w-[50%]'>{props.Page3h1}</h1>
             <p className='text-white w-[40%] ml-10 text-start flex items-center text-sm'>{props.Page3para}</p>
        </div>
        <div className='w-full h-[60vh] mt-5  text-white flex justify-between'>
       <Page3card
        para = {props.cardpara}
        pimg = {props.p1img}
        pname={props.p1name}
        pdegi={props.p1degi}
       /> 
       <Page3card
        para = {props.card2para}
        pimg = {props.p2img}
        pname={props.p2name}
        pdegi={props.p2degi}
       /> 
       <Page3card
        para = {props.card3para}
        pimg = {props.p3img}
        pname={props.p3name}
        pdegi={props.p3degi}
       /> 
              
       
              </div>
       
    </div>
  )
}

export default Page3