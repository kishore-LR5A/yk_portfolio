"use client";
import AboutMe from "@/components/sections/AboutMe";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import { Icon } from "@ailibs/feather-react-ts";

export default function Home() {
  const element = document.getElementById("Hero");
  const onTop = () => {
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="flex justify-center items-center flex-col px-[25px] sm:px-[50px] md:px-[100px] lg:px-[250px] xl:mx-[150px]">
      {/* Hero section */}
      <Hero />
      {/* about section */}
      <AboutMe />
      {/* Experience section */}
      <Experience />
      {/* Work section */}
      <Work />
      {/* Contact section */}
      <Contact />
      {/* scroll to top button */}
      <button
        className="fixed bottom-5 right-20 z-50  bg-green/10 rounded-[8px] p-3 text-green hover:bg-green/20 cursor-pointer"
        onClick={onTop}
      >
        <Icon name="arrow-up" size={30} />
      </button>
    </main>
  );
}
