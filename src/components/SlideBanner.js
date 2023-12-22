import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow, Pagination} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "../styles/slidebanner.scss";

function SlideBanner({list, addClass}){

    return (
        <Swiper
            className={addClass ? addClass : ''}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 80,
                modifier: 1,
                slideShadows: false,
            }}
            allowTouchMove
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
        >
            {list.map((item, idx) =>
                <SwiperSlide key={idx}>
                    <div className="txt-con">
                        <p className="desc">{item.desc}</p>
                        <h3 className="tit">{item.tit}</h3>
                    </div>
                    <div className="img-con">
                        <img src={`/resource/img/contents/${item.img}`} alt="" />
                    </div>
                </SwiperSlide>
            )}
        </Swiper>
    )
}

export default SlideBanner;