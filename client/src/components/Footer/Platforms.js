import React from 'react'
import { Link } from 'react-router-dom'
import {ImAndroid, ImAppleinc} from 'react-icons/im'
import { FaYoutube, FaInstagram, FaFacebookF, FaTwitter} from 'react-icons/fa'

const Platforms = () => {
  return (
    <div className='flex flex-col p-6 gap-7'>
        <h5 className=' text-3xl font-bold text-gray-600 mb-4'>Mobil Uygulama</h5>
        <div className='flex justify-between items-center gap-2'>
            <Link className=' p-2 bg-gray-300 rounded-md flex items-center justify-between'>
                <ImAndroid size={36} className='text-main-orange'/>
                <span className='h-full w-[100px] px-z font-extrabold text-xs text-center text-gray-800'>ANDROID İÇİN <p className='tracking-wider text-md'>İNDİR</p></span>
            </Link>
            <Link className=' p-2 bg-gray-300 rounded-md flex items-center justify-between'>
                <ImAppleinc size={36} className='text-main-orange'/>
                <span className='h-full w-[100px] px-z font-extrabold text-xs text-center text-gray-800'>IPHONE İÇİN <p className=' tracking-wider text-md'>İNDİR</p></span>
            </Link>
        </div>
        <h5 className=' text-3xl font-bold text-gray-600 my-4'>Sosyal Medya</h5>
        <div className='flex items-center gap-2'>
            <Link className='bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center text-gray-800'><FaYoutube size={30}/></Link>
            <Link className='bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center text-gray-800'><FaInstagram size={30}/></Link>
            <Link className='bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center text-gray-800'><FaFacebookF size={30}/></Link>
            <Link className='bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center text-gray-800'><FaTwitter size={30}/></Link>
        </div>
    </div>
  )
}

export default Platforms