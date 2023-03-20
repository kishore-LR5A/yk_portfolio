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
              githubLink={project.githubLink}
              websiteLink={project.websiteLink}
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
              githubLink={project.githubLink}
              websiteLink={project.websiteLink}
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
    title: "Bomb Dashboard",
    techStack: ["ReactJs", "Tailwind_CSS", "Netlify"],
    description:
      "A dashboard integrated in Bomb.money website by aggregating all the data from different pages from overall website. A glimse and overview of all the data in one place.",
    githubLink:
      "https://github.com/kishore-LR5A/bomb-dashboard-yaadava_kishore",
    websiteLink: "https://bomb-dashboard-yaadava-kishore.netlify.app/",
    image: "/featured/bomb-dashboard.png",
    invert: false,
  },
  {
    title: "Portfolio",
    techStack: ["NextJs", "Tailwind_CSS", "Netlify"],
    description:
      "Portfolio website built using Next.js and Tailwind CSS. It is a single page application with a clean and minimalistic UI.",
    githubLink: "https://github.com/kishore-LR5A/yk_portfolio",
    websiteLink: "https://portfolio-yaadava-kishore.netlify.app/",
    image: "/featured/yk_portfolio.png",
    invert: true,
  },
  {
    title: "Medium Clone",
    techStack: ["NextJs", "Tailwind_CSS", "SanityCMS"],
    description:
      "A clone of Medium.com, built using Next.js, Sanity and Tailwind CSS. With Sanity, a headless content management system, any frontend can be connected to it.",
    githubLink: "https://github.com/kishore-LR5A/sanityCMS",
    websiteLink: "",
    image: "/featured/medium_clone.png",
    invert: false,
  },
  {
    title: "Edge Detection",
    techStack: ["Flutter", "Dart", "Sobel_Algorithm"],
    description:
      "A flutter mobile app that detects the edges of an image using Sobel algorithm. Image input can be from gallery, camera or even a network URL. It also stores and give a nice preview of all the images that have been processed.",
    githubLink: "https://github.com/kishore-LR5A/sanityCMS",
    websiteLink: "",
    image: "/featured/edge_detection.png",
    invert: true,
  },
];

export const otherProjects: ProjectProps[] = [
  {
    title: "Encrytped Chat App",
    techStack: ["NextJs", "FastAPI", "Cryptography"],
    description:
      "A chat app built using Next.js and FastAPI. It uses Prince cipher for encryption and decryption. It also has a feature to encrypt and decrypt data we pass. It uses sockets for sending data.",
    githubLink: "https://github.com/srilekhaK9120/Prince",
    websiteLink: "",
  },
  {
    title: "Medical Diagnosis App",
    techStack: ["Next.js", "Tailwind_CSS", "ML"],
    description:
      "A web app that uses machine learning to diagnose the disease based on the symptoms. It uses a dataset from kaggle. The model is trained using a Decision tree classifier.",
    githubLink: "https://github.com/kishore-LR5A/ds250_medical_diagnosis",
    websiteLink: "",
  },
  {
    title: "Smart Street Light(SSL) System",
    techStack: ["Deep_Learning", "Flutter", "ESP32"],
    description:
      "A smart street light system that uses deep learning to detect the presence of a person and turn on the light. It uses a deep learning model to detect the presence of a person or vehichles. It uses ESP32 to control the light.",
    githubLink: "https://github.com/kishore-LR5A/idp_ssl",
    websiteLink: "",
  },
  {
    title: "CNN Detection",
    techStack: ["Deep_Learning", "Jupyter_Notebooks"],
    description:
      "A deep learning project for detecting CNN generated images. It is a course project for CS550.",
    githubLink: "https://github.com/kishore-LR5A/ml_cs550",
    websiteLink: "",
  },
  {
    title: "Crypto View",
    techStack: ["Next.js", "Tailwind_CSS", "CoinGecko_API"],
    description:
      "A web app that shows the current price of cryptocurrencies. It uses CoinGecko API to fetch the data.",
    githubLink: "https://github.com/kishore-LR5A/crypto_view",
    websiteLink: "",
  },
];
