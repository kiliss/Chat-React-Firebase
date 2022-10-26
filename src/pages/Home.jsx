import React from 'react'
import Chat from '../Components/Chat'
import Sidebar from '../Components/Sidebar'


const Home = () => {
  return (
    <div className='flex justify-center h-screen items-center'>
      <div className='border w-2/3 h-5/6 flex overflow-hidden rounded-xl'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default Home