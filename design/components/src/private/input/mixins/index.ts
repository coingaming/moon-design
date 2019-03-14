import { CSSObject } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import { inputColors, inputSpacing, inputAnimationSpeed } from '../settings';

const inputFloatContent: CSSObject = {
  paddingTop: rem(inputSpacing + 7),
  paddingBottom: rem(inputSpacing - 7),
};

const inputFloatLabel: CSSObject = {
  position: 'absolute',
  left: rem(inputSpacing),
  top: '50%',
  transform: 'translateY(-50%)',
  transformOrigin: 'top left',
  transition: `transform ${inputAnimationSpeed} ease`,
  color: inputColors.label,
  pointerEvents: 'none',
};

const inputFloatLabelActive: CSSObject = {
  transform: 'translateY(-90%) scale(0.75)',
};

export { inputFloatContent, inputFloatLabel, inputFloatLabelActive };
