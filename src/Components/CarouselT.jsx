import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper";
import art2 from "../assets/art2.png";
import art6 from "../assets/art6.png";
import chino19 from "../assets/chino19.jpg";
import chino25 from "../assets/chino25.jpg";
import chino29 from "../assets/chino29.jpg";
import chino37 from "../assets/chino37.jpg";
import cancel from "../assets/cancel.svg";

const CarouselT = () => {
  return (
    <div className="bg-[#849E8F] p-2">
      <Link to="/">
        <div className="absolute top-6 right-10 p-2 flex justify-center items-center bg-white rounded-full md:top-8 md:right-14">
          <img src={cancel} alt="" className="w-3 h-auto" />
        </div>
      </Link>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={"1"}
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
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="w-full px-4 py-6 mt-24 cursor-pointer "
      >
        <div className="flex justify-center items-center gap-12">
          <SwiperSlide>
            <img src={art2} alt="" className="w-[300px] h-80 -rotate-3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={art2} alt="" className="w-[300px] h-80 -rotate-3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={art2} alt="" className="w-[300px] h-80 -rotate-3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={chino19} alt="" className="w-[300px] h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={chino25} alt="" className="w-[300px] h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={chino37} alt="" className="w-[300px] h-80" />
          </SwiperSlide>
        </div>
      </Swiper>

      <div className="flex flex-col justify-center items-center mt-5 text-white">
        <p className="font-helvetica capitalize">Artist</p>
        <p className="text-3xl font-adobe">Oluwatobiloba Fasalejo</p>
      </div>
    </div>
  );
};

export default CarouselT;
