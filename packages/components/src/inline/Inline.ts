import styled, { CSSObject } from 'styled-components';
import { themed } from '@heathmont/moon-utils';
import { SpaceProps } from '@heathmont/moon-themes';

import inlineMixin from '../inlineMixin/inlineMixin';

type InlineSpace = CSSObject['marginLeft'];

export type InlineProps = {
  fontSize?: CSSObject['fontSize'];
  /**
   * Excepts a string value, number or a theme key.
   *
   * Theme keys are returned as a `rem`-based unit.
   *
   * e.g. `<Stack space="large" />` returns `space.large` as a rem unit.
   */
  space?: SpaceProps | InlineSpace;
};

const Inline = styled.div<InlineProps>(
  ({ fontSize, space = 'default', theme }) => ({
    ...inlineMixin(themed('space', space)(theme)),
    fontSize,
  })
);

export default Inline;
