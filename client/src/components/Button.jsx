import React from "react";
import { FaAngleRight } from "react-icons/fa";

export default function Button() {
  return (
    <div className="w-[60px] h-[60px] mt-24 bg-gradient-to-r from-slate-200 to-[#89A1FF] rounded-full flex justify-end text-white border-[#89A1FF] ml-auto mr-3 transition ease-out">
      <button>
        <FaAngleRight className="mr-5" size={20} />
      </button>
    </div>
  );
}
