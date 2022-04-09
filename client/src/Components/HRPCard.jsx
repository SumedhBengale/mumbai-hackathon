import React from 'react'

function HRPCard() {
  return (
    <>
        <div className='m-4 hover:bg-slate-200 hover:scale-105 hover: transition ease-out hover:rounded-box active:translate-y-1 active:scale-100 active:btn-primary '>
            <div className='grid grid-cols-4'>
                <img src="https://tatainnoverse.com/public/challangeImages/potholes.jpg" className='h-16 w-24 object-cover rounded-box col-start-1 col-end-2' alt="Problem Image" />
                <div className='flex flex-center col-start-2 col-end-5 items-center ml-4 select-none'>Problem Name</div>
            </div>
        </div>
    </>
  )
}

export default HRPCard