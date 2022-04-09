import React, { useEffect, useState } from 'react'
import Feed from '../Components/Feed'
import HighestRatedFeed from '../Components/HighestRatedFeed'
import MLAInfo from '../Components/MLAInfo'
import Navbar from '../Components/Navbar'
import '../Styles/FileInput.css'

function Home() {

  const [image, setImage]=useState(null);

  const [{alt, src}, setImg] = useState({
    src: 'https://newhorizon-bsh.s3.ap-south-1.amazonaws.com/nhengineering/bsh/wp-content/uploads/2020/01/17113522/default-image.png',
    alt: 'Upload an Image'
});

const handleImg = (e) => {
    if(e.target.files[0]) {
        setImg({
            src: URL.createObjectURL(e.target.files[0]),
            alt: e.target.files[0].name
        });    
    }   
}

useEffect(()=>{
    if(image){
        const reader =new FileReader();
        reader.onloadend=()=>{
            setImage(reader.result);
        }
        reader.readAsDataURL(image);
    }
    else{
        setImage(null);
    }
},[image]);
  return (
    <>
      <Navbar></Navbar>
      <div className='mx-5'>
        <div className='h-40 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-box'></div>
        <div className='flex justify-center relative bottom-7'>
          <label for="my-modal" class="input input-bordered modal-button bg-white hover:scale-105 rounded-lg w-full max-w-xl flex flex-start">
            <div className='relative top-2 text-black'>Add a Problem</div>
          </label>


          <input type="checkbox" id="my-modal" class="modal-toggle"></input>
          <label for="my-modal" class="modal cursor-pointer">
          <label class="modal-box relative" for="">s
          <div className='font-bold pl-'>Add a Problem</div>
          <div className="form__img-input-container-1">
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg" 
                id="photo" 
                className="visually-hidden-1 h-40 w-full"
                onChange={handleImg}
            />
            <label htmlFor="photo" className="form-img__file-label-1 h-full w-full"/>
            <img src={src} alt={alt} className="form-img__img-preview-1 w-full h-96 object-cover border-blue-500 border-2 rounded-box hover:scale-105 transition ease-out active:scale-100"/>
          </div>
              <form>


              <div class="form-control w-full max-w-xl">
                <label class="label">
                  <span class="label-text">Title of the Issue</span>
                </label>
                <input type="text" placeholder="Title" class="input input-bordered w-full max-w-xl"></input>
              </div>

              <div class="form-control w-full max-w-xl">
                <label class="label">
                  <span class="label-text">Brief Description of the Issue</span>
                </label>
                <textarea type="textarea" placeholder="Description" class="input input-bordered w-full max-w-xl resize-none h-48"></textarea>
              </div>

              <div class="form-control w-full max-w-xl">
                <label class="label">
                  <span class="label-text">Location</span>
                </label>
                <input type="textarea" placeholder="Location" class="input input-bordered w-full max-w-xl resize-none h-48"></input>
              </div>

              <div class="modal-action">
                <label for="my-modal" class="btn px-16">Submt</label>
              </div>
              </form>
          </label>
          </label>
        </div>

        <div className='grid grid-cols-12 gap-5'>

          <div className='lg:col-start-1 lg:col-end-4 col-start-1 col-end-13'>
            <MLAInfo></MLAInfo>
          </div>

          <div className='lg:col-start-4 lg:col-end-10 col-start-1 col-end-13'>
            <Feed></Feed>
          </div>

          <div className='lg:col-start-10 lg:col-end-13 col-start-1 col-end-13'>
            <HighestRatedFeed></HighestRatedFeed>
          </div>

        </div>
      </div>

    </>

  )
}

export default Home