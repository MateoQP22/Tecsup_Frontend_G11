import React from 'react'
import { A11y, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const HomeHero = ({ heroProducts }) => {
    return (
        <Swiper
            tag='section'
            wrapperTag='aside'
            className='hero'
            modules={[A11y, Navigation, Pagination]}    
            autoplay={{delay:5000}}
            navigation  
            pagination={{clickable:true}}
            preloadImages={false}
        >
            {heroProducts.map((element)=>{
                const {nombre} = element.attributes;
                return(
                    <SwiperSlide
                    key={element.id}
                    tag='section'
                    style={{
                        backgroundImage: `url()`
                    }}
                    >Slide 1</SwiperSlide>
                );
            }
            
            )}
        </Swiper>
    )
}

export default HomeHero