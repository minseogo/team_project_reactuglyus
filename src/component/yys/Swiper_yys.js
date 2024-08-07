import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../../css/yys.css';
import { Pagination, Autoplay } from 'swiper/modules';
import swiperdb from '../../data/swiper_yys.json';
import { Link } from 'react-router-dom';

const Swiper_yys = (props) => {
  const { slides } = swiperdb;
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getBackgroundImage = (slide) => {
    if (screenSize > 768) {
      return slide.b_img;
    } else {
      return slide.m_img;
    }
  };

  return (
    <>
      <div id="yswiper" className="swiper-container section_blank">
        <div className="main_caver">
          <div className="swiper ov mySwiper">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 650000,
                disableOnInteraction: false,
              }}
              breakpoints={{

                1440: {
                  slidesPerView: 1.35,
                  spaceBetween: 16,
                }
              }}
              pagination={{
                el: '.swiper-pagination',
                clickable: true,
              }}
            >
              {slides.map((v, i) => (
                <SwiperSlide key={i}>
                  <div 
                    className="bs sm-md-3" 
                    style={{ 
                      background: `url(${getBackgroundImage(v)}) center/ cover`
                    }}
                  >
                    <Link to={v.href} className='w-100 h-100 d-block'></Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className='swiper-pagination'></div>
      </div>
    </>
  );
};

export default Swiper_yys;
