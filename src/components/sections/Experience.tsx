import React, { useState } from "react";
import JobCard, { JobCardProps } from "../JobCard";
import NumberedHeading from "../NumberedHeading";

function Experience() {
  // get company name from job card data
  const companyNames = JobCardData.map((job) => job.company);
  const [jobCardData, setJobCardData] = useState<JobCardProps>(JobCardData[0]);
  const handleJobCard = (jobIndex: number) => {
    setJobCardData(JobCardData[jobIndex]);
  };
  return (
    <section
      id="Experience"
      className="flex justify-start items-center w-full pt-[100px] tracking-wider md:translate-x-20"
    >
      <div className="flex flex-col w-full space-y-7 text-slate">
        <NumberedHeading number="02" title="Where I've worked" />
        {/* job cards section */}
        <div className="flex flex-col space-y-5 sm:space-y-0 sm:flex-row sm:space-x-10">
          {/* jobs col */}
          <div className="min-w-[150px] flex flex-col gap-0.5">
            {companyNames.map((company, index) => (
              <button
                key={index}
                onClick={() => handleJobCard(index)}
                className={`flex w-full items-center justify-between hover:text-green hover:bg-[#112240] p-3 font-sf_mono rounded-md ${
                  company === jobCardData.company && "bg-[#112240] text-green"
                }}`}
              >
                <p>{company}</p>
                {company === jobCardData.company && (
                  <span className="text-green">{">"}</span>
                )}
              </button>
            ))}
          </div>
          {/* job card */}
          <JobCard
            title={jobCardData.title}
            company={jobCardData.company}
            companyLink={jobCardData.companyLink}
            timespan={jobCardData.timespan}
            description={jobCardData.description}
            techStack={jobCardData.techStack}
          />
        </div>
      </div>
    </section>
  );
}

export default Experience;

const JobCardData: JobCardProps[] = [
  {
    title: "Technical Analyst",
    company: "Cunomial",
    companyLink: "https://www.cunomial.com/en",
    timespan: "July 2023 - Current",
    description: [
      "Designed and implemented fullstack responsive software applications with ReactJs, NextJs, NodeJs, Bun, ShadCn, and TailwindCSS.",
      "Rewrote the analytics section of the software for the major product and currently leading full-stack development of a CSR management platform.",
      "Reduced the Docker image size of a project by 30.7% using distroless technology.",
      "Introduced Bun, a Node.js drop-in replacement runtime environment, into the organization for backend development in newer projects. Currently using ElysiaJs, a Bun framework, for a production project.",
      "Proposed TypeScript adoption, significantly enhancing the maintainability and clarity of the codebase.",
    ],
    techStack: [
      "ReactJs",
      "NextJs",
      "NodeJs",
      "TailwindCSS",
      "ShadCn",
      "Bun",
      "ElysiaJs",
      "TypeScript",
      "Docker",
      "Java Spring Boot",
      "PostgresQL",
      "Redis",
      "Drizzle ORM"
    ],
  },
  {
    title: "Web3 Developer Intern",
    company: "Myriad",
    companyLink: "https://www.linkedin.com/company/myriadco/",
    timespan: "April 2022 - August 2022",
    description: [
      "Worked on client projects using React, Ethers.js, express.js and related technologies in production environment.",
      "Worked on smart contract integration with React using Web3.js and Ethers.js.",
      "Wrote frontend for projects using React from Figma designs. Manage and develop backends of Node.js frameworks.",
    ],
    techStack: [
      "React",
      "Typescript",
      "Solidity",
      "SCSS",
      "Node.js",
      "Ethers.js",
    ],
  },
];
