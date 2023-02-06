/* eslint-disable @next/next/no-img-element */
import { Icon } from "@ailibs/feather-react-ts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface FeaturedProjectProps {
  title: string;
  techStack: string[];
  description: string;
  link: string;
  image: string;
  invert: boolean;
}
function FeaturedProject({
  title,
  techStack,
  description,
  link,
  image,
  invert,
}: FeaturedProjectProps) {
  return (
    <div
      className={`relative py-[50px] flex flex-col ${
        invert ? "items-start" : "items-end"
      } justify-center space-y-6 text-light_slate font-calibri`}
    >
      {/* project Heading */}
      <div
        className={`flex flex-col ${
          invert ? "items-start" : "items-end"
        } justify-center space-y-2`}
      >
        <p className="text-[14px] text-green font-sf_mono">Featured Project</p>
        {/* project title */}
        <Link
          href={link}
          className="text-lightest_slate hover:text-green text-[28px] font-calibri_bold"
        >
          {title}
        </Link>
      </div>
      {/* project description */}
      <div
        className={`bg-[#112240] p-[25px] ${
          invert ? "text-left" : "text-right"
        } text-[18px] md:w-3/4 lg:w-1/2 z-10`}
      >
        <p>{description}</p>
      </div>
      {/* project tech stack */}
      <div className="flex space-x-2">
        {techStack.map((tech, idx) => (
          <p key={idx} className="text-[14px] text-slate font-sf_mono">
            {tech}
          </p>
        ))}
      </div>
      {/* project image */}
      <Link
        href={link}
        className={`absolute ${
          invert ? "right-0" : "left-0"
        } top-0 bottom-0 cursor-pointer`}
      >
        <div className="relative w-full ">
          <div className="hidden lg:block absolute top-0 bottom-0 left-0 right-0 bg-green/10 hover:bg-transparent rounded-[10px] transition-all duration-300 ease-in-out"></div>
          <img
            className="md:w-[300px] lg:w-[600px] rounded-[10px]"
            src={image}
            alt="featured project"
            // width={600}
            // height={600}
            style={{ objectFit: "fill" }}
          />
        </div>
      </Link>
      {/* github and external website links */}
      <div className="flex space-x-4">
        <Link href={link}>
          <Icon
            name="github"
            className="hover:text-green cursor-pointer"
            size={22}
          />
        </Link>
        <Link href={""}>
          <Icon
            name="external-link"
            className="hover:text-green cursor-pointer"
            size={22}
          />
        </Link>
      </div>
    </div>
  );
}

export default FeaturedProject;
