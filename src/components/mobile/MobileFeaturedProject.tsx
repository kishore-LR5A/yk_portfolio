import { Icon } from "@ailibs/feather-react-ts";
import Link from "next/link";
import React from "react";
interface MobileFeaturedProjectProps {
  title: string;
  techStack: string[];
  description: string;
  githubLink: string;
  websiteLink: string;
}

function MobileFeaturedProject({
  title,
  techStack,
  description,
  githubLink,
  websiteLink,
}: MobileFeaturedProjectProps) {
  return (
    // bg-[url('/featured_project.png')] bg-cover bg-center bg-no-repeat
    <div className="flex flex-col justify-center space-y-4 p-[30px] text-slate text-[16px] bg-lightest_navy/10 shadow-xl ">
      {/* project title */}
      <div className="flex flex-col space-y-5">
        <p className="text-[14px] text-green font-sf_mono">Featured Project</p>
        <p className=" hover:text-green font-calibri_bold text-[24px]">
          {title}
        </p>
      </div>
      {/* project description */}
      <p className="leading-5">{description}</p>
      <div>
        {/* project tech stack */}
        <div className="flex flex-wrap">
          {techStack.map((tech, idx) => (
            <p key={idx} className="text-[14px] text-slate font-sf_mono pb-2 pr-2">
              {tech}
            </p>
          ))}
        </div>
      </div>
      {/* project links */}
      <div className="flex space-x-4">
        <Link href={githubLink}>
          <Icon
            name="github"
            className="hover:text-green cursor-pointer"
            size={22}
          />
        </Link>
        {websiteLink.length > 0 && (
          <Link href={websiteLink}>
            <Icon
              name="external-link"
              className="hover:text-green cursor-pointer"
              size={22}
            />
          </Link>
        )}
      </div>
    </div>
  );
}

export default MobileFeaturedProject;
