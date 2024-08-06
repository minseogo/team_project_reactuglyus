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
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1400);

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth > 1400);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
                delay: 6500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 1.35,
                  spaceBetween: 0,
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
                    className="bs mx-md-3" 
                    style={{ 
                      background: `url(${isLargeScreen ? v.b_img : v.img}) center/ cover`
                    }}
                  >
                    <Link to={v.href} className='w-100 h-100'></Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='swiper-pagination'></div>
        </div>
      </div>
    </>
  );
};

export default Swiper_yys;
