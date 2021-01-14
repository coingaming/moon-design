import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 198 263"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M81.1426 254.626C81.1426 250.076 85.0226 246.356 89.7726 246.356C94.5226 246.356 98.4026 250.076 98.4026 254.626C98.4026 259.176 94.5226 262.896 89.7726 262.896C85.0226 262.896 81.1426 259.386 81.1426 254.626ZM81.1426 8.646C81.1426 4.096 85.0226 0.375977 89.7726 0.375977C94.5226 0.375977 98.4026 4.096 98.4026 8.646C98.4026 13.196 94.5226 16.916 89.7726 16.916C85.0226 16.916 81.1426 13.396 81.1426 8.646ZM37.9926 49.986C37.9926 45.436 41.8726 41.716 46.6226 41.716C51.3726 41.716 55.2526 45.436 55.2526 49.986C55.2526 54.536 51.3726 58.256 46.6226 58.256C41.8726 58.256 37.9926 54.736 37.9926 49.986ZM41.6626 91.326C41.6626 88.636 43.8226 86.576 46.6226 86.576C49.4226 86.576 51.5826 88.646 51.5826 91.326C51.5826 94.016 49.4226 96.076 46.6226 96.076C43.8226 96.076 41.6626 94.016 41.6626 91.326ZM0.662598 91.326C0.662598 89.876 1.95259 88.636 3.46259 88.636C4.97259 88.636 6.2626 89.876 6.2626 91.326C6.2626 92.776 4.97259 94.016 3.46259 94.016C1.95259 94.016 0.662598 92.986 0.662598 91.326ZM0.662598 129.986C0.662598 128.536 1.95259 127.296 3.46259 127.296C4.97259 127.296 6.2626 128.536 6.2626 129.986C6.2626 131.436 4.97259 132.676 3.46259 132.676C1.95259 132.676 0.662598 131.426 0.662598 129.986ZM0.662598 174.016C0.662598 172.566 1.95259 171.326 3.46259 171.326C4.97259 171.326 6.2626 172.566 6.2626 174.016C6.2626 175.466 4.97259 176.706 3.46259 176.706C1.95259 176.706 0.662598 175.666 0.662598 174.016ZM41.6626 129.986C41.6626 127.296 43.8226 125.236 46.6226 125.236C49.4226 125.236 51.5826 127.306 51.5826 129.986C51.5826 132.676 49.4226 134.736 46.6226 134.736C43.8226 134.736 41.6626 132.666 41.6626 129.986ZM41.6626 174.016C41.6626 171.326 43.8226 169.266 46.6226 169.266C49.4226 169.266 51.5826 171.336 51.5826 174.016C51.5826 176.706 49.4226 178.766 46.6226 178.766C43.8226 178.766 41.6626 176.696 41.6626 174.016ZM37.9926 215.356C37.9926 210.806 41.8726 207.086 46.6226 207.086C51.3726 207.086 55.2526 210.806 55.2526 215.356C55.2526 219.906 51.3726 223.626 46.6226 223.626C41.8726 223.626 37.9926 220.106 37.9926 215.356ZM75.3126 47.916C75.3126 39.646 82.0026 34.066 89.7726 34.066C98.4026 34.066 104.233 40.476 104.233 47.916C104.233 55.356 97.5426 61.766 89.7726 61.766C81.1426 61.766 75.3126 55.356 75.3126 47.916ZM122.783 49.986C122.783 41.716 129.473 36.136 137.243 36.136C145.873 36.136 151.703 42.546 151.703 49.986C151.703 57.426 145.013 63.836 137.243 63.836C128.613 63.836 122.783 57.426 122.783 49.986ZM122.783 215.356C122.783 207.086 129.473 201.506 137.243 201.506C145.873 201.506 151.703 207.916 151.703 215.356C151.703 222.796 145.013 229.206 137.243 229.206C128.613 229.206 122.783 222.796 122.783 215.356ZM122.783 130.606C122.783 122.336 129.473 116.756 137.243 116.756C145.873 116.756 151.703 123.166 151.703 130.606C151.703 138.046 145.013 144.456 137.243 144.456C128.613 144.456 122.783 138.046 122.783 130.606ZM75.3126 213.286C75.3126 205.016 82.0026 199.436 89.7726 199.436C98.4026 199.436 104.233 205.846 104.233 213.286C104.233 220.726 97.5426 227.136 89.7726 227.136C81.1426 227.136 75.3126 220.726 75.3126 213.286ZM72.7226 87.196C72.7226 77.276 80.7026 70.866 89.7626 70.866C100.123 70.866 106.803 78.516 106.803 87.196C106.803 95.876 98.8226 103.526 89.7626 103.526C79.4126 103.726 72.7226 96.086 72.7226 87.196ZM72.7226 174.016C72.7226 164.096 80.7026 157.686 89.7626 157.686C100.123 157.686 106.803 165.336 106.803 174.016C106.803 182.696 98.8226 190.346 89.7626 190.346C79.4126 190.546 72.7226 182.896 72.7226 174.016ZM160.543 97.326C155.793 88.846 159.033 78.926 167.663 74.176C176.513 69.626 186.863 72.726 191.823 80.996C196.573 89.476 193.333 99.396 184.703 104.146C182.333 105.596 179.093 106.416 176.723 106.416C170.033 106.626 163.563 102.696 160.543 97.326ZM72.2926 138.866C66.9026 129.356 70.5626 118.196 80.4926 113.026C90.4126 107.856 102.073 111.376 107.463 120.876C112.853 130.386 109.193 141.546 99.2626 146.716C96.4626 148.366 93.0026 149.406 90.2026 149.406C83.0826 149.206 75.7426 145.076 72.2926 138.866ZM157.303 181.656C151.473 171.526 155.363 159.536 165.933 153.956C176.503 148.376 189.023 152.096 194.843 162.226C200.673 172.356 196.783 184.346 186.213 189.926C183.413 191.786 179.523 192.616 176.503 192.616C168.953 192.616 161.183 188.066 157.303 181.656Z"
      fill="#FF5111"
    />
  </svg>
);

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const LogoBitcasinoShort = styled(Svg)<SvgProps>(
  ({ color, height, width, fontSize, theme }) => ({
    ...(color && {
      color: themed('color', color)(theme),
    }),
    height,
    width,
    fontSize,
  })
);

export default LogoBitcasinoShort;
