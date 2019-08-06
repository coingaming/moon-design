import styled from '@emotion/styled';
import { spacing, SpacingSize } from '@heathmont/sportsbet-utils';

const disableSSRWarning = (selector: string) =>
  `${selector} /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */`;

export type StackProps = {
  space?: SpacingSize;
};

export const Stack = styled.div<StackProps>(({ space }) => ({
  '& > * + *': {
    marginTop: spacing(space),
  },
  /**
   * With Emotion's 'out of the box' SSR set-up, <style/> tags are injected
   * inline above each element with styles on first load.
   *
   * This means that if the first-child of <Stack/> has styles, the first-child
   * of <Stack/> will  be a <style/> tag, then the actual first-child - in this
   * case the first-child becomes the second and inherits the 'marginTop'.
   *
   * For now, if the first-child is a <style/> tag on load, let's make sure
   * the adjacent element to it (our actual first-child), has an enforced
   * 'marginTop' of 0.
   * https://github.com/emotion-js/emotion/issues/1178
   */
  [disableSSRWarning('& > style:first-child + *')]: {
    marginTop: 0,
  },
}));
