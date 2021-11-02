import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';
import { Theme } from '@heathmont/moon-themes';

interface CheckboxLabelProps {
  variant?: Variants;
}

const checkboxSize = (theme: Theme) => theme.space.default;

const CheckboxLabel = styled.label<CheckboxLabelProps>(
  ({ theme }) => ({
    display: 'inline-block',
    position: 'relative',
    alignItems: 'center',
    minHeight: rem(checkboxSize(theme)) /* [1] */,
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
