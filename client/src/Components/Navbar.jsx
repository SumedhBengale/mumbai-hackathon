import React from 'react'

function Navbar() {
  return (
    <>
        <div className='mr-5 ml-5'>
        <div class="navbar">
            <div class="navbar-start">
                <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Home</a></li>
                    <li><a>Ward Information</a></li>
                    <li><a>Complain Information</a></li>
                </ul>
                </div>
            </div>
            <div class="navbar-center">
                <a class="btn btn-ghost normal-case text-xl">Birbal</a>
            </div>
            <div class="navbar-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-xl">
                        <img src="https://api.lorem.space/image/face?hash=33791" />
                    </div>
                </label>
            </div>
            <div className='grid grid-cols-1 px-2 '>
                <div>Welcome</div>
                <div>Sumedh</div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Navbar