import React from "react";

const Subtitle = ({ text, classes }: { text: string; classes?: string }) => (<p
  className={`text-[16px] text-center px-3 pt-2 lg:text-moon-24 sm:text-moon-16 ${classes ?? ''}`}
>{text}</p>);

export default Subtitle;
