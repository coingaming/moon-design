import React from 'react';
import {
  TypeClosedHand,
  TypeDefault,
  TypeDrag,
  TypeHandPointing,
  TypeHelp,
  TypeMove,
  TypeNotAllowed,
  TypeOpenedHand,
  TypeText,
  TypeZoomIn,
  TypeZoomOut,
} from '@heathmont/moon-icons-tw';
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
    <Icon {...wrapperProps} name="TypeClosedHand">
      <TypeClosedHand {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TypeDefault">
      <TypeDefault {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TypeDrag">
      <TypeDrag {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TypeHandPointing">
      <TypeHandPointing {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TypeHelp">
      <TypeHelp {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TypeMove">
      <TypeMove {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TypeNotAllowed">
      <TypeNotAllowed {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TypeOpenedHand">
      <TypeOpenedHand {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TypeText">
      <TypeText {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TypeZoomIn">
      <TypeZoomIn {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TypeZoomOut">
      <TypeZoomOut {...props} />
    </Icon>
  </>
);

export default Example;
