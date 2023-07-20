import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import TestimonialImage01 from '../images/testimonial-01.jpg';
import TestimonialImage02 from '../images/testimonial-02.jpg';
import chevlog from '../images/Chevrolet-Logo.png';
import hyndlog from '../images/Hyundai-logo.png';
import volklog from '../images/volkswagen-logo.png';
import fiatlog from '../images/fiat-logo.png';
import hondalog from '../images/honda-logo.png';
import mazdalog from '../images/mazda-logo.png';
import nissanlog from '../images/nissan-logo.png';
import peugotlog from '../images/peugot-logo.jpg';
import kialog from '../images/kia-logo.png';
import renlog from '../images/renault-log.jpg';
import toylog from '../images/toyota-log.png';
import suzlog from '../images/suzuki-logo.png';
import fordlog from '../images/ford-logo.png';



function Carousel() {

  const containerStyle = {
    width: '100%',
    height: '100%',
    marginLeft: '8%',
    marginRight: '1%',
  };

  return (
    <div>
      <h1 className="h2 mb-10 text-center"> Marcas con las que trabajamos</h1>
      <div style={containerStyle}>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
        /* onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')} */

        >
          <SwiperSlide> <img src={chevlog} alt="slide_image" style={{ width: '50%' }} /></SwiperSlide>
          <SwiperSlide> <img src={hyndlog} alt="slide_image" style={{ width: '40%' }} /></SwiperSlide>
          <SwiperSlide> <img src={volklog} alt="slide_image" style={{ width: '30%' }} /></SwiperSlide>
          <SwiperSlide> <img src={fiatlog} alt="slide_image" style={{ width: '40%' }} /></SwiperSlide>
          <SwiperSlide> <img src={hondalog} alt="slide_image" style={{ width: '40%' }} /></SwiperSlide>
          <SwiperSlide> <img src={mazdalog} alt="slide_image" style={{ width: '50%' }} /></SwiperSlide>
          <SwiperSlide> <img src={nissanlog} alt="slide_image" style={{ width: '35%' }} /></SwiperSlide>
          <SwiperSlide> <img src={peugotlog} alt="slide_image" style={{ width: '30%' }} /></SwiperSlide>
          <SwiperSlide> <img src={kialog} alt="slide_image" style={{ width: '50%' }} /></SwiperSlide>
          <SwiperSlide> <img src={renlog} alt="slide_image" style={{ width: '40%' }} /></SwiperSlide>
          <SwiperSlide> <img src={toylog} alt="slide_image" style={{ width: '50%' }} /></SwiperSlide>
          <SwiperSlide> <img src={suzlog} alt="slide_image" style={{ width: '40%' }} /></SwiperSlide>
          <SwiperSlide> <img src={fordlog} alt="slide_image" style={{ width: '50%' }} /></SwiperSlide>

        </Swiper>
      </div>
    </div>

  )
}

export default Carousel