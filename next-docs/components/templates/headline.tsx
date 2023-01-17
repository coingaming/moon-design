import React from 'react';

const Headline = ({ text, classes }: { text: string; classes?: string }) => (
  <p
    className={`text-moon-32 text-center font-semibold p-4 sm:text-left sm:text-moon-48 md:text-moon-32 xl:text-moon-64 xl:leading-[4.5rem] ${
      classes ?? ''
    }`}
    style={{
      letterSpacing:
        typeof window !== 'undefined' && window.innerWidth <= 660
          ? '-0.5px'
          : '-2px',
    }}
  >
    {text}
  </p>
);

export default Headline;
