import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

export default function Andriod6() {
  return (
    <div className="w-[375px] h-[800px]">
      <Header />
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-xl text-center font-abc  text-[#2C2B2B] font-semibold ml-1 my-7">
          What are your goals?
        </h1>

        <div className="flex flex-row items-center justify-between p-4 bg-[#F1F1F1] rounded-lg mb-4">
          <span className="font-abc text-sm font-semibold text-[#2C2B2B]">
            Weight Loss
          </span>
          <input
            type="checkbox"
            id="agree"
            className="mr-2 w-5 h-5 "
            size={5}
          />
        </div>

        <div className="flex flex-row items-center justify-between p-4 bg-[#F1F1F1] rounded-lg mb-4">
          <span className="font-abc text-sm font-semibold text-[#2C2B2B]">
            Muscle Gain
          </span>
          <input
            type="checkbox"
            id="agree"
            className="mr-2 w-5 h-5 "
            size={5}
          />
        </div>

        <div className="flex flex-row items-center justify-between p-4 bg-[#F1F1F1] rounded-lg mb-4">
          <span className="font-abc text-sm font-semibold text-[#2C2B2B]">
            Flexibility and Mobility
          </span>
          <input
            type="checkbox"
            id="agree"
            className="mr-2 w-5 h-5 "
            size={5}
          />
        </div>

        <div className="flex flex-row items-center justify-between p-4 bg-[#F1F1F1] rounded-lg mb-4">
          <span className="font-abc text-sm font-semibold text-[#2C2B2B]">
            General Fitness
          </span>
          <input
            type="checkbox"
            id="agree"
            className="mr-2 w-5 h-5 "
            size={5}
          />
        </div>

        <div className="flex flex-row items-center justify-between p-4 bg-[#F1F1F1] rounded-lg mb-4">
          <span className="font-abc text-sm font-semibold text-[#2C2B2B]">
            Event - specific training
          </span>
          <input
            type="checkbox"
            id="agree"
            className="mr-2 w-5 h-5 "
            size={5}
          />
        </div>

        <div className="flex flex-row items-center justify-between p-4 bg-[#F1F1F1] rounded-lg mb-4">
          <span className="font-abc text-sm font-semibold text-[#2C2B2B]">
            Mindfulness and Mental Health
          </span>
          <input
            type="checkbox"
            id="agree"
            className="mr-2 w-5 h-5 "
            size={5}
          />
        </div>

        <Link to="/page8">
          <button className="bg-gradient-to-r w-[343px] font-abc from-[#95BEFF] to-[#89A1FF] text-white p-3 font-semibold rounded-xl text-lg  hover:opacity-95 disabled:opacity-80 mt-28">
            Confirm
          </button>
        </Link>
      </div>
    </div>
  );
}
