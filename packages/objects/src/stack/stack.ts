import styled from 'styled-components';
import { spacing } from '@heathmont/sportsbet-utils';

type StackSpace = string | number;
type StackDirection = 'vertical' | 'horizontal';

export type StackProps = {
  space?: StackSpace;
  direction?: StackDirection;
};

export const stack = (
  space: StackSpace,
  direction: StackDirection = 'vertical'
) => {
  const margin = direction === 'vertical' ? 'marginTop' : 'marginLeft';

  const margins = {
    '& > * + *': {
      [margin]: space,
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
    '& > style:first-child + *': {
      [margin]: 0,
    },
  };

  return direction === 'vertical'
    ? {
        /**
         * If a browser supports the `grid-gap` property, let's use it.
         * Otherwise, fallback to the lobotomised owl selector to style children.
         */
        '@supports (grid-gap: 0)': {
          display: 'grid',
          gridGap: space,
        },
        '@supports not (grid-gap: 0)': {
          ...margins,
        },
      }
    : margins;
};

export const Stack = styled.div<StackProps>(
  ({ space = spacing('default'), direction = 'vertical' }) =>
    stack(space, direction)
);
