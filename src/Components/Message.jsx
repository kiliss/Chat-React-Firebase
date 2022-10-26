import React from 'react'

const Message = () => {
  return (
    <div className='bg-stone-300 p-3 text-black flex items-center flex-row-reverse'>
      <div>
        <img src="https://avatars.githubusercontent.com/u/16886311?v=4" alt="avatar" className="w-10 h-10 rounded-full ml-10" />
        <span className='flex flex-row-reverse'>Just now</span>
      </div>
      <div className='bg-white p-2 rounded-t-xl rounded-l-xl'>
        {/* <img src="" alt="" className='w-20 h-20 hidden rounded' /> */}
        <span>Hello.</span>
      </div>
    </div>
  )
}

export default Message