"use client";
import AboutMe from "@/components/sections/AboutMe";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";

export default function Home() {  
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
    </main>
  );
}
