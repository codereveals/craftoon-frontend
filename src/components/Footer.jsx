import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="nc-Footer relative py-20 lg:pt-15 lg:pb-0 bg-slate-100 dark:border-neutral-700">
        <Wrapper>
          <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-4 lg:gap-x-10 ">
            <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
              <div className="col-span-2 md:col-span-1">
                <Link
                  className="ttnc-logo inline-block text-slate-600 text-bold flex-shrink-0"
                  href="/"
                >
                  <Image
                    src={logo}
                    width={100}
                    height={100}
                    alt="test"
                    className="rounded-full"
                  />
                </Link>
              </div>
            </div>
            <div className="text-sm">
              <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
                Quick Links{" "}
              </h2>
              <ul className="mt-5 space-y-4">
                <li>
                  <Link
                    className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Shiping Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-sm">
              <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
                Category
              </h2>
              <ul className="mt-5 space-y-4">
                <li>
                  <Link
                    className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Customize Gift
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Anniversary
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Birthday
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Couple Gift
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-sm">
              <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
                Need Help
              </h2>
              <ul className="mt-5 space-y-4">
                <li>
                  <Link
                    className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    My Account
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cancelaion Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Wrapper>
        <div className="bg-pink-300 px-8 py-4 rounded-md ">
          <Wrapper className="flex justify-between py-2">
            <div>
              <p>&copy; Craftoon Inc. </p>
            </div>
            <div>
              <ul className="flex gap-3">
                <li>
                  <Link href="">terms and Condition</Link>
                </li>
                <li>
                  <Link href="">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </Wrapper>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
