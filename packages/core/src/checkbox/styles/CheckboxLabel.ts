import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import type Variants from '../private/Variants';

interface CheckboxLabelProps {
  variant?: Variants;
}

const CheckboxLabel = styled.label<CheckboxLabelProps>(
  {
    display: 'inline-block',
    position: 'relative',
    alignItems: 'center',
    minHeight: rem(16) /* [1] */,
  },
  ({ variant, theme }) => {
    if (variant === 'option') {
      return {
        padding: rem(20),
        '&:hover': {
          backgroundColor: theme.colorNew.gohan,
        },
      };
    }
    return {
      width: 'fit-content',
    };
  }
);

export default CheckboxLabel;
