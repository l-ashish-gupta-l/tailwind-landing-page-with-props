import React from 'react'
import Nav from "./Nav"
import Page1 from "./Page1"
import Page1ctc from './Page1ctc'

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
        <Page1ctc />
      </div>
    </div>
  )
}

export default App