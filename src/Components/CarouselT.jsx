import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper";
import art2 from "../assets/art2.png";
import art5 from "../assets/art5.png";
import chino19 from "../assets/chino19.jpg";
import chino25 from "../assets/chino25.jpg";
import chino29 from "../assets/chino29.jpg";
import chino37 from "../assets/chino37.jpg";
import cancel from "../assets/cancel.svg";


const CarouselT = () => {
  return(
    <div className="bg-[#849E8F] p-2">
      <Link to="/">
        <div className="absolute top-6 right-6 p-1 flex justify-center items-center bg-white rounded-full">
          <img src={cancel} alt="" />
        </div>
      </Link>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={2}
        slidesPerView={"1"}
        effect={"fade"}
        onSwiper={(swiper) => swiper}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        speed={1500}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="w-full px-8 py-6 mt-20 cursor-pointer "
      >
        <div className="flex justify-center items-center gap-12">
          <SwiperSlide>
            <img src={art2} alt="" className="w-auto h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={art5} alt="" className="w-auto h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={chino19} alt="" className="w-auto h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={chino25} alt="" className="w-auto h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={chino29} alt="" className="w-auto h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={chino37} alt="" className="w-auto h-80" />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}

export default CarouselT