import React from 'react';

const CountriesIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#Countries_svg__clip0)">
      <path
        opacity={0.85}
        d="M20.225 39.909c11.03 0 19.97-8.94 19.97-19.97 0-11.029-8.94-19.97-19.97-19.97C9.197-.03.255 8.91.255 19.94c0 11.03 8.942 19.97 19.97 19.97z"
        fill="url(#Countries_svg__paint0_linear)"
      />
      <path
        opacity={0.8}
        d="M30.927 19.662l-.26 1.737a2.067 2.067 0 00.868 2.015 2.051 2.051 0 01.46 3.032l-6.002 7.113a2.05 2.05 0 01-3.405-.408l-.382-.755a2.05 2.05 0 010-1.894l.816-1.529a2.04 2.04 0 00.14-1.624l-.296-.869a2.05 2.05 0 00-1.737-1.398l-5.36-.504a2.066 2.066 0 01-1.607-1.103l-2.145-3.987a2.05 2.05 0 01.582-2.606l4.048-3.031a2.05 2.05 0 011.233-.417h4.117a2.058 2.058 0 011.564.73l1.659 1.962c.308.363.731.608 1.199.695l2.823.513a2.059 2.059 0 011.685 2.328zM12.642 8.526l1-3.84a2.059 2.059 0 00-2.954-2.336A19.978 19.978 0 006.927 34.89a2.058 2.058 0 003.353-2.033l-1.347-5.168a2.006 2.006 0 00-.469-.869l-5.377-5.95a2.067 2.067 0 01-.39-2.154l.816-2.05c.129-.34.344-.64.626-.869l7.817-6.236c.33-.267.569-.627.686-1.034zm10.667-6.35L22.64 4.61a2.024 2.024 0 00.443 1.91l5.68 6.41c.294.329.683.556 1.113.652l6.462 1.355a2.059 2.059 0 002.31-2.823A20.04 20.04 0 0025.916.752a2.076 2.076 0 00-2.606 1.424z"
        fill="url(#Countries_svg__paint1_linear)"
      />
    </g>
    <defs>
      <linearGradient
        id="Countries_svg__paint0_linear"
        x1={-53.211}
        y1={-47.055}
        x2={59.307}
        y2={-1.544}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1757FF" stopOpacity={0.7} />
        <stop offset={1} stopColor="#1757FF" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="Countries_svg__paint1_linear"
        x1={6.352}
        y1={23.518}
        x2={41.837}
        y2={23.705}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFD60A" />
        <stop offset={1} stopColor="#FFD60A" stopOpacity={0} />
      </linearGradient>
      <clipPath id="Countries_svg__clip0">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default CountriesIcon;
