import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignIn() {

  let navigate = useNavigate();
  function gotoHome() {
    // If pw and email are correct
    navigate("/")
  }

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">PS: Make sure your credentials are correct!</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered transition ease-in-out hover:-translate-y-1"></input>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered transition ease-in-out hover:-translate-y-1"></input>
                <label className="label">
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary transition ease-in-out hover:-translate-y-1" onClick={gotoHome}>Login</button>
              </div>
              <label className="label transition ease-in-out hover:-translate-y-1">
                  <Link to='/signup'>Dont't have an Account?</Link>
                </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn