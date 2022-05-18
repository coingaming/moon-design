import React from 'react';
import { rem } from '@heathmont/moon-utils';
import hideVisually from 'polished/lib/mixins/hideVisually';
import styled from 'styled-components';
import SliderProps from '../private/types/SliderProps';
import setTransform from '../private/utils/setTransform';

const Input = styled.input<SliderProps>(
  ({ colorScheme, isRtl, theme: { colorNew }, size, button, switchWidth }) => ({
    ...hideVisually(),
    '&:checked + span': {
      backgroundColor: colorScheme ? undefined : colorNew.piccolo,
      '&::before': {
        backgroundColor: colorScheme ? undefined : colorNew.goten,
        left: rem(4),
        right: 'initial',
        transform: setTransform({ isRtl, size, switchWidth, button }),
      },
    },
  })
) as React.FC;

Input.defaultProps = {
  type: 'checkbox',
};

export default Input;
