import React from 'react'
import HRPCard from './HRPCard'

function HighestRatedFeed() {
  return (
    <>
        <div className='border-primary border-2 rounded-box relative top-9'>
            <div className='flex justify-center h-8'>Highest Rated Problems</div>
            <HRPCard></HRPCard>
            <HRPCard></HRPCard>
            <HRPCard></HRPCard>
            <HRPCard></HRPCard>
            <HRPCard></HRPCard>

        </div>
    </>
  )
}

export default HighestRatedFeed