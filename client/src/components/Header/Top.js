import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {MdLocationPin} from 'react-icons/md'
import {RiShoppingBagFill} from 'react-icons/ri'
import {FaUserAlt} from 'react-icons/fa'

function Top() {
  return (
    <div className=' w-11/12 h-20 mx-auto flex items-center justify-between'>
        <div className='flex'>
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt='' className=' h-[72px]'/>
            <span className='h-[72px] px-10 text-4xl flex items-center justify-center font-bold opacity-60'>Storm</span>
        </div>
        <div className='flex relative items-center'>
            <input placeholder='Product or Brand Search' className='border-b-2 border-b-stone-400 text-stone-600 font-medium p-2 px-3 w-[360px] focus:w-[480px] transition-all'/>
            <BiSearch size={46} className='p-1 text-main-green cursor-pointer hover:scale-110'/>
        </div>
        <div className='flex gap-2'>
            <div className='flex items-center justify-center gap-2 text-sm font-bold border-b-2 border-b-transparent hover:border-b-main-orange cursor-pointer px-4 py-2'>
                <MdLocationPin size={26} className='text-main-orange'/><span className=' opacity-70'>Location</span>
            </div>
            <div className='flex items-center justify-center gap-2 text-sm font-bold border-b-2 border-b-transparent hover:border-b-main-orange cursor-pointer px-4 py-2'>
                <RiShoppingBagFill size={26} className='text-main-orange'/><span className=' opacity-70'>Card</span>
            </div>
            <div className='flex items-center justify-center gap-2 text-sm font-bold border-b-2 border-b-transparent hover:border-b-main-orange cursor-pointer px-4 py-2'>
                <FaUserAlt size={24} className='text-main-orange'/><span className=' opacity-70'>User</span>
            </div>
        </div>
    </div>
  )
}

export default Top