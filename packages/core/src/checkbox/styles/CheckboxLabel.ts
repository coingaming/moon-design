import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

interface CheckboxLabelProps {
  variant?: Variants;
}

const CheckboxLabel = styled.label<CheckboxLabelProps>(
  ({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: rem(theme.space.small),
  }),
  ({ variant, theme }) => {
    if (variant === 'option') {
      return {
        padding: rem(20),
        '&:hover': {
          backgroundColor: theme.color.gohan[100],
        },
      };
    }
    return {
      width: 'fit-content',
    };
  }
);

export default CheckboxLabel;
