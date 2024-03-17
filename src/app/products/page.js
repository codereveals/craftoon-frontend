import Wrapper from '@/components/Wrapper'
import React from 'react'

const Products = () => {
    return (
        <>
            <div className="flex justify-center relative w-full items-center h-[250px] bg-orange-100 rounded-md breadcrumb-wrapper">
                <div className="text-center">
                    <h3 className='text-md'>Products</h3>
                </div>
            </div>

            <Wrapper>

                <div class="space-y-10 lg:space-y-14">
                    <div class="max-w-screen-sm"><h2 class="block text-2xl sm:text-3xl lg:text-4xl font-semibold">feaured collection</h2><span class="block mt-4 text-neutral-500 dark:text-neutral-400 text-sm sm:text-base">We not only help you design exceptional products, but also make it easy for you to share your designs with more like-minded people.</span></div>
                    <hr class="border-slate-200 dark:border-slate-700"></hr>
                </div>
                <main>
                    <div className='flex flex-col lg:flex-row space-y-5'>
                        <div className="lg:w-1/3 xl:w-1/4 pr-4 bg-slate-50 p-3 rounded-lg">
                            <div className="divide-y divide-slate-200 dark:divide-slate-700">
                                <div className="relative flex flex-col pb-8 space-y-4">
                                    <h3 className="font-semibold mb-2.5">Categories</h3>
                                    <div className="">
                                        <div className="flex text-sm sm:text-base "><input id="Backpacks" className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5" type="checkbox" name="Backpacks" /><label for="Backpacks" className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"><span className="text-slate-900 dark:text-slate-100 text-sm font-normal ">Painting</span></label></div>
                                    </div>
                                    <div className="">
                                        <div className="flex text-sm sm:text-base "><input id="Travel Bags" className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5" type="checkbox" name="Travel Bags" /><label for="Travel Bags" className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"><span className="text-slate-900 dark:text-slate-100 text-sm font-normal ">Travel Bags</span></label></div>
                                    </div>
                                    <div className="">
                                        <div className="flex text-sm sm:text-base "><input id="Laptop Sleeves" className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5" type="checkbox" name="Laptop Sleeves" /><label for="Laptop Sleeves" className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"><span className="text-slate-900 dark:text-slate-100 text-sm font-normal ">Laptop Sleeves</span></label></div>
                                    </div>
                                    <div className="">
                                        <div className="flex text-sm sm:text-base "><input id="Organization" className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5" type="checkbox" name="Organization" /><label for="Organization" className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"><span className="text-slate-900 dark:text-slate-100 text-sm font-normal ">Organization</span></label></div>
                                    </div>
                                    <div className="">
                                        <div className="flex text-sm sm:text-base "><input id="Accessories" className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5" type="checkbox" name="Accessories" /><label for="Accessories" className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"><span className="text-slate-900 dark:text-slate-100 text-sm font-normal ">Accessories</span></label></div>
                                    </div>
                                </div>
                                <div className="relative flex flex-col py-8 space-y-4">
                                    <h3 className="font-semibold mb-2.5">Colors</h3>
                                    <div className="">
                                        <div className="flex text-sm sm:text-base "><input id="White" className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5" type="checkbox" name="White" /><label for="White" className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"><span className="text-slate-900 dark:text-slate-100 text-sm font-normal ">White</span></label></div>
                                    </div>
                                    <div className="">
                                        <div className="flex text-sm sm:text-base "><input id="Beige" className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5" type="checkbox" name="Beige" /><label for="Beige" className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"><span className="text-slate-900 dark:text-slate-100 text-sm font-normal ">Beige</span></label></div>
                                    </div>
                                    <div className="">
                                        <div className="flex text-sm sm:text-base "><input id="Blue" className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5" type="checkbox" name="Blue" /><label for="Blue" className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"><span className="text-slate-900 dark:text-slate-100 text-sm font-normal ">Blue</span></label></div>
                                    </div>
                                    <div className="">
                                        <div className="flex text-sm sm:text-base "><input id="Black" className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5" type="checkbox" name="Black" /><label for="Black" className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"><span className="text-slate-900 dark:text-slate-100 text-sm font-normal ">Black</span></label></div>
                                    </div>
                                    <div className="">
                                        <div className="flex text-sm sm:text-base "><input id="Brown" className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5" type="checkbox" name="Brown" /><label for="Brown" className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"><span className="text-slate-900 dark:text-slate-100 text-sm font-normal ">Brown</span></label></div>
                                    </div>
                                    <div className="">
                                        <div className="flex text-sm sm:text-base "><input id="Green" className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5" type="checkbox" name="Green" /><label for="Green" className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"><span className="text-slate-900 dark:text-slate-100 text-sm font-normal ">Green</span></label></div>
                                    </div>
                                    <div className="">
                                        <div className="flex text-sm sm:text-base "><input id="Navy" className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5" type="checkbox" name="Navy" /><label for="Navy" className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"><span className="text-slate-900 dark:text-slate-100 text-sm font-normal ">Navy</span></label></div>
                                    </div>
                                </div>
                                <div className="relative flex flex-col py-8 space-y-4">
                                    <h3 className="font-semibold mb-2.5">Sizes</h3>
                                    <div className="">
                                        <div className="flex text-sm sm:text-base "><input id="XS" className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5" type="checkbox" name="XS" /><label for="XS" className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"><span className="text-slate-900 dark:text-slate-100 text-sm font-normal ">XS</span></label></div>
                                    </div>
                                    <div className="">
                                        <div className="flex text-sm sm:text-base "><input id="S" className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5" type="checkbox" name="S" /><label for="S" className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"><span className="text-slate-900 dark:text-slate-100 text-sm font-normal ">S</span></label></div>
                                    </div>
                                    <div className="">
                                        <div className="flex text-sm sm:text-base "><input id="M" className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5" type="checkbox" name="M" /><label for="M" className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"><span className="text-slate-900 dark:text-slate-100 text-sm font-normal ">M</span></label></div>
                                    </div>
                                    <div className="">
                                        <div className="flex text-sm sm:text-base "><input id="L" className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5" type="checkbox" name="L" /><label for="L" className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"><span className="text-slate-900 dark:text-slate-100 text-sm font-normal ">L</span></label></div>
                                    </div>
                                    <div className="">
                                        <div className="flex text-sm sm:text-base "><input id="XL" className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5" type="checkbox" name="XL" /><label for="XL" className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"><span className="text-slate-900 dark:text-slate-100 text-sm font-normal ">XL</span></label></div>
                                    </div>
                                    <div className="">
                                        <div className="flex text-sm sm:text-base "><input id="2XL" className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5" type="checkbox" name="2XL" /><label for="2XL" className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"><span className="text-slate-900 dark:text-slate-100 text-sm font-normal ">2XL</span></label></div>
                                    </div>
                                </div>
                                <div className="relative flex flex-col py-8 space-y-5 pr-3">
                                    <div className="space-y-5">
                                        <span className="font-semibold">Price range</span>
                                        <div className="rc-slider rc-slider-horizontal">
                                            <div className="rc-slider-rail"></div>
                                            <div className="rc-slider-track rc-slider-track-1"></div>
                                            <div className="rc-slider-step"></div>
                                            <div className="rc-slider-handle rc-slider-handle-1" tabindex="0" role="slider" aria-valuemin="1" aria-valuemax="500" aria-valuenow="100" aria-disabled="false" ></div>
                                            <div className="rc-slider-handle rc-slider-handle-2" tabindex="0" role="slider" aria-valuemin="1" aria-valuemax="500" aria-valuenow="500" aria-disabled="false" ></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between space-x-5">
                                        <div>
                                            <label for="minPrice" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Min price</label>
                                            <div className="mt-1 relative rounded-md"><span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-500 sm:text-sm">$</span><input disabled="" id="minPrice" className="block w-32 pr-10 pl-4 sm:text-sm border-neutral-200 dark:border-neutral-700 rounded-full bg-transparent" type="text" value="100" name="minPrice" /></div>
                                        </div>
                                        <div>
                                            <label for="maxPrice" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Max price</label>
                                            <div className="mt-1 relative rounded-md"><span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-500 sm:text-sm">$</span><input disabled="" id="maxPrice" className="block w-32 pr-10 pl-4 sm:text-sm border-neutral-200 dark:border-neutral-700 rounded-full bg-transparent" type="text" value="500" name="maxPrice" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-8 pr-2">
                                    <div className="MySwitch flex fle justify-between items-center space-x-2 ">
                                        <div>
                                            <label className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 " data-nc-id="Label">On sale!</label>
                                            <p className="text-neutral-500 dark:text-neutral-400  text-xs">Products currently on sale</p>
                                        </div>
                                        <button className="bg-teal-700
               relative inline-flex flex-shrink-0 h-8 w-[68px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75" id="headlessui-switch-:r1q:" role="switch" type="button" tabindex="0" aria-checked="true" data-headlessui-state="checked"><span className="sr-only">On sale!</span><span aria-hidden="true" className="translate-x-9
               pointer-events-none inline-block h-7 w-7 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"></span></button>
                                    </div>
                                </div>
                                <div className="relative flex flex-col py-8 space-y-4">
                                    <h3 className="font-semibold mb-2.5">Sort order</h3>
                                    <div className="flex items-center sm:text-base !text-sm"><input id="Most-Popular" className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5" type="radio" value="Most-Popular" name="radioNameSort" /><label for="Most-Popular" className="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none">Most Popular</label></div>
                                    <div className="flex items-center sm:text-base !text-sm"><input id="Best-Rating" className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5" type="radio" value="Best-Rating" name="radioNameSort" /><label for="Best-Rating" className="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none">Best Rating</label></div>
                                    <div className="flex items-center sm:text-base !text-sm"><input id="Newest" className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5" type="radio" value="Newest" name="radioNameSort" /><label for="Newest" className="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none">Newest</label></div>
                                    <div className="flex items-center sm:text-base !text-sm"><input id="Price-low-hight" className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5" type="radio" value="Price-low-hight" name="radioNameSort" /><label for="Price-low-hight" className="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none">Price Low - Hight</label></div>
                                    <div className="flex items-center sm:text-base !text-sm"><input id="Price-hight-low" className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5" type="radio" value="Price-hight-low" name="radioNameSort" /><label for="Price-hight-low" className="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none">Price Hight - Low</label></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mx-4 border-t lg:border-t-0"></div>
                        <div className='flex-1'></div>

                    </div>

                </main>




            </Wrapper>

        </>
    )
}

export default Products