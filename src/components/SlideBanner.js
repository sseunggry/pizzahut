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
            {list.map(({desc, tit, img}, idx) =>
                <SwiperSlide key={idx}>
                    <div className="txt-con">
                        <p className="desc">{desc}</p>
                        <h3 className="tit">{tit}</h3>
                    </div>
                    <div className="img-con">
                        <img src={`/resource/img/contents/${img}`} alt="" />
                    </div>
                </SwiperSlide>
            )}
        </Swiper>
    )
}

export default SlideBanner;