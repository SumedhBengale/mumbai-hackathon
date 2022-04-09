import React from 'react'
import promote from '../Images/promote.svg'
import demote from '../Images/demote.svg'


function WDProblemCard() {
  return (
    <>
       <div class="card card-compact rounded-md bg-base-100 -mt-10 m-5">
            <figure><img src="https://tatainnoverse.com/public/challangeImages/potholes.jpg" className='h-72 w-full object-cover rounded-md' alt="Shoes" /></figure>
            <div className='px-5'>
                <div class="card-body relative bottom-20 bg-slate-200 rounded-md ">
                    <h2 class="card-title">Problem Name</h2>
                    <p>Problem Location</p>
                    <div className='flex place-content-between'>
                        <div class="card-actions items-center">
                            <label for="my-modal-2" class="btn rounded-md btn-outline modal-button btn-sm hover:-translate-y-1 mt-10 border-blue-500 text-blue-500 hover:bg-blue-500 active:bg-blue-500">Read More</label>


                            <input type="checkbox" id="my-modal-2" class="modal-toggle"></input>
                            <label for="my-modal-2" class="modal cursor-pointer">
                            <label class="modal-box relative" for="">
                                <figure><img src="https://tatainnoverse.com/public/challangeImages/potholes.jpg" className='h-72 w-full object-cover rounded-md' alt="Shoes" /></figure>
                                <h2 class="card-title pt-5">Problem Name</h2>
                                <p className='pt-5 font-bold'>Problem Location:Wadala East</p>
                                <p className='pt-5 font-bold'>Problem Description:</p>
                                <p className='pt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </label>
                            </label>


                        </div>

                        <div class="card-actions justify-end mt-10">
                            <button class="btn rounded-box btn-ghost scale-150 hover:bg-slate-200 hover:-translate-y-1">
                                <img src={promote}></img>
                            </button>
                            <button class="btn btn-primary rounded-box scale-150 btn-ghost hover:bg-slate-200 hover:-translate-y-1 active:scale-200">
                            <img src={demote}></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WDProblemCard