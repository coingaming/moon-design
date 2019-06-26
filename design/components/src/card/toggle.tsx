/** @jsx jsx */
import * as React from 'react';
import { CSSObject, jsx } from '@emotion/core';
import {
  IconLeftArrowCurveRight,
  IconSettings,
} from '@heathmont/sportsbet-icons';
import { colors } from '@heathmont/sportsbet-tokens';
import { Toggle } from '..';

jsx;

type CardToggleProps = {
  back?: boolean;
  onClick?: () => void;
};

/**
 * Styles
 */
const cardToggle: CSSObject = {
  color: colors.neutral[20],
};

/**
 * Component
 */
const CardToggle: React.FC<CardToggleProps> = ({ back, onClick }) => {
  const icon = !back ? <IconSettings /> : <IconLeftArrowCurveRight />;

  return (
    <Toggle onClick={onClick} css={cardToggle}>
      {icon}
    </Toggle>
  );
};

CardToggle.defaultProps = {
  back: false,
};

export { CardToggle };
