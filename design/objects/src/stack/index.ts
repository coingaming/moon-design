import styled from '@emotion/styled';
import { spacing, SpacingSize } from '@heathmont/sportsbet-utils';

export type StackProps = {
  space?: SpacingSize;
};

export const Stack = styled.div<StackProps>(({ space }) => ({
  '& > * + *': {
    marginTop: spacing(space),
  },
}));
