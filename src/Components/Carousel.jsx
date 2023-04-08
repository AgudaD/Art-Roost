import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import chino15 from "../assets/chino15.jpg";
import chino45 from "../assets/chino45.jpg";
import chino47 from "../assets/chino47.jpg";
import chino55 from "../assets/chino55.jpg";
import chino61 from "../assets/chino61.jpg";
import art1 from "../assets/art1.png";
import art4 from "../assets/art4.png";
import cancel from "../assets/cancel.svg";

const Carousel = () => {
  return (
    <div className="bg-[#849E8F] p-2">
      <Link to="/">
        <div className="absolute top-6 right-10 p-2 flex justify-center items-center bg-white rounded-full md:top-8 md:right-14">
          <img src={cancel} alt="" className="w-3 h-auto" />
        </div>
      </Link>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
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
        className="w-full px-4 py-6 mt-20  cursor-pointer "
      >
        <div className="flex justify-center items-center gap-12">
          <SwiperSlide>
            <img loading="lazy" src={art1} alt="" className="w-[300px] h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={art4} alt="" className="w-[300px] h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={chino15} alt="" className="w-[300px] h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={chino45} alt="" className="w-[300px] h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={chino47} alt="" className="w-[300px] h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={chino55} alt="" className="w-[300px] h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={chino61} alt="" className="w-[300px] h-80" />
          </SwiperSlide>
        </div>
      </Swiper>

      <div className="flex flex-col justify-center items-center mt-7 text-white">
        <p className="text-[#F0EAE5] font-helvetica uppercase">Artist</p>
        <p className="mt-2 text-3xl font-adobe italic">Paschal Ugwu</p>
      </div>
    </div>
  );
};

export default Carousel;
