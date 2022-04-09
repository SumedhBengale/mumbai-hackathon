import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/ProfilePhotoInput.css'

function SignUp() {

  let navigate = useNavigate();
  function gotoHome() {
    // 
    navigate("/")
  }

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


              <div className='grid grid-cols-12 gap-1'>
                <div className='col-start-1 col-end-8 mt-16 mx-5'>
                  <div className="form-control">
                    <label className="label required">
                      <span className="label-text ">First Name</span>
                    </label>
                    <input type="text" placeholder="email" className="input input-bordered input-wide transition ease-in-out hover:-translate-y-1"></input>
                  </div>

                  <div className="form-control">
                    <label className="label required">
                      <span className="label-text ">Last Name</span>
                    </label>
                    <input type="text" placeholder="email" className="input input-bordered transition ease-in-out hover:-translate-y-1"></input>
                  </div>
                </div>

                <div className='mt-12 mr-5 col-start-8 col-end-13'>
                  <div className="form__img-input-container transition ease-in-out hover:-translate-y-1">
                    <input 
                        type="file" 
                        accept=".png, .jpg, .jpeg" 
                        id="photo" 
                        className="visually-hidden h-40 w-full"
                        onChange={handleImg}
                    />
                    <label htmlFor="photo" className="form-img__file-label h-full w-full"/>
                    <img src={src} alt={alt} className="form-img__img-preview w-full h-50 rounded-full object-cover border-blue-500 border-2 rounded-box hover:scale-105 transition ease-out active:scale-100"/>
                  </div>

                  <div className='flex justify-center'>Add your Profile Photo</div>
                </div>
              </div>

                <div className='mx-5'>
                  <div className="form-control">
                    <label className="label required">
                      <span className="label-text ">Email</span>
                    </label>
                    <input type="text" placeholder="email" className="input input-bordered transition ease-in-out hover:-translate-y-1"></input>
                  </div>
                  <div className="form-control">
                    <label className="label required">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" className="input input-bordered transition ease-in-out hover:-translate-y-1"></input>
                    <label className="label required">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <input type="text" placeholder="password" className="input input-bordered transition ease-in-out hover:-translate-y-1"></input>
                  </div>
                  <div className="form-control mt-6">
                    <button onClick={gotoHome} className="btn btn-primary transition ease-in-out hover:-translate-y-1">Sign Up</button>
                  </div>
                  <label className="label">
                      <Link to="/signin" className="label-text-alt link link-hover">Already have an Account?</Link>
                  </label>
                </div>
                
                
                
          </div>
        </div>
      </div>
    </>


  )
}

export default SignUp