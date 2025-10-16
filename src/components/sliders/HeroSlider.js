import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper';
import PropTypes from 'prop-types';
import { displayMoney } from '../../helpers/utils';
import productsData from '../../data/productsData';

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';

/**
 * Hero slider component displaying featured products
 * @returns {React.ReactElement} HeroSlider component
 */
const HeroSlider = () => {
    // Filter products tagged as hero products
    const heroProducts = productsData.filter(item => item.tag === 'hero-product');

    return (
        <Swiper
            modules={[Pagination, A11y, Autoplay]}
            loop={true}
            speed={400}
            spaceBetween={100}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
        >
            {heroProducts.map((item, i) => {
                const { 
                    id, 
                    title, 
                    tagline, 
                    heroImage, 
                    finalPrice, 
                    originalPrice, 
                    path 
                } = item;
                
                const newPrice = displayMoney(finalPrice);
                const oldPrice = displayMoney(originalPrice);

                return (
                    <SwiperSlide
                        key={id}
                        className={`wrapper hero_wrapper hero_slide-${i}`}
                    >
                        <div className="hero_item_txt">
                            <h3>{title}</h3>
                            <h1>{tagline}</h1>
                            <h2 className="hero_price">
                                {newPrice} &nbsp;
                                <small><del>{oldPrice}</del></small>
                            </h2>
                            <Link to={`${path}${id}`} className="btn">
                                Shop Now
                            </Link>
                        </div>
                        <figure className="hero_item_img">
                            <img src={heroImage} alt={title} />
                        </figure>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

HeroSlider.propTypes = {
    // No props currently, but adding PropTypes definition for future extensibility
};

export default HeroSlider;