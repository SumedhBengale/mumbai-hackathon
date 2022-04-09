import React from 'react'

function ProblemCard() {
  return (
    <>  
        <div class="card card-compact rounded-box bg-base-100 -mt-10 m-5">
            <figure><img src="https://tatainnoverse.com/public/challangeImages/potholes.jpg" className='h-72 w-full object-cover rounded-box' alt="Shoes" /></figure>
            <div className='px-5'>
                <div class="card-body relative bottom-20 bg-slate-200 rounded-box ">
                    <h2 class="card-title">Problem Name</h2>
                    <p>Problem Location</p>
                    <div className='flex place-content-between'>
                        <div class="card-actions items-center">
                            <label for="my-modal-1" class="btn btn-primary modal-button btn-sm hover:-translate-y-1">Read More</label>


                            <input type="checkbox" id="my-modal-1" class="modal-toggle"></input>
                            <label for="my-modal-1" class="modal cursor-pointer">
                            <label class="modal-box relative" for="">
                                <figure><img src="https://tatainnoverse.com/public/challangeImages/potholes.jpg" className='h-72 w-full object-cover rounded-box' alt="Shoes" /></figure>
                                <h2 class="card-title pt-5">Problem Name</h2>
                                <p className='pt-5 font-bold'>Problem Location:Wadala East</p>
                                <p className='pt-5 font-bold'>Problem Description:</p>
                                <p className='pt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </label>
                            </label>


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

export default ProblemCard