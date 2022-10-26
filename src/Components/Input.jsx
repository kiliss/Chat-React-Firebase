import React from 'react'
import {MdOutlineAddPhotoAlternate} from 'react-icons/md'
import {HiOutlinePaperClip} from 'react-icons/hi'

const Input = () => {
  return (
    <div className='h-12 bg-white text-black p-3 flex justify-between'>
      <input className='bg-white block w-full p-2 outline-0 border-0  text-base' placeholder='Escribe algo...' />
      <div className='flex items-center'>
        <label hrmlFor="file" className="block text-sm font-medium text-gray-700 undefined">
          <MdOutlineAddPhotoAlternate size="25"/>
          <input type="file" name="file" id="file" className="hidden" />
        </label>
        <button className='bg-blue-500 px-4 py-2 rounded ml-2 text-white'>Enviar</button>
      </div>
    </div>
  )
}

export default Input