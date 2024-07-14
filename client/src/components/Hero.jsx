import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero">
      <div className="h-[calc(100vh-245px)] w-[calc(100vh-190px)] welocome  ml-6 bg-gradient-to-br flex flex-col items-center justify-center">
        <h1 className="texti text-5xl font-semibold">
          WELCOME TO
          <br />
          <span> ONLINE BOOK STORE</span>
        </h1>
        <p className="texti text-lg">
          Save more Book with coupons & up to 70% off!
        </p>
        <button className="texti">
          <Link to={"AllBook.jsp"} className="main_btn">
            Learn More
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Hero;
