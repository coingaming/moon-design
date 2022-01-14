import { Theme } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

interface CheckboxLabelProps {
  variant?: Variants;
}

const checkboxSize = (theme: Theme) => theme.newTokens.size.twoxsmall;

const CheckboxLabel = styled.label<CheckboxLabelProps>(
  ({ theme }) => ({
    display: 'inline-block',
    position: 'relative',
    alignItems: 'center',
    minHeight: checkboxSize(theme) /* [1] */,
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
