import React from 'react';

const TypeDrag = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#TypeDrag_svg__filter0_d_3471:554)">
      <path
        d="M22.93 16.327l.307-.337-.307-.337-2.56-2.81-.87-.954v2.621h-7.01v-2.617l-.869.95-2.57 2.81-.308.337.308.338 2.57 2.81.87.95V17.49h7.01v2.601l.869-.954 2.56-2.81z"
        fill="currentColor"
        stroke="#fff"
      />
    </g>
    <defs>
      <filter
        id="TypeDrag_svg__filter0_d_3471:554"
        x={-2}
        y={0}
        width={36}
        height={36}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_3471:554"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_3471:554"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default TypeDrag;
