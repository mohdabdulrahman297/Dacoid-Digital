import React from "react";
import Header from "./../components/Header";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

export default function Andriod4() {
  return (
    <div className="w-[375px] h-[800px]">
      <Header />
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-2xl text-left font-def text-[#2C2B2B] font-semibold ml-1 my-7">
          Create an account
        </h1>
        <form className="flex flex-col gap-4 py-3">
          <input
            type="text"
            placeholder="First Name"
            className="border p-4 mb-2 rounded-lg font-abc text-sm font-semibold bg-[#F1F1F1]"
            id="first"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border p-4 mb-2 rounded-lg font-abc text-sm font-semibold bg-[#F1F1F1]"
            id="last"
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-4 mb-2 rounded-lg font-abc text-sm font-semibold bg-[#F1F1F1]"
            id="email"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-4 mb-2 rounded-lg font-abc text-sm font-semibold bg-[#F1F1F1]"
            id="password"
          />

          <div className="flex items-center">
            <input
              type="checkbox"
              id="agree"
              className="mr-2 w-5 h-5"
              size={5}
            />
            <label htmlFor="agree" className="text-xs font-abc">
              By proceeding, I agree to all{" "}
              <span className="text-blue-400 underline">T&C</span> and{" "}
              <span className="text-blue-400 underline">Privacy Policy</span>
            </label>
          </div>

          <Link to="/page6">
            <button className="bg-gradient-to-r w-[343px] font-abc from-[#95BEFF] to-[#89A1FF] text-white p-3 font-semibold rounded-xl text-lg  hover:opacity-95 disabled:opacity-80 mt-24">
              Create an account
            </button>
          </Link>
        </form>

        <div className="space-y-4 text-center text-sm">
          <p className="font-abc">Or</p>
          <div className="flex items-center justify-center  space-x-4">
            <button
              className="w-10 h-10 px-2 py-2 border border-black rounded-lg"
              variant="ghost"
            >
              <FcGoogle className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 p-2 border border-black rounded-lg"
              variant="ghost"
            >
              <FaFacebookF className="w-5 h-5 text-blue-500" />
              <span className="sr-only">Sign in with Facebook</span>
            </button>
          </div>
          <div className="flex gap-2 mt-5 justify-center font-abc">
            <p>Already Have an account?</p>
            <Link to={"/page5"}>
              <span className="text-blue-400 underline">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
