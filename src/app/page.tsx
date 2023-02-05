"use client";
import AboutMe from "@/components/sections/AboutMe";
import Hero from "@/components/sections/Hero";

export default function Home() {
  const element = document.getElementById("About");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <main className="flex justify-center items-center flex-col px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px] lg:mx-[200px]">
      {/* Hero section */}
      <Hero />
      {/* about section */}
      <AboutMe />
      {/* Experience section */}
      <section
        id="Experience"
        className="h-screen flex justify-center items-center"
      >
        <h1 className="text-3xl text-slate font-calibri">Experience.</h1>
      </section>
      {/* Work section */}
      <section id="Work" className="h-screen flex justify-center items-center">
        <h1 className="text-3xl text-slate font-calibri">Work.</h1>
      </section>
      {/* Contact section */}
      <section
        id="Contact"
        className="h-screen flex justify-center items-center"
      >
        <h1 className="text-3xl text-slate font-calibri">Contact.</h1>
      </section>
    </main>
  );
}
