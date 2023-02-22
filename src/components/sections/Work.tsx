import React, { useEffect } from "react";
import FeaturedProject from "../FeaturedProject";
import MobileFeaturedProject from "../mobile/MobileFeaturedProject";
import NumberedHeading from "../NumberedHeading";
import Project, { ProjectProps } from "../Project";

function Work() {
  // projects data
  const [projects, setProjects] = React.useState<ProjectProps[]>(
    otherProjects.slice(0, 6)
  );
  // show more projects button state
  const [showMore, setShowMore] = React.useState(false);
  useEffect(() => {
    // set projects based on showMore state
    if (showMore) {
      setProjects(otherProjects);
    } else {
      setProjects(otherProjects.slice(0, 6));
    }
  }, [showMore]);
  // show more projects button click handler
  const handleShowMoreToggle = () => {
    setShowMore(!showMore);
  };

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
        {/* other projects */}
        <div className="flex flex-col justify-center items-center space-y-1 pt-[150px]">
          <h1 className="fluid-xl text-lightest_slate font-calibri_bold">
            Other Noteworthy Projects
          </h1>
          <p className="fluid-sm font-sf_mono text-green">view the archive</p>
        </div>
        {/* iterate over projects */}
        <div className="flex flex-col justify-center items-center space-y-6">
          <div
            // flex justify-center items-center space-x-5
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 pt-[50px]"
            id="projects"
          >
            {projects.map((project, idx) => (
              <Project
                key={idx}
                title={project.title}
                techStack={project.techStack}
                description={project.description}
                githubLink={project.githubLink}
                websiteLink={project.websiteLink}
              />
            ))}
          </div>
          {/* show more/less button */}
          <button
            className="text-green cursor-pointer border border-green text-[16px] py-4 px-5 rounded-[4px] hover:bg-green/10"
            onClick={handleShowMoreToggle}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
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

export const otherProjects: ProjectProps[] = [
  {
    title: "Project 1",
    techStack: ["React", "Next.js", "Tailwind CSS"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl.",
    githubLink: "https://nextjs.org/",
    websiteLink: "",
  },
  {
    title: "Project 2",
    techStack: ["React", "Next.js", "Tailwind CSS"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl.",
    githubLink: "",
    websiteLink: "https://nextjs.org/",
  },
  {
    title: "Project 3",
    techStack: ["React", "Next.js", "Tailwind CSS"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt,.",
    githubLink: "https://nextjs.org/",
    websiteLink: "https://nextjs.org/",
  },
  {
    title: "Project 4",
    techStack: ["React", "Next.js", "Tailwind CSS"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl.",
    githubLink: "https://nextjs.org/",
    websiteLink: "",
  },
  {
    title: "Project 5",
    techStack: ["React", "Next.js", "Tailwind CSS"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl.",
    githubLink: "",
    websiteLink: "https://nextjs.org/",
  },
  {
    title: "Project 6",
    techStack: ["React", "Next.js", "Tailwind CSS"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt,.",
    githubLink: "https://nextjs.org/",
    websiteLink: "https://nextjs.org/",
  },
  {
    title: "Project 7",
    techStack: ["React", "Next.js", "Tailwind CSS"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl.",
    githubLink: "https://nextjs.org/",
    websiteLink: "",
  },
  {
    title: "Project 8",
    techStack: ["React", "Next.js", "Tailwind CSS"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl.",
    githubLink: "",
    websiteLink: "https://nextjs.org/",
  },
  {
    title: "Project 9",
    techStack: ["React", "Next.js", "Tailwind CSS"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt,.",
    githubLink: "https://nextjs.org/",
    websiteLink: "https://nextjs.org/",
  },
  {
    title: "Project 10",
    techStack: ["React", "Next.js", "Tailwind CSS"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl.",
    githubLink: "",
    websiteLink: "https://nextjs.org/",
  },
  {
    title: "Project 11",
    techStack: ["React", "Next.js", "Tailwind CSS"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt,.",
    githubLink: "https://nextjs.org/",
    websiteLink: "https://nextjs.org/",
  },
];
