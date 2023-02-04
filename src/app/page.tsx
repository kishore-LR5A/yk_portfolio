"use client";
export default function Home() {
  return (
    <main className="p-[30px]">
      {/* Hero section */}
      <section
        id="Hero"
        className="h-screen flex flex-col justify-center items-center text-white"
      >
        <h1 className="text-3xl text-slate font-calibri">Hero.</h1>
      </section>

      {/* about section */}
      <section id="About" className="h-screen flex justify-center items-center">
        <h1 className="text-3xl text-slate font-calibri">About.</h1>
      </section>
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
