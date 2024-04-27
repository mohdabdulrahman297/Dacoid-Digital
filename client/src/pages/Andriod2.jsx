import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Andriod2() {
  return (
    <div className="w-[375px] h-[800px]">
      <Header />
      <div className="w-[352px] h-[234.6px] ml-3 mt-20">
        <img src="https://s3-alpha-sig.figma.com/img/9958/8bb7/dbf14a6d26ec54e2ba9e71eaef184f6b?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WaF8rMmvfqmePqO8U9FcI-Vj-rIs2-s2wBqi2eQU-eqSg4BT9mcxM9szMdI0l-Wx6339LRlvWmZxTo7DLkPgNY5TDpNfSrytPWvsbs7BQhx-qw579iY9Ku-U4OsgEJy-qrHnYY2XY4U4HdQRO7~bYooqRsx4Gkgy3y0WWQLGAIk3nQrhPuzhv-TaIBHiYpIoxK~S69VrUoN~bjuF3PJJ~MQY~1DYK29We51YBJ6e5P5Aft1AThbXiqrKivz8kn~NTpXZAjX7akU5N1zEPZjeoSl-O80YIJnW8udKSbgEG5nycAgUwlaqL0PdNkqh8wxmcGh3~PmJHFm03Wnmrd0sFA__" />
      </div>
      <div className="font-semibold text-xl text-[#2C2B2B] mt-28 ml-5 font-abc">
        Get Burn
      </div>
      <div className="font-abc font-medium text-[#787878] text-md mt-3 ml-5 mr-5 w-[343px] h-[60px]">
        Let’s keep burning to achieve your goals, it hurts only temporarily, if
        you give up now you will be in pain forever
      </div>
      <Link to="/4">
        <Button />
      </Link>
    </div>
  );
}
