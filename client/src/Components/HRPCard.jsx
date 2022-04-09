import React from 'react'

function HRPCard() {
  return (
    <>
        <div className='m-4 hover:bg-slate-200 hover:scale-105 hover: transition ease-out hover:rounded-md active:translate-y-1 active:scale-100 active:bg-blue-500 '>
            <label for="my-modal-3" className='grid grid-cols-4'>
                <img src="https://tatainnoverse.com/public/challangeImages/potholes.jpg" className='h-16 w-24 object-cover rounded-md col-start-1 col-end-2' alt="Problem Image" />
                <div className='flex flex-center col-start-2 col-end-5 items-center ml-4 select-none'>Problem Name</div>
            </label>
        </div>

        <input type="checkbox" id="my-modal-3" class="modal-toggle"></input>
        <label for="my-modal-3" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
            <figure><img src="https://tatainnoverse.com/public/challangeImages/potholes.jpg" className='h-72 w-full object-cover rounded-md' alt="Shoes" /></figure>
            <h2 class="card-title pt-5">Problem Name</h2>
            <p className='pt-5 font-bold'>Problem Location:Wadala East</p>
            <p className='pt-5 font-bold'>Problem Description:</p>
            <p className='pt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </label>
        </label>
    </>
  )
}

export default HRPCard