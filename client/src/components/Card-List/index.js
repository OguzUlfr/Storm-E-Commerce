import React from 'react'
import { Link } from 'react-router-dom';
import {IoMdArrowDropright} from 'react-icons/io'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


function index() {
  return (
    <div className='my-8'>
        <div className='p-2 w-full flex justify-between'>
            <span className='font-bold text-lg'>Test</span>
            <span className='font-semibold opacity-60 hover:opacity-80 cursor-pointer flex items-center gap-3'>Tümü<IoMdArrowDropright size={24}/></span>
        </div>
        <div className=' py-10 px-2 select-none'>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 120,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 100,
          },
          1240: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1560: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1680: {
            slidesPerView: 6,
            spaceBetween: 24,
          }
        }}
        className="mySwiper h-[340px] !important"
        >
          <SwiperSlide className='border-2 min-w-[240px] h-[340px] rounded-md overflow-hidden'>
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
                  <div className='w-full h-full flex items-center justify-center hover:hidden absolute bg-main-green'>196 TL</div>
                  <div className='w-full h-full flex items-center justify-center text-xs'>SEPETE EKLE</div>
                </button>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}

export default index