import React from 'react'
import { useState } from 'react'
import {IoIosMail, IoLogoGoogleplus} from 'react-icons/io'
import {RiKeyFill} from 'react-icons/ri'
import {ImCheckboxUnchecked, ImCheckboxChecked} from 'react-icons/im'
import {FaLightbulb} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Index = () => {
    const [checkDisplay,setCheckDisplay] = useState(false);
  return (
    <div className=' w-1/4 h-5/6 flex rounded-2xl overflow-hidden flex-col bg-gray-300'>
            <div className='w-full h-2/6 flex justify-center items-center rounded-bl-[140px] bg-main-orange'>
                <img className='h-32' src={process.env.PUBLIC_URL + '/logo.png'} alt=''/>
            </div>
            <form className='w-full h-2/5 flex flex-col justify-evenly items-center'>
                <label className='w-2/3 flex relative items-center'>
                    <IoIosMail className='absolute left-3 text-gray-600' size={30}/>
                    <input className='w-full p-2 pl-14 rounded-full text-base font-bold text-gray-600' placeholder='you@example.com'/>
                </label>
                <label className='w-2/3 flex relative items-center'>
                    <RiKeyFill className='absolute left-3 text-gray-600' size={30}/>
                    <input type='password' className='w-full p-2 pl-14 rounded-full text-base font-bold text-gray-600' placeholder='*********'/>
                </label>
                <div className='w-2/3 flex justify-between items-center'>
                    <label className='flex gap-1 items-center text-sm select-none font-semibold cursor-pointer text-gray-600 hover:text-gray-800'>
                        <input type='checkbox' className='hidden' onChange={() => setCheckDisplay(checkDisplay => checkDisplay ? false : true)}/>
                        {checkDisplay 
                        ?<ImCheckboxChecked className='text-main-orange'/>
                        :<ImCheckboxUnchecked className='text-main-orange'/>
                        }
                        Remember Me
                    </label>
                    <label className='flex items-center text-sm font-semibold cursor-pointer px-2 text-gray-600 hover:text-gray-800 border-b border-b-gray-600'>
                        <FaLightbulb className='text-main-orange'/>
                        Forgot Password
                    </label>
                </div>
                <button className='w-2/3 bg-main-orange rounded-full p-2 font-bold text-xl text-white'>SIGN IN</button>
            </form>
            <div className='flex items-center w-2/3 mx-auto'>
                <span className='w-full h-1 bg-gray-600 rounded-md'></span>
                <p className='px-3 font-bold text-gray-700'>OR</p>
                <span className='w-full h-1 bg-gray-600 rounded-md'></span>
            </div>
            <button className='w-2/3 mx-auto flex items-center mt-10 justify-center bg-main-green p-3 font-bold text-white rounded-full'>
                <IoLogoGoogleplus className='mr-6' size={28}/>
                GOOGLE ACCOUNT
            </button>
            <span className='relative left-1/2 flex gap-3 -translate-x-1/2 mt-16 bottom-2 text-gray-600 font-semibold w-fit px-4'>Don't have an account ?
                <Link className='text-main-orange'>Sign Up</Link>
            </span>
        </div>
  )
}

export default Index