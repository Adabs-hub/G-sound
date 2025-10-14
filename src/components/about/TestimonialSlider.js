import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import Testimonial from './Testimonial';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialSlider = () => {
    const testimonials = [
        {
            id: 1,
            name: "Alex Thompson",
            image: "/images/testimonials/alex.jpg",
            text: "G-Sound's expert advice helped me find the perfect guitar. Their knowledge and service are unmatched!",
            rating: 5
        },
        {
            id: 2,
            name: "Emma Davis",
            image: "/images/testimonials/emma.jpg",
            text: "Outstanding selection of professional audio equipment. The team's expertise made my studio setup a breeze.",
            rating: 5
        },
        {
            id: 3,
            name: "Marcus Chen",
            image: "/images/testimonials/marcus.jpg",
            text: "Best music store I've ever visited. Their after-sales support is exceptional!",
            rating: 4
        }
    ];

    return (
        <div className="testimonial-slider">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {testimonials.map(testimonial => (
                    <SwiperSlide key={testimonial.id}>
                        <Testimonial {...testimonial} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialSlider;