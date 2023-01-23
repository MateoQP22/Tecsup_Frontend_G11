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
            {heroProducts.map((element) => {
                const { nombre, slug, subcategoria, marca, imagen } = element.attributes;
                return (
                    <SwiperSlide
                        key={element.id}
                        tag='section'
                        // zoom={true}
                        className='section hero d-flex a-items-center'
                        style={{
                            // backgroundImage: `linear-gradient(to right, var(--light-primary-shadow-color), var(--light-secondary-shadow-color)), url(${imagen.data[0].attributes.url})`
                            backgroundImage: `url(${imagen.data[0].attributes.url})`
                        }}
                    >
                        <div className="container container--hero">
                            <div className="card card--hero">
                                <div className="card__body card__body--hero">
                                    <h2 className="card__title card__title--hero">{nombre}</h2>
                                    <h3 className="card__subtitle card__subtitle--hero">{marca.data[0].attributes.nombre} I {subcategoria.data.attributes.nombre}</h3>
                                    {/* <Link to={`/productos/${slug}`} className="button button--primary">Ver más</Link> */}
                                    <Link to={`/`} className="button button--primary">Ver más</Link> 
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default HomeHero