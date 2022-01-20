import { Theme } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

interface CheckboxLabelProps {
  variant?: Variants;
}

const CheckboxLabel = styled.label<CheckboxLabelProps>(
  ({ theme }) => ({
    display: 'inline-block',
    position: 'relative',
    alignItems: 'center',
    minHeight: theme.newTokens.size.twoxsmall /* [1] */,
  }),
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
