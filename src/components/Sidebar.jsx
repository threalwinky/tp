import { useState, useEffect } from "react";
import { Home } from "../svgs/Home";
import { News } from "../svgs/News";
const Sidebar = () => {
    return (
        <div className="fixed">

            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label> */}
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content h-full w-40 p-4 flex items-center justify-center fixed top-0 ">
                        {/* Sidebar content here */}
                        <li className=""> <a href="/" className="flex flex-col py-4 px-10 z-10"> <Home/>  <p className="">Home</p> </a></li>
                        <li className=""> <a className="flex flex-col py-4 px-10"> <News/>  <p className="">News</p> </a></li>
                        <li className=""> <a className="flex flex-col py-4 px-10"> <Home/>  <p className="">Home</p> </a></li>
                        <li className=""> <a className="flex flex-col py-4 px-10"> <Home/>  <p className="">Home</p> </a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar