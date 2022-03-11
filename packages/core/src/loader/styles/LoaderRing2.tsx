import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import InnerCircle from './InnerCircle';
import OuterCircle from './OuterCircle';

type Props = {
  color?: ColorProps;
};

const LoaderRing2: React.FC<Props> = ({ color }) => {
  return (
    <OuterCircle>
      <InnerCircle color={color}></InnerCircle>
    </OuterCircle>
  );
};

export default LoaderRing2;
