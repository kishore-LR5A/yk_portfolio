import { Icon } from "@ailibs/feather-react-ts";
import Link from "next/link";
import React from "react";
export interface JobCardProps {
  title: string;
  company: string;
  companyLink: string;
  timespan: string;
  description: string[];
  techStack: string[];
}
function JobCard({
  title,
  company,
  companyLink,
  timespan,
  description,
  techStack,
}: JobCardProps) {
  return (
    <div className="flex flex-col space-y-6 w-full sm:w-3/5 text-lightest_slate text-[14px] sm:text-[18px] tracking-wider font-calibri">
      <div className="flex flex-col space-y-2">
        {/* job title @ company */}
        <h1 className="text-lightest_slate text-[18px] sm:text-[22px] ">
          {title}{" "}
          <Link href={companyLink} className="text-green hover:underline ">
            @ {company}
          </Link>
        </h1>
        {/* timespan */}
        <h2>{timespan}</h2>
      </div>
      {/* description */}
      <ul className=" flex flex-col space-y-2">
        {description.map((desc, idx) => (
          <div key={idx} className="flex space-x-3">
            <Icon
              key={idx}
              name="triangle"
              className="text-green rotate-90 w-[10px] h-[10px]"
            />
            <li className="leading-[1.3]">{desc}</li>
          </div>
        ))}
      </ul>
      {/* tech stack */}
      <div className="text-lightest_slate text-[16px] flex flex-wrap space-y-1 space-x-2">
        {techStack.map((tech, idx) => (
          <span
            key={idx}
            className="p-2 bg-dark_navy rounded-lg cursor-pointer hover:text-green hover:font-bold transition-all duration-300 ease-in-out"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default JobCard;
