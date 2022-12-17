import React from 'react'
import { Link } from 'react-router-dom'
import {BsBagPlusFill} from 'react-icons/bs'

const index = () => {
  return (
    <div className='border-2 w-[240px] h-[340px] rounded-md overflow-hidden hover:scale-105 transition-all'>
        <Link className='w-full h-full'>
              <div className='w-full h-40 bg-cover bg-center bg-no-repeat' style={{backgroundImage: "url('https://sneakernews.com/wp-content/uploads/2022/09/nike-air-force-1-low-black-white-dv0788-001-8.jpg')"}}></div>
              <div className='w-full p-3 px-4 flex flex-wrap items-center'>
                <h2 className='w-full text-sm font-bold opacity-70 mb-6'>Nike Erkek Parka M Nk Syn Fl Rpl PARK20 Sdf Jkt CW6156</h2>
                <h4 className='w-2/4 py-1 font-bold opacity-80 '>U.S. Polo</h4>
                <span className='w-2/4 h-8 text-sm flex items-center justify-end font-bold opacity-80 relative'>
                  <span>299 TL</span>
                  <div className='w-8 h-[2px] bg-red-500 absolute z-10 right-1 -rotate-45'></div>
                </span>
                <div className='w-2/4  flex gap-1 py-3'>
                  <div className='bg-blue-500 rounded-full w-7 h-7'></div>
                  <div className='bg-red-500 rounded-full w-7 h-7'></div>
                  <div className='bg-gray-500 rounded-full w-7 h-7 flex text-sm items-center justify-center font-bold text-white'>+3</div>
                </div>
                <button className='w-2/4 bg-main-green text-xl font-bold text-white h-10 rounded-lg relative overflow-hidden'>
                  <div className='w-full h-full flex items-center justify-center hover:hidden absolute z-10 bg-main-green'>196 TL</div>
                  <BsBagPlusFill className='w-full h-full flex items-center justify-center text-xs p-2'/>
                </button>
              </div>
            </Link>
    </div>
  )
}

export default index