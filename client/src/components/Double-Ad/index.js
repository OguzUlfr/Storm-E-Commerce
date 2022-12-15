import React from 'react'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div className='w-11/12 mx-auto my-16 h-[460px] rounded-3xl flex overflow-hidden'>
        <div className='w-1/2 bg-blue-400 h-full relative bg-center bg-no-repeat bg-cover' style={{backgroundImage: "url('https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shoes-craze-sale-facebook-ad-design-template-b1d1738fd5e9e0f6e3152ec502a1c2e1_screen.jpg')"}}>
            <Link className='absolute text-xl bottom-10 left-2/4 bg-gray-600 p-2 px-14 rounded-xl font-bold text-white -translate-x-1/2 hover:scale-105'>MORE
            </Link>
        </div>
        <div className='w-1/2 bg-blue-400 h-full relative bg-center bg-no-repeat bg-cover' style={{backgroundImage: "url('https://renswoudenbergib.files.wordpress.com/2012/03/soccershit3.png')"}}>
            <Link className='absolute text-xl bottom-10 left-2/4 bg-gray-600 p-2 px-14 rounded-xl font-bold text-white -translate-x-1/2 hover:scale-105'>MORE
            </Link>
        </div>
    </div>
  )
}

export default index