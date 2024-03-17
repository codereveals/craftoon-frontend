"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import banner1 from "../assets/banner1.jpg";
// import banner2 from "../assets/banner2.jpg";
// import banner3 from "../assets/banner3.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div className="text-white text-20 mx-auto">
      <Swiper
        spaceBetween={30}
        slidesPerView={6}
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
      >
        <SwiperSlide width={200} height={200}>
          <Link href="">
            <Image
              src="//cdn.pixabay.com/photo/2016/05/28/00/06/gift-1420830_1280.jpg"
              width={400}
              height={400}
              unoptimized
              className="h-[100px] mx-auto block w-[100px] rounded-[50%] shadow-md hover:bg-teal-200 object-cover max-w-auto"
              alt=""
            />
            <h3 className="text-sm text-slate-800 pt-3 mb-3 text-center">
              Anniversary
            </h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="">
            <Image
              src="//cdn.pixabay.com/photo/2016/05/28/00/06/gift-1420830_1280.jpg"
              width={400}
              height={400}
              unoptimized
              className="h-[100px] mx-auto block w-[100px] rounded-[50%] shadow-md hover:bg-teal-200 object-cover max-w-auto"
              alt=""
            />
            <h3 className="text-sm text-slate-800 pt-3 mb-3 text-center">
              Birthday
            </h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="">
            <Image
              src="//cdn.pixabay.com/photo/2016/05/28/00/06/gift-1420830_1280.jpg"
              width={400}
              height={400}
              unoptimized
              className="h-[100px] mx-auto block w-[100px] rounded-[50%] shadow-md hover:bg-teal-200 object-cover max-w-auto"
              alt=""
            />
            <h3 className="text-sm text-slate-800 pt-3 mb-3 text-center">
              Wedding Gifts
            </h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="">
            <Image
              src="//cdn.pixabay.com/photo/2016/05/28/00/06/gift-1420830_1280.jpg"
              width={400}
              height={400}
              unoptimized
              className="h-[100px] hover:border border-red-200 mx-auto block w-[100px] rounded-[50%] shadow-md hover:bg-teal-200 object-cover max-w-auto"
              alt=""
            />
            <h3 className="text-sm text-slate-800 pt-3 mb-3 text-center">
              Velentine Day
            </h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="">
            <Image
              src="//cdn.pixabay.com/photo/2016/05/28/00/06/gift-1420830_1280.jpg"
              width={400}
              height={400}
              unoptimized
              className="h-[100px] hover:border border-red-200 mx-auto block w-[100px] rounded-[50%] shadow-md hover:bg-teal-200 object-cover max-w-auto"
              alt=""
            />
            <h3 className="text-sm text-slate-800 pt-3 mb-3 text-center">
              Women Special
            </h3>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategoryList;
