import { Icon } from "@ailibs/feather-react-ts";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="flex justify-center items-center w-full text-light_slate text-[13px] font-sf_mono py-4">
      <div className="flex flex-col justify-center items-center hover:text-green cursor-pointer">
        <p className="leading-[1.4]">
          Design inspired from{" "}
          <Link href="https://brittanychiang.com/" className="underline">Brittany Chiang</Link>
        </p>
        <p className="leading-[1.4]">Build with Next.js & TailwindCSS</p>
      </div>
    </footer>
  );
}

export default Footer;
