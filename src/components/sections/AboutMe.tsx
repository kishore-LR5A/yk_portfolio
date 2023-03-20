import { Icon } from "@ailibs/feather-react-ts";
import Link from "next/link";
import Image from "next/image";
import NumberedHeading from "../NumberedHeading";

function AboutMe() {
  return (
    <section
      id="About"
      // mx-[20px] sm:mx-[80px] md:mx-[150px]
      className="flex flex-col justify-center items-start py-[100px] "
    >
      {/* numbered heading */}
      <NumberedHeading number="01" title="About Me" />
      <div className="flex flex-col md:flex-row justify-between pt-5 space-y-3 md:space-x-3 ">
        {/* about me text */}
        <div className="font-calibri tracking-wide text-[14px] sm:text-[20px] text-slate flex flex-col space-y-4 w-full sm:w-3/5 ">
          <p className="leading-[1.3]">
            Hi there! My name is Yadava Kishore. I am a full stack web and
            mobile developer with a passion for all things tech. I have a
            special interest in blockchain and web3 technologies and that&apos;s
            what brought me to Myraid, where I worked as a web3 developer. I
            love building apps from scratch and bringing my ideas to life. Also
            I am skilled in using Flutter, a powerful framework for mobile app
            development.
          </p>
          <p className="leading-[1.3]">
            I am proficient in multiple programming languages, including
            JavaScript, TypeScript, Python, Dart, C++, Solidity and Go. I am
            always eager to learn and explore new technologies, and I am
            confident that I can create amazing things with my skills and
            experience. I am excited to continue growing my career and making an
            impact in the world of technology.
          </p>
          {/* Mostly used tech stack */}
          <p className="leading-[1.3]">
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <ul className="grid grid-cols-2 grid-rows-3 gap-x-3 gap-y-3 w-4/5 lg:w-3/5 sm:text-sm md:text-md lg:text-lg">
            {techStack.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className="cursor-pointer hover:text-green hover:underline underline-offset-2 "
              >
                <Icon
                  name="arrow-up-right"
                  className="inline mr-1 text-green"
                />
                {item.tech}
              </Link>
            ))}
          </ul>
        </div>
        {/* about me image */}
        <div className="flex justify-center items-start w-full sm:w-2/5 xs:pt-5 sm:pt-0">
          <Link
            href={"/profile-pic.jpeg"}
            className="relative group w-[250px] h-[250px] object-contain"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile-pic.jpeg"
              alt="about me"
              className="grayscale group-hover:grayscale-0 w-[250px] h-[250px] rounded-md"
            />
            <div className="absolute left-2 top-2 md:left-4 md:top-4 -z-10 group-hover:-translate-x-1 group-hover:-translate-y-1 rounded-md border border-green w-[250px] h-[250px] transition-all ease-in-out transform"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
interface TechStack {
  tech: string;
  link: string;
}
const techStack: TechStack[] = [
  {
    tech: "NextJs",
    link: "https://nextjs.org",
  },
  {
    tech: "Flutter",
    link: "https://flutter.dev/",
  },
  {
    tech: "FastAPI",
    link: "https://fastapi.tiangolo.com/",
  },
  {
    tech: "Node.js",
    link: "https://nodejs.org/",
  },
  {
    tech: "Ethereum",
    link: "https://ethereum.org/en/",
  },
  {
    tech: "Solidity",
    link: "https://soliditylang.org/",
  },
];
