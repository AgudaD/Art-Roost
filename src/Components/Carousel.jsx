import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper";
import chino15 from "../assets/chino15.jpg";
import chino45 from "../assets/chino45.jpg";
import chino47 from "../assets/chino47.jpg";
import chino55 from "../assets/chino55.jpg";
import chino61 from "../assets/chino61.jpg";
import art1 from "../assets/art1.png";
import art3 from "../assets/art3.png";
import art4 from "../assets/art4.png";
import cancel from "../assets/cancel.svg";

const Carousel = () => {
  return (
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
        className="w-full px-8 py-6 mt-20  cursor-pointer "
      >
        <div className="flex justify-center items-center gap-12">
          <SwiperSlide>
            <img src={art1} alt="" className="w-auto h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={art3} alt="" className="w-auto h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={art4} alt="" className="w-auto h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={chino15} alt="" className="w-auto h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={chino45} alt="" className="w-auto h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={chino47} alt="" className="w-auto h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={chino55} alt="" className="w-auto h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={chino61} alt="" className="w-auto h-80" />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
