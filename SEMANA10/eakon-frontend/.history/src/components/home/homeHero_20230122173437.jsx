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
                    <SwiperSlide
                        key={element.id}
                        tag='section'
                        zoom={true}
                        className='hero'
                        style={{
                            backgroundImage: `url(${imagen.data[0].attributes.url})`
                        }}
                    >
                        <div className="container">
                            <div className="card card--hero">
                                <h2 className="card__title card__title--hero"></h2>
                            </div>
                        </div>
                    </SwiperSlide>
                ); 
            })}
            </Swiper>
                );
            };

export default HomeHero