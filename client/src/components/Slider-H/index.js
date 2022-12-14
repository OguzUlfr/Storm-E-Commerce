// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";


function index() {
  return (
    <>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-red-700"><div className=" h-80"></div></SwiperSlide>
        <SwiperSlide className="bg-red-700"><div className=" h-80"></div></SwiperSlide>
        <SwiperSlide className="bg-red-700"><div className=" h-80"></div></SwiperSlide>
        <SwiperSlide className="bg-red-700"><div className=" h-80"></div></SwiperSlide>
        <SwiperSlide className="bg-red-700"><div className=" h-80"></div></SwiperSlide>
        <SwiperSlide className="bg-red-700"><div className=" h-80"></div></SwiperSlide>
        <SwiperSlide className="bg-red-700"><div className=" h-80"></div></SwiperSlide>
        <SwiperSlide className="bg-red-700"><div className=" h-80"></div></SwiperSlide>
        <SwiperSlide className="bg-red-700"><div className=" h-80"></div></SwiperSlide>
      </Swiper>
    </>
  );
}

export default index