/** @jsx jsx */
import * as React from 'react';
import { jsx, CSSObject } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import { animation, colors } from '@heathmont/sportsbet-tokens';
jsx;

type SwitchProps = React.InputHTMLAttributes<HTMLInputElement> & {};

const switcher: CSSObject = {
  position: 'relative',
  display: 'inline-block',
  width: rem(64),
  height: rem(32),
};

const inputStyle: CSSObject = {
  opacity: 0,
  width: 0,
  height: 0,
  '&:checked + .slider': {
    backgroundColor: colors.brand,
  },
  '&:checked + .slider:before': {
    backgroundColor: colors.neutral[10],
    transform: 'translateX(32px)',
  },
};

const slider: CSSObject = {
  position: 'absolute',
  cursor: 'pointer',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: colors.neutral[70],
  transition: `${animation.speed.default}s`,
  borderRadius: rem(34),
  '&::before': {
    position: 'absolute',
    content: '""',
    height: rem(24),
    width: rem(24),
    left: rem(4),
    bottom: rem(4),
    backgroundColor: colors.neutral[20],
    transition: `${animation.speed.default}s`,
    borderRadius: '50%',
  },
};

const Switch: React.FC<SwitchProps> = props => {
  return (
    <label css={switcher}>
      <input css={inputStyle} type="checkbox" {...props} />
      <span css={slider} className="slider" />
    </label>
  );
};

export { Switch };
