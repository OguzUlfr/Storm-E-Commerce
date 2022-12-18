import React from 'react'
import {IoIosMail, IoLogoGoogleplus} from 'react-icons/io'
import {RiKeyFill} from 'react-icons/ri'
import {FaUserAlt, FaPhoneAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'


const index = () => {
  return (
        <div className=' w-1/4 h-[90%] flex rounded-2xl overflow-hidden relative flex-col bg-gray-300'>
            <div className='w-full h-2/6 flex justify-center items-center rounded-bl-[140px] bg-main-orange'>
                <img className='h-32' src={process.env.PUBLIC_URL + '/logo.png'} alt=''/>
            </div>
            <form className='w-full h-3/5 flex flex-col justify-evenly items-center'>
                <div className='w-2/3 flex gap-2'>
                    <label className='w-1/2 flex relative items-center'>
                        <FaUserAlt className='absolute left-3 text-gray-600' size={16}/>
                        <input className='w-full p-3 pl-10 rounded-full text-xs font-bold text-gray-600' placeholder='Name'/>
                    </label>
                    <label className='w-1/2 flex relative items-center'>
                        <FaUserAlt className='absolute left-3 text-gray-600' size={16}/>
                        <input className='w-full p-3 pl-10 rounded-full text-xs font-bold text-gray-600' placeholder='Surname'/>
                    </label>
                </div>
                <label className='w-2/3 flex relative items-center'>
                    <FaPhoneAlt className='absolute left-3 text-gray-600' size={20}/>
                    <input type='number' className='numberInput w-full p-2 pl-14 rounded-full text-base font-bold text-gray-600' placeholder='Phone Number'/>
                </label>
                <label className='w-2/3 flex relative items-center'>
                    <IoIosMail className='absolute left-3 text-gray-600' size={30}/>
                    <input className='w-full p-2 pl-14 rounded-full text-base font-bold text-gray-600' placeholder='you@example.com'/>
                </label>
                <label className='w-2/3 flex relative items-center'>
                    <RiKeyFill className='absolute left-3 text-gray-600' size={30}/>
                    <input type='password' className='w-full p-2 pl-14 rounded-full text-base font-bold text-gray-600' placeholder='*********'/>
                </label>
                <button className='w-2/3 bg-main-orange rounded-full p-2 font-bold text-xl text-white'>SIGN UP</button>
            </form>
            <div className='flex items-center w-2/3 mx-auto'>
                <span className='w-full h-1 bg-gray-600 rounded-md'></span>
                <p className='px-3 font-bold text-gray-700'>OR</p>
                <span className='w-full h-1 bg-gray-600 rounded-md'></span>
            </div>
            <button className='w-2/3 mx-auto flex items-center my-16 justify-center bg-main-green p-3 font-bold text-white rounded-full'>
                <IoLogoGoogleplus className='mr-6' size={28}/>
                GOOGLE ACCOUNT
            </button>
            <span className='relative left-1/2 flex gap-3 -translate-x-1/2 bottom-2 text-gray-600 font-semibold w-fit px-4'>
                Already a member ? 
                <Link className='text-main-orange'>Sign In</Link>
            </span>
        </div>
  )
}

export default index