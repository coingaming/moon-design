import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

import { inputSpacingY } from '../private/input/settings';

const FormComboButton = styled.div(({ theme }) => ({
  position: 'absolute',
  right: rem(inputSpacingY(theme) / 2),
  top: rem(inputSpacingY(theme) / 2),
}));

export default FormComboButton;
