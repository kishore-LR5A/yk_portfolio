import React from "react";
interface Props {
  number: string;
  title: string;
}

function NumberedHeading({ number, title }: Props) {
  return (
    <div className="flex justify-start items-center">
      <p className="text-lightest_slate text-[22px] sm:text-[26px] md:text-[34px] font-calibri_bold">
        <span className="text-green font-sf_mono mr-[10px] text-[16px] sm:text-[22px] md:text-[26px]">
         {number}.
        </span>
        {title}
      </p>
      {/* divider */}
      <div className="h-[1px] w-full md:w-[200px] lg:w-[300px] bg-lightest_navy ml-[20px] flex-1 sm:flex-none"></div>
    </div>
  );
}

export default NumberedHeading;
