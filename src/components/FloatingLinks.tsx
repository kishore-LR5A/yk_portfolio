import { Icon } from "@ailibs/feather-react-ts";
import Link from "next/link";
import React from "react";
import FixedWrapper from "./FixedWrapper";

function FloatingLinks() {
  return (
    <>
      <FixedWrapper position="left">
        {socialMedia.map((social, idx) => (
          <Link key={idx} href={social.link} target="_blank">
            <Icon
              name={social.name}
              size={22}
              className="text-light_slate hover:-translate-y-1 hover:text-green transition-all duration-300 cursor-pointer"
            />
          </Link>
        ))}
      </FixedWrapper>
      <FixedWrapper position="right">
        <Link href="mailto:kishore.chodipilli@gmail.com">
          <p className="text-light_slate rotate-90 -translate-y-[95px] hover:scale-105 hover:text-green transition-all duration-300 cursor-pointer">
            kishore.chodipilli@gmail.com
          </p>
        </Link>
      </FixedWrapper>
    </>
  );
}

export default FloatingLinks;
interface SocialMedia {
  name: SocialMediaIconName;
  link: string;
}
const socialMedia: SocialMedia[] = [
  {
    name: "github",
    link: "https://github.com/kishore-LR5A",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/yadava-kishore-chodipilli-9077a91a5",
  },
  {
    name: "twitter",
    link: "/",
  },
  {
    name: "instagram",
    link: "/",
  },
  {
    name: "facebook",
    link: "/",
  },
];

// extract all names from above socialMedia array and create a type out of it
type SocialMediaIconName =
  | "github"
  | "linkedin"
  | "twitter"
  | "instagram"
  | "facebook";
