import React from "react";

const Headline = ({ text, classes }: { text: string, classes?: string }) => (<p
  className={`text-[32px] text-center font-semibold p-4 sm:text-left sm:text-moon-48 lg:text-[64px] lg:leading-[4.5rem] ${classes ?? ''}`}
  style={{ letterSpacing: typeof window !== 'undefined' && window.innerWidth <= 660 ? '-0.5px' : '-2px' }}
>{text}</p>);

export default Headline;
