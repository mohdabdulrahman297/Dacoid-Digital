import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

export default function Andriod1() {
  return (
    <div className="w-[375px] h-[800px]">
      <Header />
      <Hero />
      <div className="w-[282px] h-[282px] ml-12 mt-16">
        <img src="https://s3-alpha-sig.figma.com/img/bd9b/3108/cb36b0b2aebaab8d7bad4ecbedf2a369?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xx1mI1U-yJ6RmuGEo1mtRxHwwalaBLHZWGd10bTpoVmUionEoDQZuviVQ6WoVzNDOsHl~0yy0ilAOlhE7bkA4vHBJH0DbqU9dwhXfqlk6jw1xdyF0f33oy5zbojfG2QWYudfPu~cYNQINXjXYkZuoLCeasONMGowwLq3P1TygHCHF51hwYNk8gOjU0dslJ3zLmSMuhiEV3cmW2V2OTu0zfQmANaaxPYR-14ZtD7PkGhKKhgMQo6kBHsZkBqZQsc-HfhFMCRjiJeSb-UlF5I~pJ1kggf-mor3DrAaPZhP7ikYQBqvZSZnFpga9F46Saa4bffCCrUiL1kG9lJ93vZx2Q__" />
      </div>
      <div className="font-semibold text-xl text-[#2C2B2B] mt-20 ml-5 font-abc">
        Track your Goal
      </div>
      <div className="font-abc font-medium text-[#787878] text-md mt-3 ml-5 mr-5 w-[343px] h-[60px]">
        Don't worry if you have trouble determining your goals, We can help you
        determine your goals and track your goals
      </div>
      <Link to="/page2">
        <Button />
      </Link>
    </div>
  );
}
