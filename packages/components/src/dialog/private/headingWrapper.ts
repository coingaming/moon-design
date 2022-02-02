import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

export const HeadingWrapper = styled.div(({ theme: { space } }) => ({
  display: 'flex',
  position: 'relative',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: rem(space.small),
}));
