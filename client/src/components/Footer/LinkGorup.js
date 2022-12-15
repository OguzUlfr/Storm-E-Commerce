import React from 'react'
import { Link } from 'react-router-dom'

const LinkGorup = () => {
  return (
    <div className='flex flex-col p-6 gap-7'>
        <h5 className=' w-36 text-3xl font-bold text-gray-600 mb-4'>Storm</h5>
        <Link className='font-semibold text-gray-600'>Biz Kimiz</Link>
        <Link className='font-semibold text-gray-600'>Kariyer</Link>
        <Link className='font-semibold text-gray-600'>İletişim</Link>
        <Link className='font-semibold text-gray-600'>Satış Yap</Link>
        <Link className='font-semibold text-gray-600'>Güvenli Alışveriş</Link>
        <Link className='font-semibold text-gray-600'>Bilgi Güvenliği Politikası</Link>
    </div>
  )
}

export default LinkGorup