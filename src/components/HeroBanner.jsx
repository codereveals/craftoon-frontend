"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="w-full text-white text-20 mx-auto">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="relative">
            <Image
              src={banner1}
              width={1200}
              height={400}
              className="w-full"
              alt=""
            />
            <Link
              href=""
              className="rounded-lg uppercase font-medium absolute md:left-[60%] md:top-[75%] bg-pink-500 shadow-md px-5 py-3 text-md"
            >
              Shop Now
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner2}
            width={1200}
            height={500}
            className="w-full"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner3}
            width={1200}
            height={500}
            className="w-full"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroBanner;
