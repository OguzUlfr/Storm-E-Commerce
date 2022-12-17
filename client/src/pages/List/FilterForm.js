import React from 'react'
import {BiSearch} from 'react-icons/bi'

const FilterForm = ({title,data}) => {
  return (
    <form className=' border-none'>
        <div className=' w-48 border-2 h-64 my-3 rounded-xl p-2 px-3'>
            <div className='w-full p-1 text-sm font-bold text-black text-opacity-70'>{title}</div>
            <div className='flex py-1 relative items-center text-gray-800'>
                <input placeholder='Filter' className='w-full text-sm font-semibold p-[6px] px-3 bg-gray-300 rounded-full'/>
                <BiSearch size={20} className='absolute right-2'/>
            </div>
            <div className='flex flex-col py-2 h-2/3 select-none px-1 overflow-y-scroll new-scroll'>
                <label className='flex items-center mb-2 '><input type='checkbox' className='mr-4 checked:bg-main-orange checked:border-main-orange appearance-none w-4 h-4 border-[2px] border-gray-400 rounded'/>Nike</label>
                <label className='flex items-center mb-2 '><input type='checkbox' className='mr-4 checked:bg-main-orange checked:border-main-orange appearance-none w-4 h-4 border-[2px] border-gray-400 rounded'/>Nike</label>
                <label className='flex items-center mb-2 '><input type='checkbox' className='mr-4 checked:bg-main-orange checked:border-main-orange appearance-none w-4 h-4 border-[2px] border-gray-400 rounded'/>Nike</label>
                <label className='flex items-center mb-2 '><input type='checkbox' className='mr-4 checked:bg-main-orange checked:border-main-orange appearance-none w-4 h-4 border-[2px] border-gray-400 rounded'/>Nike</label>
                <label className='flex items-center mb-2 '><input type='checkbox' className='mr-4 checked:bg-main-orange checked:border-main-orange appearance-none w-4 h-4 border-[2px] border-gray-400 rounded'/>Nike</label>
                <label className='flex items-center mb-2 '><input type='checkbox' className='mr-4 checked:bg-main-orange checked:border-main-orange appearance-none w-4 h-4 border-[2px] border-gray-400 rounded'/>Nike</label>
                <label className='flex items-center mb-2 '><input type='checkbox' className='mr-4 checked:bg-main-orange checked:border-main-orange appearance-none w-4 h-4 border-[2px] border-gray-400 rounded'/>Nike</label>
                <label className='flex items-center mb-2 '><input type='checkbox' className='mr-4 checked:bg-main-orange checked:border-main-orange appearance-none w-4 h-4 border-[2px] border-gray-400 rounded'/>Nike</label>
                <label className='flex items-center mb-2 '><input type='checkbox' className='mr-4 checked:bg-main-orange checked:border-main-orange appearance-none w-4 h-4 border-[2px] border-gray-400 rounded'/>Nike</label>
                <label className='flex items-center mb-2 '><input type='checkbox' className='mr-4 checked:bg-main-orange checked:border-main-orange appearance-none w-4 h-4 border-[2px] border-gray-400 rounded'/>Nike</label>
                <label className='flex items-center mb-2 '><input type='checkbox' className='mr-4 checked:bg-main-orange checked:border-main-orange appearance-none w-4 h-4 border-[2px] border-gray-400 rounded'/>Nike</label>
                <label className='flex items-center mb-2 '><input type='checkbox' className='mr-4 checked:bg-main-orange checked:border-main-orange appearance-none w-4 h-4 border-[2px] border-gray-400 rounded'/>Nike</label>
                <label className='flex items-center mb-2 '><input type='checkbox' className='mr-4 checked:bg-main-orange checked:border-main-orange appearance-none w-4 h-4 border-[2px] border-gray-400 rounded'/>Nike</label>
            </div>
        </div>
    </form>
  )
}

export default FilterForm