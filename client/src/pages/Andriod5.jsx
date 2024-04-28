import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

export default function Andriod5() {
  return (
    <div className="w-[375px] h-[800px]">
      <Header />
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-2xl text-left font-def text-[#2C2B2B] font-semibold ml-1 my-7">
          Welcome Back
        </h1>
        <form className="flex flex-col gap-4 py-3">
          <input
            type="email"
            placeholder="Email"
            className="border p-4 mb-2 rounded-lg font-abc text-sm font-semibold bg-[#F1F1F1]"
            id="email"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-4 rounded-lg font-abc text-sm font-semibold bg-[#F1F1F1]"
            id="password"
          />

          <div className="flex items-center mb-16">
            <label
              htmlFor="agree"
              className="text-xs font-abc ml-1 mb-24 underline text-[#7F7F7F]"
            >
              Forgot your password?
            </label>
          </div>

          <Link to="/page6">
            <button className="bg-gradient-to-r w-[343px] font-abc from-[#95BEFF] to-[#89A1FF] text-white p-3 font-semibold rounded-xl text-lg  hover:opacity-95 disabled:opacity-80 mt-28">
              Sign in
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
            <p>Don't have an account yet?</p>
            <Link to={"/page4"}>
              <span className="text-blue-400 underline">Create an account</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
