import React from "react";
import { FaSignal } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { IoIosBatteryFull } from "react-icons/io";

export default function Header() {
  return (
    <div>
      <div className="w-[375px] h-[44px] flex flex-row items-center justify-between gap-2">
        <div className="font-semibold text-md px-6">9:41</div>
        <div className="flex flex-row justify-between items-center gap-2 px-3">
          <FaSignal size={18} />
          <FaWifi size={18} />
          <IoIosBatteryFull size={25} />
        </div>
      </div>
      <div className="flex justify-end px-3 text-lg hover:underline text-[#9FB2FF]">
        Skip
      </div>
    </div>
  );
}
