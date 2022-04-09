import React from 'react'
import MLAInfo from '../Components/MLAInfo'
import Navbar from '../Components/Navbar'
import WorkDoneFeed from '../Components/WorkDoneFeed'

function WardInfo() {
  return (
    <>
      <Navbar></Navbar>
       <div className='mx-5'>
        <div className='h-40 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-box'></div>


        <div className='grid grid-cols-12 gap-5 py-5'>
        <div className='lg:col-start-1 lg:col-end-4 col-start-1 col-end-13'>
          <MLAInfo></MLAInfo>
        </div>
        <div className='lg:col-start-5 lg:col-end-12 col-start-1 col-end-12'>
          <div class="stats w-full shadow-xl h-40 mt-5">
          
          <div class="stat hover:-translate-y-1 transition ease-out">
            <div class="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div class="stat-title">Problems Posted</div>
            <div class="stat-value">2000</div>
            <div class="stat-desc">Jan 1st - Feb 1st</div>
          </div>
          
          <div class="stat hover:-translate-y-1 transition ease-out">
            <div class="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </div>
            <div class="stat-title">Problems Solved</div>
            <div class="stat-value">1000</div>
            <div class="stat-desc">50%</div>
          </div>
          
          <div class="stat hover:-translate-y-1 transition ease-out">
            <div class="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
            </div>
            <div class="stat-title">Total Voters</div>
            <div class="stat-value">1,200</div>
            <div class="stat-desc"> +90 (14% MoM)</div>
          </div>
        </div>
        <WorkDoneFeed></WorkDoneFeed>

      </div>
      </div>
    </div>




    </>
  )
}

export default WardInfo