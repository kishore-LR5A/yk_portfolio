import React from "react";
import FeaturedProject from "../FeaturedProject";
import MobileFeaturedProject from "../mobile/MobileFeaturedProject";
import NumberedHeading from "../NumberedHeading";

function Work() {
  return (
    <section
      id="Work"
      className="flex justify-start items-center w-full pt-[100px] tracking-wider"
    >
      <div className="flex flex-col w-full">
        <NumberedHeading number="03" title="Some Things I’ve Built." />
        {/* featured projects */}
        <div className="hidden sm:flex sm:flex-col sm:space-y-5">
          {featuredProjects.map((project, idx) => (
            <FeaturedProject
              key={idx}
              title={project.title}
              techStack={project.techStack}
              description={project.description}
              link={project.link}
              image={project.image}
              invert={project.invert}
            />
          ))}
        </div>
        {/* mobile featured projects */}
        <div className="flex flex-col space-y-5 pt-3 sm:hidden">
          {featuredProjects.map((project, idx) => (
            <MobileFeaturedProject
              key={idx}
              title={project.title}
              techStack={project.techStack}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;

const featuredProjects = [
  {
    title: "Portfolio",
    techStack: ["Next.js", "Tailwind_CSS", "Framer_Motion"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta nulla molestias! Necessitatibus, natus ratione. Voluptas id consequatur repudiandae nulla, doloremque facere, harum quaerat, minima deleniti repellendus aspernatur quasi ipsum.",
    link: "https://nextjs.org/",
    image: "/featured_project.png",
    invert: false,
  },
  {
    title: "Bomb Dashboard",
    techStack: ["Next.js", "Tailwind_CSS", "Framer_Motion"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta nulla molestias! Necessitatibus, natus ratione. Voluptas id consequatur repudiandae nulla, doloremque facere, harum quaerat, minima deleniti repellendus aspernatur quasi ipsum.",
    link: "https:bombdashboard.com",
    image: "/featured_project.png",
    invert: true,
  },
  {
    title: "Bomb Dashboard",
    techStack: ["Next.js", "Tailwind_CSS", "Framer_Motion"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis soluta nulla molestias! Necessitatibus, natus ratione. Voluptas id consequatur repudiandae nulla, doloremque facere, harum quaerat, minima deleniti repellendus aspernatur quasi ipsum.",
    link: "https:bombdashboard.com",
    image: "/featured_project.png",
    invert: false,
  },
];
