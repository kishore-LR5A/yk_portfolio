"use client";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import NavLink from "./NavLink";

function Navbar() {
  return (
    <div className="h-[80px] px-[50px] flex justify-between items-center w-full">
      {/* logo */}
      <Link href="/">
        <h1 className="text-3xl text-slate">yaadava_kishore</h1>
      </Link>
      <div className="flex justify-between items-center space-x-8 text-[13px]">
        {/* nav-links */}
        <div className="flex justify-between items-center space-x-3">
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
