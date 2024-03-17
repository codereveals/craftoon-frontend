import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div class="nc-Footer relative py-20 lg:pt-28 lg:pb-24 bg-slate-100 dark:border-neutral-700">
        <Wrapper>
          <div class="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
            <div class="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
              <div class="col-span-2 md:col-span-1">
                <Link
                  class="ttnc-logo inline-block text-slate-600 flex-shrink-0"
                  href="/"
                >
                  Logo
                </Link>
              </div>
              <div class="col-span-2 flex items-center md:col-span-3">
                <div
                  class="nc-SocialsList1 flex items-center space-x-2 lg:space-x-0 lg:flex-col lg:space-y-3 lg:items-start"
                  data-nc-id="SocialsList1"
                >
                  <Link
                    href="#"
                    class="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
                  >
                    <div class="flex-shrink-0 w-5 "></div>
                    <span class="hidden lg:block text-sm">Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    class="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
                  >
                    <div class="flex-shrink-0 w-5 "></div>
                    <span class="hidden lg:block text-sm">Youtube</span>
                  </Link>
                  <Link
                    href="#"
                    class="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
                  >
                    <div class="flex-shrink-0 w-5 "></div>
                    <span class="hidden lg:block text-sm">Telegram</span>
                  </Link>
                  <Link
                    href="#"
                    class="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
                  >
                    <div class="flex-shrink-0 w-5 "></div>
                    <span class="hidden lg:block text-sm">Twitter</span>
                  </Link>
                </div>
              </div>
            </div>
            <div class="text-sm">
              <h2 class="font-semibold text-neutral-700 dark:text-neutral-200">
                Getting started
              </h2>
              <ul class="mt-5 space-y-4">
                <li>
                  <Link
                    class="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Release Notes
                  </Link>
                </li>
                <li>
                  <Link
                    class="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Upgrade Guide
                  </Link>
                </li>
                <li>
                  <Link
                    class="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Browser Support
                  </Link>
                </li>
                <li>
                  <Link
                    class="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dark Mode
                  </Link>
                </li>
              </ul>
            </div>
            <div class="text-sm">
              <h2 class="font-semibold text-neutral-700 dark:text-neutral-200">
                Explore
              </h2>
              <ul class="mt-5 space-y-4">
                <li>
                  <Link
                    class="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Prototyping
                  </Link>
                </li>
                <li>
                  <Link
                    class="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Design systems
                  </Link>
                </li>
                <li>
                  <Link
                    class="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    class="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div class="text-sm">
              <h2 class="font-semibold text-neutral-700 dark:text-neutral-200">
                Resources
              </h2>
              <ul class="mt-5 space-y-4">
                <li>
                  <Link
                    class="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Best practices
                  </Link>
                </li>
                <li>
                  <Link
                    class="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    class="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Developers
                  </Link>
                </li>
                <li>
                  <Link
                    class="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn design
                  </Link>
                </li>
              </ul>
            </div>
            <div class="text-sm">
              <h2 class="font-semibold text-neutral-700 dark:text-neutral-200">
                Community
              </h2>
              <ul class="mt-5 space-y-4">
                <li>
                  <Link
                    class="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discussion Forums
                  </Link>
                </li>
                <li>
                  <Link
                    class="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code of Conduct
                  </Link>
                </li>
                <li>
                  <Link
                    class="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contributing
                  </Link>
                </li>
                <li>
                  <Link
                    class="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    API Reference
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Wrapper>
      </div>
    </footer>
  );
};

export default Footer;
