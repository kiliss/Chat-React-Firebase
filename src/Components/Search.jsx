import React from 'react'

const Search = () => {
  return (
    <div className='border-b border-b-red-600'>
      <div className='p-2'>
        <input type="text" placeholder=" Buscar usuario..." className='bg-white/10 border-0 outline-0'/>
      </div>
        <div className='flex items-center p-4 gap-4 hover:bg-gray-400 cursor-pointer'>
          <img src="https://avatars.githubusercontent.com/u/16886311?v=4" alt="avatar" className="w-10 h-10 rounded-full" />
          <div>
            <span>John</span>
          </div>
        </div>
    </div>
  )
}

export default Search