import React from 'react';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


const HomeHero = ({ heroProducts }) => {
    return (
        <Swiper
            tag='section'
            wrapperTag='div'
            //className='hero'
            modules = {[Navigation,Autoplay, Pagination,Scrollbar,A11y]}
            spaceBetween= {50}
            slidesPerView={3}
            navigation
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={()=> console.log('slide change')}
        >
            <SwiperSlide>Swiper 1</SwiperSlide>
            <SwiperSlide>Swiper 2</SwiperSlide>
            <SwiperSlide>Swiper 3</SwiperSlide>
            <SwiperSlide>Swiper 4</SwiperSlide>
        </Swiper>
    )
}

export default HomeHero