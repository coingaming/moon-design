import styled from 'styled-components';
import { rem } from '@heathmont/sportsbet-utils';

import { Input } from '../private/input/input';

const FormComboInput = styled.div(({ theme: { radius } }) => ({
  [`${Input}`]: {
    borderRadius: rem(radius.largest),
  },
}));

export default FormComboInput;
