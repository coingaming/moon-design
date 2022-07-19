import React from "react";

const Subtitle = ({ text, classes }: { text: string; classes?: string }) => (
  <p
    className={`text-moon-16 text-center px-3 pt-2 xl:text-moon-24  ${
      classes ?? ''
    }`}
  >
    {text}
  </p>
);

export default Subtitle;
