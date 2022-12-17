import React from 'react'
import { useState } from 'react'
import {MdDeleteOutline} from 'react-icons/md'
import {RiAddLine, RiSubtractLine} from 'react-icons/ri'

const Index = () => {
    const [value,setValue] = useState(1);
  return (
    <div className=' w-11/12 border rounded-xl my-3 overflow-hidden select-none'>
        <div className='w-full p-2 px-4 font-semibold bg-main-green bg-opacity-70 text-white'>Kategori : <span className='text-main-orange'>Erkek</span></div>
        <div className='w-full py-2 px-4 flex items-center'>
            <input type='checkbox' className='w-5 h-5'/>
            <div className=' w-32 h-32 m-4 bg-red-500 rounded-lg'/>
            <div className=' w-2/5 h-32 flex flex-col justify-between'>
                <div className='w-full p-1 text-base text-gray-600 font-semibold select-text'>
                    Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz.
                </div>
                <div className='w-full text-lg text-main-green font-semibold p-2 select-none'>Huawei</div>
            </div>
            <MdDeleteOutline size={50} className='text-gray-500 cursor-pointer hover:text-main-orange mr-10'/>
            <RiSubtractLine size={32} className='bg-gray-200 text-main-green hover:bg-main-green hover:text-main-orange cursor-pointer p-1 rounded-l-md' onClick={() => setValue(value => value -= 1)}/>
            <input type='number' value={value || 0} onChange={e => setValue(e.target.value)} className=' text-gray-600 w-14 bg-gray-100 text-center font-bold text-2xl numberInput' min='0'/>
            <RiAddLine size={32} className='bg-gray-200 text-main-green hover:bg-main-green hover:text-main-orange cursor-pointer p-1 rounded-r-md'
             onClick={() => setValue(value => value += 1)}/>
            <div className='text-2xl font-bold text-main-orange ml-10'>5.666 TL</div>
        </div>
    </div>
  )
}

export default Index