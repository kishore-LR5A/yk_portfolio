import { Icon } from "@ailibs/feather-react-ts";
import Link from "next/link";
import React from "react";
export interface ProjectProps {
  title: string;
  techStack: string[];
  description: string;
  githubLink?: string;
  websiteLink?: string;
}
function Project({
  title,
  techStack,
  description,
  githubLink,
  websiteLink,
}: ProjectProps) {
  return (
    <div className="flex flex-col justify-between space-y-4 bg-[#112240] min-h-[350px] p-8 hover:-translate-y-2 transition-all duration-200 ease-in-out cursor-pointer">
      {/* links */}
      <div className="flex justify-between items-center w-full">
        {/* folder icon */}
        <Icon name="folder" size={48} className="text-green" strokeWidth={1} />
        <div className="flex justify-center space-x-2 text-slate">
          {/* github */}
          {githubLink && (
            <Link href={githubLink} className="hover:text-green">
              <Icon name="github" size={24} />
            </Link>
          )}
          {/* website */}
          {websiteLink && (
            <Link href={websiteLink} className="hover:text-green">
              <Icon name="external-link" size={24} />
            </Link>
          )}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col justify-center space-y-2">
          {/* title */}
          <h2 className="text-[18px] md:text-[22px] text-lightest_slate hover:text-green font-calibri_bold">
            {title}
          </h2>

          {/* description */}
          <p className="text-14 sm:text-[16px] text-light_slate text-ellipsis leading-5">
            {description}
          </p>
        </div>
      </div>
      {/* tech stack */}
      <p className="flex flex-wrap ">
        {techStack.map((tech, idx) => (
          <span key={idx} className="text-[12px] text-slate font-sf_mono pb-2 pr-2">
            {tech}
          </span>
        ))}
      </p>
    </div>
  );
}

export default Project;
