/** @jsx jsx */
import * as React from 'react';
import { css, jsx } from '@emotion/core';
import { Toggle } from '../';
jsx;

type CardToggleProps = {
  back?: boolean;
};

/**
 * Styles
 */
const cardToggle = css({
  /* Temporary styles until Icons implemented */
  fontSize: '0.9rem',
  lineHeight: '1.4rem',
});

/**
 * Component
 */
const CardToggle: React.FC<CardToggleProps> = ({ back }) => {
  const icon = !back ? '⚙️' : '↩️';

  return <Toggle css={cardToggle}>{icon}</Toggle>;
};

CardToggle.defaultProps = {
  back: false,
};

export { CardToggle };
