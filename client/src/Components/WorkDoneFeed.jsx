import React from 'react'
import WDProblemCard from './WDProblemCard'

function WorkDoneFeed() {
  return (
    <>
        <div className='flex justify-center font-bold pt-10'>Closed Issues</div>
        <WDProblemCard></WDProblemCard>
        <WDProblemCard></WDProblemCard>
        <WDProblemCard></WDProblemCard>
        <WDProblemCard></WDProblemCard>

    </>
  )
}

export default WorkDoneFeed