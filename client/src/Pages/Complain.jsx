import React, { useState } from 'react'
import HighestRatedFeed from '../Components/HighestRatedFeed'
import Navbar from '../Components/Navbar'

function Complain() {
  const [roads, setRoads] = useState(true);
  const [water, setWater] = useState(false);
  const [general, setGeneral] = useState(false);

  function RoadComplainInfo() {
    return(
      <>
        <div>Roads Information</div>
      </>
    )
  }

  function WaterComplainInfo() {
    return(
      <>
        <div>Water Information</div>
      </>
    )
  }

  function GeneralComplainInfo() {
    return(
      <>
        <div>General Information</div>
      </>
    )
  }


  return (
    <>
      <Navbar></Navbar>
       <div className='mx-5'>
        <div className='h-40 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md'></div>


        <div className='grid grid-cols-12 gap-5 py-5'>
        <div className='lg:col-start-1 lg:col-end-9 col-start-1 col-end-13'>
        <div className='text-2xl my-5 mx-2'>Contact Information for Complain</div>
        <div class="tabs tabs-boxed">
          <a className={`${roads ?'bg-blue-500 rounded-box tab mx-5 text-black':'tab mx-5 text-black'}`} onClick={()=>{setRoads(true);setWater(false);setGeneral(false)}}>Roads</a> 
          <a className={`${water ?'bg-blue-500 rounded-box tab mx-5 text-black':'tab mx-5 text-black'}`} onClick={()=>{setRoads(false);setWater(true);setGeneral(false)}}>Water</a> 
          <a className={`${general ?'bg-blue-500 rounded-box tab mx-5 text-black':'tab mx-5 text-black'}`} onClick={()=>{setRoads(false);setWater(false);setGeneral(true)}}>General</a>
        </div>
        <div className='m-10'>
          {roads===true && <RoadComplainInfo></RoadComplainInfo>}
          {water===true && <WaterComplainInfo></WaterComplainInfo>}
          {general===true && <GeneralComplainInfo></GeneralComplainInfo>}
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