import React from 'react'
import HighestRatedFeed from '../Components/HighestRatedFeed'
import Navbar from '../Components/Navbar'

function Complain() {
  return (
    <>
      <Navbar></Navbar>
       <div className='mx-5'>
        <div className='h-40 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-box'></div>


        <div className='grid grid-cols-12 gap-5 py-5'>
        <div className='lg:col-start-1 lg:col-end-9 col-start-1 col-end-13'>
        <div class="tabs tabs-boxed">
          <a class="tab">Tab 1</a> 
          <a class="tab bg-blue-500 rounded-box">Tab 2</a> 
          <a class="tab">Tab 3</a>
        </div>
        </div>
        <div className='lg:col-start-10 lg:col-end-13 col-start-1 col-end-12'>
        <HighestRatedFeed></HighestRatedFeed>
      </div>
      </div>
    </div>
    </>
  )
}

export default Complain