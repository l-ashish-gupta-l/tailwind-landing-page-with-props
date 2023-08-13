import React from 'react'
import Nav from "./Nav"
import Page1 from "./Page1"
import Page1ctc from './Page1ctc'
import  Card , {Card2 } from './Card.jsx'
import Page2card1 from  "./assets/page2card1.png"
import Page2card3 from  "./assets/Page2card3.png"
import page2image from "./assets/page2 image.png"
import appstorepage2 from "./assets/googleplay.png"
import Page3 , { Page3card } from './Page3.jsx'
import p1img from "./assets/page 3 p1.png"
import p2img from "./assets/page 3 p2.png"
import p3img from "./assets/page 3 p3.png"
function App() {
  return (
    <div className=' bg-[#00040F] m-0 p-0 box-border font-font '>
      <Nav />
      {/* container */}
      <div className='w-[80%]   mx-auto'>
        <Page1
          bonus="20% DISCOUNT FOR 1 MONTH ACCOUNT"
          content1="The Next "
          content2="Genration "
          content3="Payment Method."
          para="Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
                We examine annual percentage rates, annual fees."
        />
        <Page1ctc
          score1="3800+"
          score2="1000+"
          score3="$230M+"
          score1line="USER ACTIVE"
          score2line="TRUSTED MEMBERS"
          score3line=" TRANSACTION"
        />
        <Card 
        cardh1='You do the business, we’ll handle the money.'
        cardpara='With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.'           
          buttoncard = "Get started"
           Page2card1 = {Page2card1}
        />
        
        <Card2 
        cardh2='Easily control your billing & invoicing.'
        cardpara2='Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.'           
        img={appstorepage2}
          Page2card2 = {page2image}
        />

         <Card 
        cardh1='Find a better card deal in few easy steps.'
        cardpara='Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.'           
          buttoncard = "Get started"
           Page2card1 = {Page2card3}
        />
        
        <Page3
          Page3para ="Everything you need to accept card payments and grow your business anywhere on the planet."
          Page3h1 ='What people are saying about us..'
          
          cardpara = "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver."
          p1img = {p1img}
          p1name= "Herman Jensen"
          p1degi ="Founder & Leader"
          card2para = "Money makes your life easier. If you're lucky to have it, you're lucky."
          p2img = {p2img}
          p2name= "Steve Mark"
          p2degi ="Founder & Leader"
          card3para = "It is usually people in the money business, finance, and international trade that are really rich."
          p3img = {p3img}
          p3name= "Kenn Gallagher"
          p3degi ="Founder & Leader"
        />
        
      </div>
    </div>
  )
}

export default App