import React from 'react'
import {IoMdArrowDropright} from 'react-icons/io'
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from '../Product-Card'
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
          <SwiperSlide>
            <ProductCard/>
          </SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}

export default index