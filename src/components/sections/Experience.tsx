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
          <div className="flex space-x-1 sm:space-x-0 sm:flex sm:flex-col sm:space-y-1 sm:w-[100px] xs:h-[40px] sm:h-full overflow-hidden">
            {companyNames.map((company, index) => (
              <button
                key={index}
                onClick={() => handleJobCard(index)}
                className={`flex items-center space-x-2 hover:text-green hover:bg-[#112240] p-3 font-sf_mono rounded-md ${
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
    title: "Web3 Developer Intern",
    company: "Myriad",
    companyLink: "https://www.linkedin.com/company/myriadco/",
    timespan: "April 2022 - August 2022",
    description: [
      "Worked on client projects using React, Ethers.js, express.js and related technologies in production environment.",
      "Worked on smart contract integration with React using Web3.js and Ethers.js.",
      "Wrote frontend for projects using React from Figma designs. Manage and develop backends of Node.js frameworks.",
    ],
    techStack: ["React", "Javascript", "Solidity", "SCSS", "Node.js","Ethers.js"],
  },
];
