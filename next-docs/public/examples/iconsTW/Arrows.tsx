import React from 'react';
import {
  ArrowsBoost,
  ArrowsBottomLeft,
  ArrowsBottomRight,
  ArrowsChevronDownDouble,
  ArrowsChevronLeftDouble,
  ArrowsChevronRightDouble,
  ArrowsChevronUpDouble,
  ArrowsDiagonalsBltr,
  ArrowsDiagonalsTlbr,
  ArrowsDown,
  ArrowsForward,
  ArrowsLeft,
  ArrowsLeftCurved,
  ArrowsLeftShort,
  ArrowsRefresh,
  ArrowsRemoveBoost,
  ArrowsReply,
  ArrowsRight,
  ArrowsRightCurved,
  ArrowsRightShort,
  ArrowsSorting,
  ArrowsTopLeft,
  ArrowsTopRight,
  ArrowsTransfer,
  ArrowsUp,
  ArrowsUpdate,
} from '@heathmont/moon-icons-tw';

import Icon from './Icon';

interface Props {
  wrapperProps: {
    onClick: (iconName: string) => void;
    selectedIcons: string[];
  };
  props: {
    className: string;
  };
}

const Example = ({ wrapperProps, props }: Props) => (
  <>
    <Icon {...wrapperProps} name="ArrowsBoost">
      <ArrowsBoost {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ArrowsBottomLeft">
      <ArrowsBottomLeft {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ArrowsBottomRight">
      <ArrowsBottomRight {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ArrowsChevronDownDouble">
      <ArrowsChevronDownDouble {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ArrowsChevronLeftDouble">
      <ArrowsChevronLeftDouble {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ArrowsChevronRightDouble">
      <ArrowsChevronRightDouble {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ArrowsChevronUpDouble">
      <ArrowsChevronUpDouble {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ArrowsDiagonalsBltr">
      <ArrowsDiagonalsBltr {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ArrowsDiagonalsTlbr">
      <ArrowsDiagonalsTlbr {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ArrowsDown">
      <ArrowsDown {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ArrowsForward">
      <ArrowsForward {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ArrowsLeft">
      <ArrowsLeft {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ArrowsLeftCurved">
      <ArrowsLeftCurved {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ArrowsLeftShort">
      <ArrowsLeftShort {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ArrowsRefresh">
      <ArrowsRefresh {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ArrowsRemoveBoost">
      <ArrowsRemoveBoost {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ArrowsReply">
      <ArrowsReply {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ArrowsRight">
      <ArrowsRight {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ArrowsRightCurved">
      <ArrowsRightCurved {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ArrowsRightShort">
      <ArrowsRightShort {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ArrowsSorting">
      <ArrowsSorting {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ArrowsTopLeft">
      <ArrowsTopLeft {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ArrowsTopRight">
      <ArrowsTopRight {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ArrowsTransfer">
      <ArrowsTransfer {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ArrowsUp">
      <ArrowsUp {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ArrowsUpdate">
      <ArrowsUpdate {...props} />
    </Icon>
  </>
);

export default Example;
