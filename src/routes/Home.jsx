import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import register from '../assets/register.jpg'
const Home = () => {
    return (
        <div className="">
            <div className="flex flex-col p-5 gap-4 z-0">
                <label className="input input-bordered input-info flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
                {/* <div>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                                className="w-full" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                                className="w-full" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                                className="w-full" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                                className="w-full" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full justify-center gap-2 py-2">
                        <a href="#slide1" className="btn btn-xs">1</a>
                        <a href="#slide2" className="btn btn-xs">2</a>
                        <a href="#slide3" className="btn btn-xs">3</a>
                        <a href="#slide4" className="btn btn-xs">4</a>
                    </div>
                </div> */}



                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 ">
                    <div className="card bg-base-100 image-full w-full shadow-xl ">
                        <figure>
                            <img
                                src={register}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Đăng ký thông tin nhập học</h2>
                            <p>Đăng ký thông tin nhập học</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary"><a href="/inform">Đăng ký</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 image-full w-full shadow-xl">
                        <figure>
                            <img
                                src={register}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Test</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim dolore non exercitationem eum odio aliquid earum tempore ipsum voluptas saepe doloribus voluptates similique aut corporis, deserunt officiis illum omnis laudantium.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 image-full w-full shadow-xl">
                        <figure>
                            <img
                                src={register}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Test</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim dolore non exercitationem eum odio aliquid earum tempore ipsum voluptas saepe doloribus voluptates similique aut corporis, deserunt officiis illum omnis laudantium.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 image-full w-full shadow-xl">
                        <figure>
                            <img
                                src={register}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Test</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim dolore non exercitationem eum odio aliquid earum tempore ipsum voluptas saepe doloribus voluptates similique aut corporis, deserunt officiis illum omnis laudantium.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 image-full w-full shadow-xl">
                        <figure>
                            <img
                                src={register}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Test</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim dolore non exercitationem eum odio aliquid earum tempore ipsum voluptas saepe doloribus voluptates similique aut corporis, deserunt officiis illum omnis laudantium.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>



        </div>
    )
}

export default Home