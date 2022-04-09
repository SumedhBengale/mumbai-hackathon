import React from 'react'

function WDProblemCard() {
  return (
    <>
        <div class="card card-compact rounded-box bg-base-100 m-5 px-5">
            <figure><img src="https://tatainnoverse.com/public/challangeImages/potholes.jpg" className='h-72 w-full object-cover rounded-box' alt="Shoes" /></figure>
            <div className='px-5'>
                <div class="card-body relative bottom-20 bg-slate-200 rounded-box">
                    <h2 class="card-title">Problem Name</h2>
                    <p>Problem Location</p>
                    <div className='flex place-content-between'>
                        <div class="card-actions items-center">
                            <button class="btn btn-primary btn-sm hover:-translate-y-1">Read More</button>
                        </div>

                        <div class="card-actions justify-end">
                            <button class="btn btn-primary btn-sm hover:-translate-y-1">Up</button>
                            <button class="btn btn-primary btn-sm hover:-translate-y-1">Down</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WDProblemCard