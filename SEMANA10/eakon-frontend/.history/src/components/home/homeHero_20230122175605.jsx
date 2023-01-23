import React from 'react';
import { Link} from 'react-router-dom'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


const HomeHero = ({ heroProducts }) => {
    return (
        <Swiper
            tag='section'
            wrapperTag='div'
            //className='hero'
            modules={[Navigation, Autoplay, Pagination, A11y]}
            loop
            navigation
            pagination={{ clickable: true }}
            preloadImages={false}
        >
           1
        </Swiper>
    );
};

export default HomeHero