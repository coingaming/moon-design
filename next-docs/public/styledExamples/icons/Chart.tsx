import React from 'react';
import {
  ChartArea,
  ChartBar,
  ChartBarAlternitive,
  ChartBarVertical,
  ChartDashboard,
  ChartFin,
  ChartLine,
  ChartPieChart,
  ChartRelation,
  ChartRound,
} from '@heathmont/moon-icons';

import Icon from './Icon';

interface Props {
  wrapperProps: {
    onClick: (iconName: string) => void;
    selectedIcons: string[];
  };
  props: {
    fontSize: string;
  };
}

const Example = ({ wrapperProps, props }: Props) => (
  <>
    <Icon {...wrapperProps} name="ChartArea">
      <ChartArea {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ChartBar">
      <ChartBar {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ChartBarAlternitive">
      <ChartBarAlternitive {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ChartBarVertical">
      <ChartBarVertical {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ChartDashboard">
      <ChartDashboard {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ChartFin">
      <ChartFin {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ChartLine">
      <ChartLine {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ChartPieChart">
      <ChartPieChart {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ChartRelation">
      <ChartRelation {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ChartRound">
      <ChartRound {...props} />
    </Icon>
  </>
);

export default Example;
