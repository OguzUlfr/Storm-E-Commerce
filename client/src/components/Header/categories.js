import React from 'react'
import { Link } from 'react-router-dom'

function categories() {
  return (
    <div className='w-11/12 mx-auto flex justify-between py-2'>
        <Link className='ease-in duration-300 p-2 px-8 text-lg text-opacity-60 text-black font-bold border-b-2 border-b-transparent hover:border-b-main-green'>Women</Link>
        <Link className='ease-in duration-300 p-2 px-8 text-lg text-opacity-60 text-black font-bold border-b-2 border-b-transparent hover:border-b-main-green'>Men</Link>
        <Link className='ease-in duration-300 p-2 px-8 text-lg text-opacity-60 text-black font-bold border-b-2 border-b-transparent hover:border-b-main-green'>Kids</Link>
        <Link className='ease-in duration-300 p-2 px-8 text-lg text-opacity-60 text-black font-bold border-b-2 border-b-transparent hover:border-b-main-green'>Brands</Link>
        <Link className='ease-in duration-300 p-2 px-8 text-lg text-opacity-60 text-black font-bold border-b-2 border-b-transparent hover:border-b-main-green'>New Season</Link>
        <Link className='ease-in duration-300 p-2 px-8 text-lg text-opacity-60 text-black font-bold border-b-2 border-b-transparent hover:border-b-main-green'>Trends</Link>
        <Link className='ease-in duration-300 p-2 px-8 text-lg text-opacity-60 text-black font-bold border-b-2 border-b-transparent hover:border-b-main-green'>Sport</Link>
        <Link className='ease-in duration-300 p-2 px-8 text-lg text-opacity-60 text-black font-bold border-b-2 border-b-transparent hover:border-b-main-green'>Classic</Link>
        <Link className='ease-in duration-300 p-2 px-8 text-lg text-opacity-60 text-black font-bold border-b-2 border-b-transparent hover:border-b-main-green'>Court Shoe</Link>
    </div>
  )
}

export default categories