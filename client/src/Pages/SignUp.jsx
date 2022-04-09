import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/ProfilePhotoInput.css'

function SignUp() {

  const [image, setImage]=useState(null);

  const [{alt, src}, setImg] = useState({
    src: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
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
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-top">
            <h1 className="text-5xl font-bold">Sign Up!</h1>
            <p className="py-6">PS: Make sure you choose a strong password!</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-lg bg-base-100">
            <div className="card-body grid grid cols-12">
                <div className='lg:col-start-1 lg:col-end-5 col-start-1 col-end-13'>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered"></input>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered"></input>
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered"></input>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
              <label className="label">
                  <Link to="/signin" className="label-text-alt link link-hover">Already have an Account?</Link>
              </label>
                </div>
                
                <div className='lg:col-start-5 lg:col-end-13 col-start-1 col-end-13'>
                <div className="form__img-input-container">
                  <input 
                      type="file" 
                      accept=".png, .jpg, .jpeg" 
                      id="photo" 
                      className="visually-hidden h-40 w-40"
                      onChange={handleImg}
                  />
                  <label htmlFor="photo" className="form-img__file-label h-40 w-40 rounded-box"/>
                  <img src={src} alt={alt} className="form-img__img-preview w-40 h-40 object-cover border-blue-500 border-2 rounded-box hover:scale-105 transition ease-out active:scale-100"/>
                </div>
                <div className='flex justify-center'>Add your Profile Photo</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp