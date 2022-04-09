import React from 'react'
import ProblemCard from './ProblemCard'

function Feed() {
  return (
      <>
      <div className=''>
          <div className='flex justify-center text-xl'>All Problems</div>
            <ProblemCard></ProblemCard>
            <ProblemCard></ProblemCard>
            <ProblemCard></ProblemCard>
            <ProblemCard></ProblemCard>
        </div>
    </>

  )
}

export default Feed