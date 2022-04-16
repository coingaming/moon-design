import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

import { Input } from '../private/input/input';

const FormComboInput = styled.div(({ theme: { radius } }) => ({
  [`${Input}`]: {
    borderRadius: rem(radius.largest),
  },
}));

export default FormComboInput;
