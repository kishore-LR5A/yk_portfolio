import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <section
      id="Contact"
      className="flex justify-center items-center pt-[100px] pb-[250px] tracking-wider"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center space-y-2">
          <h1 className="fluid-md text-green font-sf_mono">
            04. What&apos;s Next?
          </h1>
          <h2 className="fluid-4xl text-lightest_slate font-calibri_bold">
            Get In Touch
          </h2>
        </div>
        <p className="xs:text-[14px] text-[20px] text-slate font-calibri text-center w-full sm:w-3/5 leading-[1.3] pb-10">
          I&apos;m currently looking for a full-time position as a fullstack web
          and mobile developer. If you&apos;re interested in working with me,
          please contact me at the email below.
        </p>
        {/* mail button */}
        <Link href="mailto:kishore.chodipilli@gmail.com" className="green-btn">
          Contact Me
        </Link>
      </div>
    </section>
  );
}

export default Contact;