import React from 'react'
import {FiMoreHorizontal} from 'react-icons/fi'
import {HiOutlineUserAdd} from 'react-icons/hi'
import {MdOutlineVideoCall} from 'react-icons/md'
import Messages from './Messages'
import Input from './Input'



const Chat = () => {
  return (
    <div className='flex-auto w-2/6'>
      <div className='bg-cyan-600 h-12 py-10 flex justify-between items-center'>
        <span className='font-medium ml-2'>John</span>
        <div className='mr-3'>
          <FiMoreHorizontal className='inline-block text-white text-2xl cursor-pointer'/>
          <HiOutlineUserAdd className='inline-block text-white text-2xl ml-2 cursor-pointer' />
          <MdOutlineVideoCall className='inline-block text-white text-2xl ml-2 cursor-pointer' />
          
        </div>
      </div>
        <Messages />
        <Input />
    </div>
  )
}

export default Chat