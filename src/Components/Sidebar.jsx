import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

const Sidebar = () => {
  return (
    <div className='flex-1 border-r border-r-slate-900 bg-slate-600'>
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}

export default Sidebar