import { useState, useEffect } from "react";
const Inform = () => {
    return (
        <div className="flex flex-col p-5 gap-4 z-0 w-full  items-center justify-center">
            <div className="bg-base-300 lg:w-[50rem] w-full text-center items-center flex flex-col">
                <div className=" flex flex-col font-[500] leading-[1.6] p-8 ">
                    <h1 id="header_1" class="form-header text-[2em]" >THÔNG TIN NHẬP HỌC DÀNH CHO HỌC SINH TRÚNG
                        TUYỂN LỚP 10</h1>
                    <div id="subHeader_1" class="form-subHeader text-[1em]">TRƯỜNG THPT TRẦN PHÚ NĂM HỌC 2024-2025</div>
                </div>
                <div className="bg-slate-600 w-full p-[-8] h-[0.01rem]">

                </div>
                <div className=" flex flex-col text-[0.7em] font-[600] leading-[1.45] p-8 justify-start items-start  w-full">
                    <h1 id="header_1" class="form-header text-[2em] " >I. LÝ LỊCH HỌC SINH</h1>

                </div>
                <div className="bg-slate-600 w-[80%] p-[-8] h-[0.01rem] ">

                </div>
                <div className="p-10  w-full gap-5 flex flex-col">
                    <p className="text-start text-[1em] font-[600] leading-[1.45]">
                        Họ và tên Học sinh
                        (Không dùng chữ IN HOA)
                    </p>
                    <div className="flex flex-row items-center justify-center gap-5">
                        <div className="w-full flex flex-col">
                            <input type="text" placeholder="Họ và chữ lót" className="input input-bordered w-full max-w-xs" required/>
                            <label className="ml-3 mt-2 text-start text-[0.8em] font-[400] leading-[1.45] ">VD: Nguyễn Văn</label>
                        </div>
                        <div className="w-full flex flex-col">
                            <input type="text" placeholder="Tên" className="input input-bordered w-full max-w-xs" />
                            <label className=" ml-3 mt-2 text-start text-[0.8em] font-[400] leading-[1.45]">VD: Anh</label>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Inform