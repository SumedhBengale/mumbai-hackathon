import React from 'react'
import ProblemCard from './ProblemCard'

function Feed() {
  return (
      <>
      <div className=''>
          <div className='flex justify-start text-xl m-10 pb-5 underline underline-offset-2 decoration-blue-500'>All Problems</div>
            <ProblemCard></ProblemCard>
            <ProblemCard></ProblemCard>
            <ProblemCard></ProblemCard>
            <ProblemCard></ProblemCard>
        </div>
    </>

  )
}

export default Feed