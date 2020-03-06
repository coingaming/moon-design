import styled from 'styled-components';
import { rem } from '@heathmont/sportsbet-utils';

import { inputSpacingY } from '../private/input/settings';

const FormComboButton = styled.div(({ theme }) => ({
  position: 'absolute',
  right: rem(inputSpacingY(theme) / 2),
  top: rem(inputSpacingY(theme) / 2),
}));

export default FormComboButton;
