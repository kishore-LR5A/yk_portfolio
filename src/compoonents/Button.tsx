import Link from "next/link";
import React from "react";
interface ButtonProps {
  text: string;
  path: string;
  variant: "sm" | "lg";
}
function Button({ text, path, variant }: ButtonProps) {
  // variant sizings
  const size = variant === "sm" ? "text-[13px]" : "text-[14px]";
  const padding = variant === "sm" ? "py-2 px-3" : "py-4 px-5";
  // final classNames
  const classes = `text-green cursor-pointer border border-green ${size} ${padding} rounded-[4px] hover:bg-green/10`;
  return (
    <Link href={path} className={classes} target="_blank">
      {text}
    </Link>
  );
}

export default Button;
