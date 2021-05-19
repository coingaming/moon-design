import React from 'react';
import styled from 'styled-components';
import { ColorProps, useTheme } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = ({ secondaryColor, ...rest }: any) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 174 174"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      opacity={0.1}
      d="M111.915 117.009C111.901 116.025 111.642 115.06 111.162 114.201C127.095 99.181 134.285 79.413 136.568 56.9972H72.6533C74.936 79.413 82.0351 99.181 97.9681 114.201C97.4083 115.172 97.1506 116.288 97.2279 117.406C97.3051 118.524 97.7138 119.594 98.4018 120.478H87.8103V131.321H121.251V120.478H110.728C111.483 119.478 111.899 118.262 111.915 117.009Z"
      fill="currentColor"
    />
    <path
      d="M90.9148 102.787C108.788 87.4707 116.595 66.7897 118.946 43.1413H55.0312C57.3139 66.7897 65.1891 87.4707 83.0396 102.787"
      stroke={secondaryColor}
      strokeWidth={2.28267}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M78.1545 114.292C78.1545 110.092 95.8224 110.092 95.8224 114.292"
      stroke={secondaryColor}
      strokeWidth={2.28267}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M67.1521 126.801H106.665"
      stroke={secondaryColor}
      strokeWidth={2.28267}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M50.6256 91.7163C51.5034 92.5941 52.694 93.0872 53.9354 93.0872C55.1769 93.0872 56.3675 92.5941 57.2453 91.7163C58.1231 90.8384 58.6163 89.6478 58.6163 88.4064C58.6163 87.1649 58.1231 85.9743 57.2453 85.0965C57.2453 85.0965 27.4793 69.6885 28.1413 55.5587"
      stroke={secondaryColor}
      strokeWidth={2.28267}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M35.0122 62.4297C38.8069 62.4297 41.883 59.3535 41.883 55.5589C41.883 51.7642 38.8069 48.688 35.0122 48.688C31.2175 48.688 28.1414 51.7642 28.1414 55.5589C28.1414 59.3535 31.2175 62.4297 35.0122 62.4297Z"
      stroke="currentColor"
      strokeWidth={2.28267}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M123.397 91.7163C122.519 92.5941 121.329 93.0872 120.087 93.0872C118.846 93.0872 117.655 92.5941 116.777 91.7163C115.9 90.8384 115.406 89.6478 115.406 88.4064C115.406 87.1649 115.9 85.9743 116.777 85.0965C116.777 85.0965 146.452 69.6885 145.859 55.5587"
      stroke={secondaryColor}
      strokeWidth={2.28267}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M138.988 62.4297C142.782 62.4297 145.859 59.3535 145.859 55.5589C145.859 51.7642 142.782 48.688 138.988 48.688C135.193 48.688 132.117 51.7642 132.117 55.5589C132.117 59.3535 135.193 62.4297 138.988 62.4297Z"
      stroke="currentColor"
      strokeWidth={2.28267}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
  verticalAlign?: string;
};

const Component = styled(Svg)<SvgProps>(
  ({
    color, height, width, fontSize, verticalAlign, theme,
  }) => ({
    ...(color && {
      color: themed('color', color)(theme),
    }),
    height,
    width,
    fontSize,
    verticalAlign,
  }),
);

const TiersAndRewards: React.FC<any> = (props) => {
  const theme = useTheme();
  return <Component secondaryColor={theme.color.bulma[100]} {...props} />;
};

TiersAndRewards.defaultProps = {
  verticalAlign: 'middle',
};
export default TiersAndRewards;
