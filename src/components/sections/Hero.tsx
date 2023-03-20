import Link from "next/link";
import React from "react";
import Button from "../Button";

function Hero() {
  return (
    <section
      id="Hero"
      className="h-screen flex flex-col justify-center items-start text-white w-full"
    >
      {/* <h1 className="text-3xl text-slate font-calibri">Hero.</h1> */}
      <p className="text-green text-[16px] sm:text-[20px] font-sf_mono mb-4">
        Hi, my name is
      </p>
      <p className="text-lightest_slate text-[40px] sm:text-[50px] md:text-[80px] font-calibri_bold tracking-wide">
        Yadava Kishore.
      </p>
      <p className="text-slate text-[40px] sm:text-[50px] md:text-[50px] lg:text-[80px] font-calibri_bold tracking-wide">
        {/* I am a software engineer. */}I build things from end to end!
      </p>
      <p className="text-[14px] sm:text-[16px] mt-5 mb-10 [line-height:1.5] text-slate w-4/5 md:w-[65%]">
        I am a software engineer. I continuously try to adapt to new and future
        proof technologies. I like the world of blockchain and deep learning. I
        worked as a web3 developer intern at
        <Link
          href="https://www.linkedin.com/company/myriadco/"
          className="text-green"
        >
          {" "}
          Myriad
        </Link>
        .
      </p>
      <Button
        text="Check me in Github"
        path="https://github.com/kishore-LR5A/"
        variant="lg"
      />
    </section>
  );
}

export default Hero;
