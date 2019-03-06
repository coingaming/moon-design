/** @jsx jsx */
import { Fragment } from 'react';
import { jsx, css } from '@emotion/core';
import hideVisually from 'polished/lib/mixins/hideVisually';
import { colors } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';
import { IconArrowLeft } from '../';

/**
 * Types
 *
 * 1. String or React Component.
 * 2. Allows us to pass in any props associated to the `element`.
 */
type HeaderBackProps = {
  element?: any /* [1] */;
  [key: string]: any /* [2] */;
};

/**
 * Component
 */
const HeaderBack: React.FC<HeaderBackProps> = ({
  children,
  element = 'a',
  ...props
}) =>
  jsx(element, {
    ...props,
    css: css({
      margin: `0 ${spacing()} ${spacing()} 0`,
      padding: 0,
      alignSelf: 'center',
      verticalAlign: 'middle',
      backgroundColor: 'transparent',
      border: 0,
      appearance: 'none',
    }),
    children: (
      <Fragment>
        <IconArrowLeft fontSize={spacing('medium')} color={colors.brand} />
        <span css={hideVisually}>{children}</span>
      </Fragment>
    ),
  });

export { HeaderBack };
