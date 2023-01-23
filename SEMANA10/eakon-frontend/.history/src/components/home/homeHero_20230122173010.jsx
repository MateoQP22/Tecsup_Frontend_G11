import React from 'react';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


const HomeHero = ({ heroProducts }) => {
    return (
        <Swiper
            tag='section'
            wrapperTag='div'
            //className='hero'
            modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
            loop
            navigation
            pagination={{ clickable: true }}
            preloadImages={false}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {heroProducts.map((element) => {
                const { nombre, slug, subcategoria, marca, imagen } = element.attributes;
                return (
                    <SwiperSlide></SwiperSlide>
                        ); 
            })}
            </Swiper>
                );
            };

export default HomeHero