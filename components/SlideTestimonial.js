import React from 'react'
import { Swiper, SwiperSlide }from 'swiper/react'
import { A11y, Controller, Navigation, Pagination, Scrollbar } from 'swiper';
import Style from '@/styles/SlideTestimonial.module.css'
import 'swiper/css';
import Image from 'next/image';

const dataTestimonial = [
  {
    img:'/people/cliente1.png',
    name:'Ronald Richards',
    text:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  },
  {
    img:'/people/cliente2.png',
    name:'Ronald Richards',
    text:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  },
  {
    img:'/people/cliente1.png',
    name:'Ronald Richards',
    text:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  },
  {
    img:'/people/cliente2.png',
    name:'Ronald Richards',
    text:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  }
]


export const SlideTestimonial = () => {
  return (
    <div className={Style.slide_container}>
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            900: {
              width: 900,
              slidesPerView: 2,
            },
          }}
          className={Style.swiper}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {
            dataTestimonial.map((slide, index) =>(
              <SwiperSlide className={Style.swiperSlide} key={index}>
                <div className={ Style.card_slide_active}>
                    <div className={Style.img_card}>
                      <Image
                        src={slide.img}
                        fill
                        alt={slide.name}
                      />
                    </div>
                    <div className={Style.text}>
                      <h4>{slide.name}</h4>
                      <p>{slide.text}</p>
                    </div>
                  </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
    </div>
    
  )
}
