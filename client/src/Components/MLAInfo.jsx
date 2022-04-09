import React from 'react'

function MLAInfo() {
  return (
    <>
        <div class="avatar z-10 flex justify-center">
            <div class="w-24 rounded-full hover:scale-105 hover:transition ease-out">
                <img src="https://api.lorem.space/image/face?hash=92310" />
            </div>
        </div>

        <div className='w-full border-primary border-2 rounded-box relative bottom-16 z-0'>
          <div className='pt-16 px-2'>
            <div className='p-4'>Name:</div>
            <div className='p-4'>Poltical Affiliation:</div>
            <div className='p-4'>Representing: Area Name</div>
            <div className='p-4'>Educational Qualification:</div>
            <div className='p-4'>Agenda:</div>

          </div>
        </div>
    </>
  )
}

export default MLAInfo