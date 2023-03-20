"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import Button from "./Button";
import NavLink from "./NavLink";
import { useReduxSelector, useReduxDispatch } from "redux/hooks";
import { toggleNav } from "redux/nav/navSlice";
import Link from "next/link";
import MobileNavLink from "./mobile/MobileNavLink";
import { socialMedia } from "./FloatingLinks";
import { Icon } from "@ailibs/feather-react-ts";

function Navbar() {
  const isOpen = useReduxSelector((state) => state.nav.isOpen);
  const dispatch = useReduxDispatch();
  // toggle mobile navbar function
  const toggleMobileNavbar = () => {
    dispatch(toggleNav());
    if (!isOpen) {
      navRef.current?.classList.remove("translate-x-full");
      navRef.current?.classList.add("-translate-x-0");
    }
    if (isOpen) {
      navRef.current?.classList.remove("-translate-x-0");
      navRef.current?.classList.add("translate-x-full");
    }
  };
  // mobile navbar reference
  const navRef = useRef<HTMLDivElement>(null);
  return (
    <div className="h-[80px] px-[50px] flex justify-between items-center w-full fixed top-0 left-0 backdrop-blur-3xl shadow-md z-50">
      {/* logo */}
      <Image
        src="/logo.png"
        width={70}
        height={70}
        alt="logo"
        priority={true}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="cursor-pointer"
      />
      <div className="hidden sm:flex justify-between items-center space-x-8 text-[13px]">
        {/* nav-links */}
        <div className="flex justify-between items-center space-x-5">
          {navLinks.map((navlink, idx) => (
            <NavLink
              key={idx}
              idx={idx + 1}
              text={navlink.text}
              scrollTo={navlink.scrollTo}
            />
          ))}
        </div>
        {/* Resume button */}
        <Button path="/resume.pdf" text="Resume" variant="sm" />
      </div>
      {/* mobile navbar */}
      <div className="pl-3 sm:hidden flex justify-between items-center space-x-5">
        <Icon
          name="menu"
          className="text-green w-8 h-8"
          onClick={toggleMobileNavbar}
        />
      </div>

      {/* mobile nav  */}
      <div
        className="translate-x-full fixed flex sm:hidden right-0 top-0 w-full h-screen z-10 transition-all ease-in-out transform"
        ref={navRef}
      >
        <div
          className="w-1/4 h-full backdrop-blur-sm"
          onClick={toggleMobileNavbar}
        ></div>
        <div className="flex flex-col justify-center items-center h-full w-3/4 bg-dark_navy">
          <Icon
            name="x"
            className="text-green absolute top-[25px] right-[50px] w-8 h-8"
            onClick={toggleMobileNavbar}
          />
          <div className="flex flex-col justify-center items-center space-y-5">
            {/* <NavLink key={0} idx={0 + 1} text={`${isOpen}`} scrollTo={"Home"} /> */}
            {navLinks.map((navlink, idx) => (
              <MobileNavLink
                key={idx}
                idx={idx + 1}
                text={navlink.text}
                scrollTo={navlink.scrollTo}
                toggleMobileNavbar={toggleMobileNavbar}
              />
            ))}
            {/* resume button */}
            <Button path="/resume.pdf" text="Resume" variant="sm" />
            {/* social links */}
            <div className="flex space-x-3">
              {socialMedia.map((social, idx) => (
                <Link key={idx} href={social.link} target="_blank">
                  <Icon
                    name={social.name}
                    size={22}
                    className="text-light_slate hover:-translate-y-1 hover:text-green transition-all duration-300 cursor-pointer"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// nav link objects
const navLinks = [
  {
    scrollTo: "About",
    text: "About",
  },
  {
    scrollTo: "Experience",
    text: "Experience",
  },
  {
    scrollTo: "Work",
    text: "Work",
  },
  {
    scrollTo: "Contact",
    text: "Contact",
  },
];
