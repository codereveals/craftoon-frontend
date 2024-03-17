import React from "react";

import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import Image from "next/image";
const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Shop", subMenu: true },
  { id: 4, name: "Gift", url: "/gift" },
  { id: 5, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Anniversary ", url: "/" },
  { id: 2, name: "Gift Data ", url: "/" },
  { id: 3, name: "Keyrings ", url: "/" },
  { id: 4, name: "Hamper ", url: "/" },
  { id: 5, name: "Sketch Lamp ", url: "/" },
];
const Menu = ({ showCatMenu, setShowCatMenu }) => {
  return (
    <>
      {/* ---Mega-menu */}
      <div class="flex-[2] hidden lg:flex justify-center mx-4">
        <ul class="nc-Navigation flex items-center">
          <li class="menu-item flex-shrink-0">
            <div class="h-20 flex-shrink-0 flex items-center">
              <a
                class="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                href="/collection"
              >
                Home
              </a>
            </div>
          </li>
          <li class="menu-item flex-shrink-0">
            <div class="h-20 flex-shrink-0 flex items-center">
              <a
                class="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                href="/collection-2"
              >
                Gift
              </a>
            </div>
          </li>
          <li class="menu-item flex-shrink-0">
            <div class="h-20 flex-shrink-0 flex items-center">
              <a
                class="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                href="/collection"
              >
                Sketches
              </a>
            </div>
          </li>
          <li class="menu-item flex-shrink-0">
            <div class="h-20 flex-shrink-0 flex items-center">
              <a
                class="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                href="/collection-2"
              >
                Celebration
              </a>
            </div>
          </li>
          <li
            class="menu-item flex-shrink-0 menu-megamenu menu-megamenu--large"
            onMouseEnter={() => setShowCatMenu(true)}
            onMouseLeave={() => setShowCatMenu(false)}
          >
            <div class="h-20 flex-shrink-0 flex items-center">
              <a
                class="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                href=""
              >
                Shop
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="ml-1 -mr-1 h-4 w-4 text-slate-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div
              class={`${
                showCatMenu ? "visible" : "invisible"
              } sub-menu absolute top-full inset-x-0 max-w-[1280px] mx-auto transform z-50`}
            >
              <div class="bg-white dark:bg-neutral-900 shadow-lg px-4 ">
                <div class="container max-w-[1280] px-auto">
                  <div class="flex text-sm border-t border-slate-200 dark:border-slate-700 py-14">
                    <div class="flex-1 grid grid-cols-4 gap-6 xl:gap-8 pr-6 xl:pr-8">
                      <div>
                        <p class="font-medium text-slate-900 dark:text-neutral-200">
                          Category
                        </p>
                        <ul class="grid space-y-4 mt-4">
                          <li class="">
                            <a
                              class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                              href="/"
                            >
                              Birthday Gift
                            </a>
                          </li>
                          <li class="menuIsNew">
                            <a
                              class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                              href="/home-2"
                            >
                              Anniversary Gift
                            </a>
                          </li>
                          <li class="">
                            <a
                              class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                              href="/"
                            >
                              Couple Gift
                            </a>
                          </li>
                          <li class="menuIsNew">
                            <a
                              class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                              href="/home-2"
                            >
                              Women Special Gift
                            </a>
                          </li>
                          <li class="">
                            <a
                              class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                              href="/"
                            >
                              Coming Soon
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p class="font-medium text-slate-900 dark:text-neutral-200">
                          Shop Pages
                        </p>
                        <ul class="grid space-y-4 mt-4">
                          <li class="">
                            <a
                              class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                              href="/collection"
                            >
                              Category Page 1
                            </a>
                          </li>
                          <li class="">
                            <a
                              class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                              href="/collection-2"
                            >
                              Category Page 2
                            </a>
                          </li>
                          <li class="">
                            <a
                              class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                              href="/product-detail"
                            >
                              Product Page 1
                            </a>
                          </li>
                          <li class="">
                            <a
                              class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                              href="/product-detail-2"
                            >
                              Product Page 2
                            </a>
                          </li>
                          <li class="">
                            <a
                              class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                              href="/cart"
                            >
                              Cart Page
                            </a>
                          </li>
                          <li class="">
                            <a
                              class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                              href="/checkout"
                            >
                              Checkout Page
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p class="font-medium text-slate-900 dark:text-neutral-200">
                          Other Pages
                        </p>
                        <ul class="grid space-y-4 mt-4">
                          <li class="">
                            <a
                              class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                              href="/checkout"
                            >
                              Checkout Page
                            </a>
                          </li>
                          <li class="">
                            <a
                              class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                              href="/search"
                            >
                              Search Page
                            </a>
                          </li>
                          <li class="">
                            <a
                              class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                              href="/cart"
                            >
                              Cart Page
                            </a>
                          </li>
                          <li class="">
                            <a
                              class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                              href="/account"
                            >
                              Accout Page
                            </a>
                          </li>
                          <li class="">
                            <a
                              class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                              href="/account-order"
                            >
                              Order Page
                            </a>
                          </li>
                          <li class="">
                            <a
                              class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                              href="/subscription"
                            >
                              Subscription
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p class="font-medium text-slate-900 dark:text-neutral-200">
                          Blog Page
                        </p>
                        <ul class="grid space-y-4 mt-4">
                          <li class="">
                            <a
                              class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                              href="/blog"
                            >
                              Blog Page
                            </a>
                          </li>
                          <li class="">
                            <a
                              class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                              href="/blog-single"
                            >
                              Blog Single
                            </a>
                          </li>
                          <li class="">
                            <a
                              class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                              href="/about"
                            >
                              About Page
                            </a>
                          </li>
                          <li class="">
                            <a
                              class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                              href="/contact"
                            >
                              Contact Page
                            </a>
                          </li>
                          <li class="">
                            <a
                              class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                              href="/login"
                            >
                              Login
                            </a>
                          </li>
                          <li class="">
                            <a
                              class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                              href="/signup"
                            >
                              Signup
                            </a>
                          </li>
                          <li class="">
                            <a
                              class="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
                              href="/forgot-pass"
                            >
                              Forgot Password
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="w-[40%] xl:w-[35%]">
                      <a class="CardCategory3 block " href="/collection">
                        <div class="relative w-full aspect-w-16 aspect-h-11 sm:aspect-h-9 h-0 rounded-2xl overflow-hidden group bg-blue-500">
                          <div>
                            <div class="absolute inset-5 sm:inset-8">
                              <Image
                                alt=""
                                loading="lazy"
                                width="362"
                                height="396"
                                class="absolute right-0 w-1/2 max-w-[260px] h-full object-contain drop-shadow-xl"
                                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.0ee67265.png&amp;w=750&amp;q=75"
                                style="color: transparent;"
                              />
                            </div>
                          </div>
                          <span class="opacity-0 group-hover:opacity-40 absolute inset-0 bg-black/10 transition-opacity"></span>
                          <div>
                            <div class="absolute inset-5 sm:inset-8 flex flex-col">
                              <div class="max-w-xs">
                                <span class="block mb-2 text-sm text-slate-700">
                                  Sale collection
                                </span>
                                <h2 class="text-xl md:text-2xl text-slate-900 font-semibold">
                                  Up to <br /> 80% off retail
                                </h2>
                              </div>
                              <div class="mt-auto">
                                <button class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonSecondary bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 nc-shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
                                  Show me all
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="menu-item menu-dropdown relative">
            <div class="h-20 flex-shrink-0 flex items-center">
              <a
                class="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                href="/search"
              >
                Explore
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
