import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import featured1 from "../assets/featured-img-1.jpg"
// import velentine from "../assets/images/velentine.jpg"
import velentine from "../assets/images/main-img.png"
import Link from "next/link";
import CategoryList from "@/components/CategoryList";
import ProductCard from "@/components/ProductCard";
import offer1 from "../assets/images/1.png";
import promo3 from "../assets/images/promo3.webp";
import high1 from "../assets/images/high1.webp";
import high2 from "../assets/images/high2.webp";
import high3 from "../assets/images/high3.webp";
import high4 from "../assets/images/high4.webp";
import FeaturedCards from "@/components/FeaturedCards";


export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <HeroBanner />

      <Wrapper >
        <div className="rounded-lg bg-teal-100 py-10 px-3 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 px-5">Shop By Category,
            <span className="text-neutral-500 text-lg font-light block mt-1">One Gift Box at a Time</span>
          </h2>
          <CategoryList />
        </div>

      </Wrapper>
      <Wrapper>
        <div>
          {/* <h2 className="pb-5 text-black-500 text-[20px] md:text-[20px] font-bold">Featured Collection</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="flex justify-between items-center bg-pink-200 rounded-md">
              <figure class="rounded-xl p-8 w-[30%]">
                <Image class=" rounded-full mx-auto" src={featured1} alt="" width={384} height={512} />
              </figure>
              <div className="w-[70%] text-center">
                <h2 className="font-semibold text-[25px] md:text-[40px]">Premium Products</h2>
                <p className="font-light text-sm md:text-lg pt-1 pb-3 text-neutral-600">50% off all items</p>
                <Link href="" className="bg-white inline-block rounded-full text-slate-800 px-4 py-3 font-semibold text-sm uppercase  hover:bg-pink-600 hover:text-white">Shop Now</Link>
              </div>

            </div>
            <div className="">
              <div className="flex justify-between items-center bg-orange-200 rounded-md mb-3">
                <figure class="rounded-xl p-8 w-[30%]">
                  <Image class=" rounded-full mx-auto" src={featured1} alt="" width={100} height={100} />
                </figure>
                <div className="w-[70%] text-center py-3">
                  <h2 className="font-semibold text-[25px] md:text-[30px]">Bestseller Offer</h2>
                  <p className="font-light text-sm md:text-lg pt-1 pb-3 text-neutral-600">50% off all items</p>
                  <Link href="" className="bg-white inline-block rounded-full text-slate-800 hover:bg-orange-600 hover:text-white px-4 py-3 font-semibold text-sm uppercase">Shop Now</Link>
                </div>

              </div>
              <div className="flex justify-between items-center bg-teal-200 rounded-md">
                <figure class="rounded-xl p-8 w-[40%]">
                  <Image class=" rounded-full mx-auto" src={featured1} alt="" width={100} height={100} />
                </figure>
                <div className="w-[60%] text-center py-3">
                  <h2 className="font-semibold text-[25px] md:text-[30px]">Special Offer</h2>
                  <p className="font-light text-sm md:text-lg pt-1 pb-3 text-neutral-600">50% off all items</p>
                  <Link href="" className="bg-white inline-block rounded-full text-slate-800 px-4 py-3 font-semibold text-sm uppercase  hover:bg-teal-600 hover:text-white" >Shop Now</Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper >
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 px-5">Latest Collection
          <span className="text-neutral-500 text-lg font-light block mt-1">A Fresh Collection for you</span>
        </h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Wrapper>

      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 items-center bg-teal-50 rounded-lg">

          <div className="grid-cols-1 md:grid-cols-2">
            <h2 className="text-3xl md:text-4xl font-semibold mb-5">Discover more.
              <span className="text-neutral-500">Good things are waiting for you</span>
            </h2>
            <p className="text-neutral-500 text-md md:text-md mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum esse dolores voluptate explicabo eaque perferendis dolorum. Autem odit incidunt ducimus facere iure temporibus ad rerum, voluptas tenetur consequatur vitae quam fugiat quod dicta recusandae atque beatae omnis blanditiis sed eveniet aperiam asperiores? Perferendis eligendi sapiente nihil eum minus quaerat doloremque nesciunt eaque.</p>
            <button class="cr-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-md py-2 px-4  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-pink-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 md:shadow-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">


              <span class="ml-1">Order Now</span>
            </button>
          </div>
          <div className="text-center md:text-right grid-cols-1 md:grid-cols-2">

            <Image src={velentine} width={500} height={600} alt="" className="rounded-lg block  ml-auto" />
          </div>
        </div>

      </Wrapper>

      <Wrapper>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 px-5">Inspiring Smiles,
          <span className="text-neutral-500 text-lg font-light block mt-1">One Gift Box at a Time</span>
        </h2>

        <div className="relative overflow-y-auto flex gap-5 mt-5 flex-wrap">
          <FeaturedCards />
          <FeaturedCards />

        </div>
      </Wrapper>

      <Wrapper >
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 px-5">Best Special Gifts
          <span className="text-neutral-500 text-lg font-light block mt-1">One Gift Box at a Time</span>
        </h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Wrapper>
      <Wrapper >
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 px-5">Delight Couple Club
          <span className="text-neutral-500 text-lg font-light block mt-1">Unexpected Pleasures, Wrapped in Happiness</span>
        </h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Wrapper>
      <Wrapper>
        <div class="codeWrappper">
          <div class="relative flex flex-col lg:flex-row bg-slate-50 dark:bg-slate-800 rounded-2xl sm:rounded-[40px] p-4 pb-0 sm:p-5 sm:pb-0 lg:p-24">
            <div class="absolute inset-0">
              {/* <img alt="backgroundLineSvg" loading="lazy" class="absolute w-full h-full object-contain object-bottom dark:opacity-5" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="" /> */}
            </div>
            <div class="lg:w-[50%] max-w-lg relative">
              <h2 class="font-semibold text-4xl md:text-5xl">Dont miss out on special offers</h2>
              <span class="block mt-5 text-neutral-500 dark:text-neutral-400">Register to receive news about the latest, savings combos, discount codes...</span>
              <ul class="space-y-4 mt-10">
                <li class="flex items-center space-x-4"><span class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-purple-800 bg-purple-100  ">01</span><span class="font-medium text-neutral-700 dark:text-neutral-300">Savings combos</span></li>
                <li class="flex items-center space-x-4"><span class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100">02</span><span class="font-medium text-neutral-700 dark:text-neutral-300">Combo Gift Packages</span></li>
                <li class="flex items-center space-x-4"><span class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 ">03</span><span class="font-medium text-neutral-700 dark:text-neutral-300">Free Packaging</span></li>
              </ul>
              <form class="mt-10 relative max-w-sm">
                <input type="email" class="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-full text-sm font-normal h-11 px-4 py-3 " required="" placeholder="Enter your email" />
                <button class="ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-slate-900 hover:bg-slate-800 
               text-slate-50 absolute transform top-1/2 -translate-y-1/2 right-1  w-9 h-9  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0" type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </form>
            </div>
            <div class="relative block lg:absolute lg:right-0 lg:bottom-0 mt-10 lg:mt-0 max-w-lg lg:max-w-[calc(50%-40px)]">
              <Image src={promo3} alt="" width={500} height={100} />
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper >
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 px-5">Customized Gift
          <span className="text-neutral-500 text-lg font-light block mt-1">Discover the Art of Giving</span>
        </h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Wrapper>
      <Wrapper>
        <div class="py-24 lg:py-32 border-t bg-slate-50 rounded-lg border-b border-slate-200 dark:border-slate-700">
          <div class="nc-SectionHowItWork ">
            <div class="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16 xl:gap-20">
              {/* <Image src={high1} width={80} height={80} alt="HIW" class="rounded-3xl" style="color:transparent" /> */}
              <div class="relative flex flex-col items-center max-w-xs mx-auto">
                <div class="mb-4 sm:mb-10 max-w-[140px] mx-auto">
                  <Image src={high1} width={80} height={80} alt="HIW" class="rounded-3xl" style="color:transparent" />
                </div>
                <div class="text-center mt-auto space-y-5">
                  <span class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100  ">Step 1</span>
                  <h3 class="text-base font-semibold">Filter &amp; Discover</h3>
                  <span class="block text-slate-600 dark:text-slate-400 text-sm leading-6">Smart filtering and suggestions make it easy to find</span>
                </div>
              </div>
              <div class="relative flex flex-col items-center max-w-xs mx-auto">
                <div class="mb-4 sm:mb-10 max-w-[140px] mx-auto">
                  <Image src={high2} width={80} height={80} alt="HIW" class="rounded-3xl" style="color:transparent" />
                </div>
                <div class="text-center mt-auto space-y-5">
                  <span class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-indigo-800 bg-indigo-100">Step 2</span>
                  <h3 class="text-base font-semibold">Add to bag</h3>
                  <span class="block text-slate-600 dark:text-slate-400 text-sm leading-6">Easily select the correct items and add them to the cart</span>
                </div>
              </div>
              <div class="relative flex flex-col items-center max-w-xs mx-auto">
                <div class="mb-4 sm:mb-10 max-w-[140px] mx-auto">
                  <Image src={high3} width={80} height={80} alt="HIW" class="rounded-3xl" style="color:transparent" />
                </div>
                <div class="text-center mt-auto space-y-5">
                  <span class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-yellow-800 bg-yellow-100 ">Step 3</span>
                  <h3 class="text-base font-semibold">Fast shipping</h3>
                  <span class="block text-slate-600 dark:text-slate-400 text-sm leading-6">The carrier will confirm and ship quickly to you</span>
                </div>
              </div>
              <div class="relative flex flex-col items-center max-w-xs mx-auto">
                <div class="mb-4 sm:mb-10 max-w-[140px] mx-auto">
                  <Image src={high3} width={80} height={80} alt="HIW" class="rounded-3xl" style="color:transparent" />
                </div>
                <div class="text-center mt-auto space-y-5">
                  <span class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-purple-800 bg-purple-100">Step 4</span>
                  <h3 class="text-base font-semibold">Enjoy the product</h3>
                  <span class="block text-slate-600 dark:text-slate-400 text-sm leading-6">Have fun and enjoy your 5-star quality products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </main >
  );
}
