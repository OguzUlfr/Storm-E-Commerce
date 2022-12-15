import React from 'react'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div className='w-11/12 mx-auto my-16 h-[460px] rounded-3xl relative'>
        <div className='w-full h-full bg-red-600 rounded-3xl'></div>
        <Link className='absolute -bottom-6 bg-white text-main-green text-center left-1/2 w-2/6 -translate-x-1/2 px-2 rounded-md py-3 font-bold text-lg'>Title</Link>
    </div>
  )
}

export default index