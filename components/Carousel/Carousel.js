import { useCallback, useRef } from 'react';
import { Box } from '@mui/system';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from "swiper";
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CarouselItem from './CarouselItem';
import { Grid } from "swiper";

import carousel from "../../styles/carousel.module.scss";

SwiperCore.use([Navigation]);

const Carousel = ({styleWrapper, category}) => {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

    const slides = category?.map((item, i) => (
        <SwiperSlide key={i} style={{merginRight: 0}}>
            <CarouselItem slide={item}/>
        </SwiperSlide>
    ))

    return (
        <Box className={styleWrapper}>
            <Box className={carousel.carousel__wrapper}>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1.5}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.5
                        }, 
                        480: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3.2,
                        },
                        991: {
                            slidesPerView: 4.3,
                        },
                    }}
                    
                >
                    {slides}
                </Swiper>

                <div 
                    ref={navigationPrevRef}
                    className={`${carousel.navigation} ${carousel.navigation__prev}`}
                > 
                    <ArrowBackIosNewIcon color="white"/>
                </div>
                <div 
                    ref={navigationNextRef}
                    className={`${carousel.navigation} ${carousel.navigation__next}`}
                > 
                    <ArrowForwardIosIcon color="white"/>
                </div>
            </Box>
        </Box>


    )
}
export default Carousel;