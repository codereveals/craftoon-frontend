import Image from "next/image";
import React from "react";
import product1 from "../assets/product-1.jpg";
import { IoIosExpand } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { LiaRupeeSignSolid } from "react-icons/lia";

const ProductCard = () => {
  return (
    <div className=" bg-slate-200 hover:bg-pink-200 hover:shadow rounded-md grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      <div className="bg-teal-50 p-3 rounded-lg relative">
        <Image
          src={product1}
          height={600}
          width={400}
          alt="product name"
          className="w-full max-w-[300px] rounded-lg"
        />
        <span class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 absolute top-4 left-5">
          Sale
        </span>
      </div>

      <div>
        <div className="py-3 px-3">
          <h2 class="ProductCard__title text-base font-semibold transition-colors">
            Panted Workd
          </h2>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1 ">
            Perfect mint green
          </p>
        </div>
      </div>
      <div class="flex justify-between items-end py-6 px-3">
        <div class="">
          <div class="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
            <span class="text-green-500 !leading-none flex items-center">
              <LiaRupeeSignSolid />
              28
            </span>
          </div>
        </div>
        <div class="flex items-center mb-0.5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            class="w-5 h-5 pb-[1px] text-amber-400"
          >
            <path
              fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="text-sm ml-1 text-slate-500 dark:text-slate-400">
            4.9 (98 reviews)
          </span>
        </div>
      </div>

      {/* butoon  */}
      <div class=" inset-x-1 text-center group-hover:opacity-100 group-hover:visible transition-all px-3 pb-5">
        <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-xs py-2 px-4  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
          <MdOutlineShoppingBag />

          <span class="ml-1">Add to bag</span>
        </button>
        <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-xs py-2 px-4  ttnc-ButtonSecondary bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 ml-1.5 bg-white hover:!bg-gray-100 hover:text-slate-900 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
          <IoIosExpand />

          <span class="ml-1">Quick view</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
