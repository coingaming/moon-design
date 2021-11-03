import React from 'react';
import styled from 'styled-components';
import { useTheme } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import { SvgProps } from './Props/SvgProps';

const Svg = ({ secondaryColor, ...rest }: SvgProps) => (
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
      d="M146.692 58.5224H81.8914V83.3229H146.692V58.5224Z"
      fill="currentColor"
    />
    <path
      opacity={0.1}
      d="M54.0301 117.201L42.2577 107.496L28 123.872H92.8005L95.312 94.7292L54.0301 117.201Z"
      fill="currentColor"
    />
    <path
      opacity={0.1}
      d="M56.9601 82.8523C63.0717 82.8523 68.0262 77.8979 68.0262 71.7863C68.0262 65.6747 63.0717 60.7202 56.9601 60.7202C50.8485 60.7202 45.894 65.6747 45.894 71.7863C45.894 77.8979 50.8485 82.8523 56.9601 82.8523Z"
      fill="currentColor"
    />
    <path
      opacity={0.1}
      d="M141.277 99.8304H114.593V124.631H141.277V99.8304Z"
      fill="currentColor"
    />
    <path
      d="M139.655 49H76.79V76.6782H139.655V49Z"
      stroke={secondaryColor}
      strokeWidth={2.61609}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M38.8306 106.815L44.0627 101.138C44.0627 101.138 50.8907 107.339 51.4401 106.815C51.9895 106.292 85.6324 93.4472 85.6324 93.4472"
      stroke="currentColor"
      strokeWidth={2.61609}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M28 113.748H96.4631"
      stroke={secondaryColor}
      strokeWidth={2.61609}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M113.52 113.147V104.043"
      stroke={secondaryColor}
      strokeWidth={2.61609}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M119.746 113.146V97.1096"
      stroke="currentColor"
      strokeWidth={2.61609}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M125.973 113.147V100.014"
      stroke={secondaryColor}
      strokeWidth={2.61609}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M132.199 113.146V94.075"
      stroke={secondaryColor}
      strokeWidth={2.61609}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M37.8364 62.8389C37.8364 59.6057 39.1208 56.5049 41.4071 54.2186C43.6933 51.9324 46.7942 50.6479 50.0274 50.6479"
      stroke={secondaryColor}
      strokeWidth={2.61609}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M50.0274 75.0298C47.6435 75.0325 45.3114 74.3347 43.3208 73.0231C41.3301 71.7115 39.7687 69.844 38.8306 67.6525"
      stroke="currentColor"
      strokeWidth={2.61609}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M62.2184 62.8393C62.2166 64.7662 61.7608 66.6656 60.8882 68.3836C60.0155 70.1017 58.7505 71.59 57.1956 72.7281"
      stroke={secondaryColor}
      strokeWidth={2.61609}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);

const Component = styled(Svg)<SvgProps>(
  ({ color, height, width, fontSize, verticalAlign, theme }) => ({
    ...(color && {
      color: themed('color', color)(theme),
    }),
    height,
    width,
    fontSize,
    verticalAlign,
  })
);

const TrackYourProgress: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const secondaryColor = theme.color.bulma[100];
  const attributes = { ...props, secondaryColor } as any;
  return <Component {...attributes} />;
};

TrackYourProgress.defaultProps = {
  verticalAlign: 'middle',
};
export default TrackYourProgress;
