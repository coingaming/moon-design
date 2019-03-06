/** @jsx jsx */
import * as React from 'react';
import { css, jsx } from '@emotion/core';
import {
  IconLeftArrowCurveRight,
  IconSettings,
} from '@heathmont/sportsbet-icons';
import { Toggle } from '../';
import { colors } from '@heathmont/sportsbet-tokens';
jsx;

type CardToggleProps = {
  back?: boolean;
};

/**
 * Styles
 */
const cardToggle = css({
  color: colors.neutral[20],
});

/**
 * Component
 */
const CardToggle: React.FC<CardToggleProps> = ({ back }) => {
  const icon = !back ? <IconSettings /> : <IconLeftArrowCurveRight />;

  return <Toggle css={cardToggle}>{icon}</Toggle>;
};

CardToggle.defaultProps = {
  back: false,
};

export { CardToggle };
