"use client";
import React, { useState } from "react";
import Wrapper from "./Wrapper";
import logo from "../assets/logo.jpg";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import { BsCart } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import HeroBanner from "./HeroBanner";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  return (
    <header
      className={`w-full h-[80px] md:[h-80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper>
        <div className="flex justify-between items-center">
          <Link href="">
            <Image
              src={logo}
              alt=""
              height={80}
              width={80}
              className="rounded-full"
            />
          </Link>
          <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
          <div className="flex items-center gap-2 text-black">
            {/* icon start  */}
            <div className="h-8 w-8 md:w-12 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.03] cursor-pointer relative">
              <CiSearch className="text-[15px] md:text-[20px]" />
            </div>
            {/* icon end  */}
            {/* icon start  */}
            <div className="h-8 w-8 md:w-12 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.03] cursor-pointer relative">
              <BsCart className="text-[15px] md:text-[20px]" />
              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                5
              </div>
            </div>
            {/* icon end  */}

            {/* icon start  */}
            <div className="h-8 w-8 md:w-12 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.03] cursor-pointer relative">
              <LuUser2 className="text-[15px] md:text-[20px]" />
            </div>
            {/* icon end  */}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
