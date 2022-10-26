import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-slate-900 flex h-12 py-10 items-center justify-between'>
      <div className='hidden sm:inline'>
      <span
        className='font-bold text-red-400 cursor-pointer ml-3'
      >
        <a href="https://www.linkedin.com/in/fabriciocuevas/">
        CREADOR
        </a>
      </span>
      </div>
      <div className='flex gap-2.5 items-center'>
        <img src="https://avatars.githubusercontent.com/u/16886311?v=4" alt="avatar" className="w-7 h-7 rounded-full ml-1" />
        <span>John</span>
        <button className='bg-red-400 p-1 rounded mr-2'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar