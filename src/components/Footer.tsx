import { Icon } from "@ailibs/feather-react-ts";
import React from "react";

function Footer() {
  return (
    <footer className="flex justify-center items-center w-full text-light_slate text-[13px] font-sf_mono py-6">
      <div className="flex flex-col justify-center items-center hover:text-green cursor-pointer">
        <p className="leading-[1.4]">Designed & Built by yaadava_kishore</p>
        <p className="leading-[1.4]">with Next.js & TailwindCSS</p>
      </div>
    </footer>
  );
}

export default Footer;
