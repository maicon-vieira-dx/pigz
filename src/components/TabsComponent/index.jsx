import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import style from './TabsComponent.module.css'

import { Navigation, Pagination } from "swiper";

import { Box } from "@mui/material";


export default function TabsComponent({GridBoxs}) {
  return (
    <>
      <Swiper
      modules={[Pagination, Navigation]}
      className={style.swiperCarousel}
      slidesPerView={1}
      pagination={{
        clickable: true,
        bulletClass: style.pagination,
        bulletActiveClass: style.paginationActive
      }}
      navigation={{
        nextEl: `.${style.swiperButtonNext}`,
        prevEl: `.${style.swiperButtonPrev}`,
        disabledClass: `${style.buttonDisable}`
      }}
      >
        {
          GridBoxs.map((item) => (
            <SwiperSlide className={style.swiperSlide} key={item.Title}>
              <div className="flex justify-center">
                <h4 className="text-2xl md:text-3xl font-bold md:mr-32 text-black py-10 md:pb-0">{item.Title}</h4>
              </div>
              <Box className="h-96 bg-orange relative rounded-lg" sx={{width: {xs: '98%', md: '30rem'}, borderRadius: '3rem'}}>
                <p className="text-white font-light md:font-normal p-5">{item.Paragraph}</p>
                <picture className="w-full h-full flex justify-center">
                  <img src={item.ImageMobile} className="absolute bottom-0" alt="Imagem mobile"/>
                </picture>
              </Box>
           </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
