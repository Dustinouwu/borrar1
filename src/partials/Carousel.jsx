import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import TestimonialImage01 from '../images/testimonial-01.jpg';
import TestimonialImage02 from '../images/testimonial-02.jpg';
import TestimonialImage03 from '../images/testimonial-03.jpg';

function Carousel() {

    return (
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        grabCursor={true}
        slidesPerView={5}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide> <img src={TestimonialImage01} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={TestimonialImage01} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={TestimonialImage01} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={TestimonialImage01} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={TestimonialImage01} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={TestimonialImage01} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={TestimonialImage01} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={TestimonialImage01} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={TestimonialImage01} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={TestimonialImage01} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={TestimonialImage01} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={TestimonialImage01} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={TestimonialImage01} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={TestimonialImage01} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={TestimonialImage01} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={TestimonialImage01} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={TestimonialImage01} alt="slide_image" /></SwiperSlide>
        <SwiperSlide> <img src={TestimonialImage01} alt="slide_image" /></SwiperSlide>
        
        ...
      </Swiper>

    )
}

export default Carousel