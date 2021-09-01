import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

export const HeadingWrapper = styled.div(({ theme: { space } }) => ({
  display: 'flex',
  position: 'relative',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: rem(space.small),
}));
