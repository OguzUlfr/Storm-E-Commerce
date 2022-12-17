import React from 'react'
import { Link } from 'react-router-dom'

const Navigater = () => {
  return (
    <div className='w-full font-semibold text-gray-500 p-2 flex text-xs'>
        <Link className='border-r-2 px-2 text-center'>ANASAYFA</Link>
        <Link className='border-r-2 px-2 text-center'>KADIN</Link>
        <Link className='border-r-2 px-2 text-center text-main-orange'>TOPUKLU AYAKKABI</Link>
    </div>
  )
}

export default Navigater