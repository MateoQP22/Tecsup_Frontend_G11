import React from 'react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const HomeHero = ({ heroProducts }) => {
    return (
        <Swiper
            modules = {[Navigation,Pagination,Scrollbar,A11y]}
            spaceBetwenn= {50}
        >
        </Swiper>
    )
}

export default HomeHero