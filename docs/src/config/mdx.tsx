/** @jsx jsx */ jsx;
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { preToCodeBlock } from 'mdx-utils';
import { Heading, Link } from '@heathmont/sportsbet-components';
import { border, colors } from '@heathmont/sportsbet-tokens';
import * as Utils from '@heathmont/sportsbet-utils';
import { Code } from '../components/code';
import { Children } from '../types';

const verticalRhythm = css({
  marginTop: 0,
  marginBottom: Utils.spacing(),
});

const maxWidth = css({
  maxWidth: '40rem',
});

const Table = styled.table([
  {
    width: '100%',
    thead: {
      color: colors.neutral[20],
      borderBottom: `${border.width}px solid ${colors.neutral[30]}`,
    },
    'th, td': {
      padding: `${Utils.spacing('small')} 0`,
    },
  },
  maxWidth,
  verticalRhythm,
]);

/**
 * Map custom components to HTML provided by MDX
 * See: https://mdxjs.com/getting-started/
 */
export const mdxComponents = {
  h1: ({ children }: Children) => (
    <Heading element="h1" size="alpha" css={verticalRhythm}>
      {children}
    </Heading>
  ),
  h2: ({ children }: Children) => (
    <Heading element="h2" size="charlie" css={verticalRhythm}>
      {children}
    </Heading>
  ),
  h3: ({ children }: Children) => (
    <Heading element="h3" size="delta" css={verticalRhythm}>
      {children}
    </Heading>
  ),
  h4: ({ children }: Children) => (
    <Heading element="h4" size="echo" css={verticalRhythm}>
      {children}
    </Heading>
  ),
  p: ({ children }: Children) => (
    <p css={[verticalRhythm, maxWidth]}>{children}</p>
  ),
  a: ({ children, ...props }: Children) => <Link {...props}>{children}</Link>,
  table: ({ children }: Children) => <Table>{children}</Table>,
  pre: (props: any) => {
    const codeProps = preToCodeBlock(props);
    return codeProps ? <Code {...codeProps} /> : <pre {...props} />;
  },
};
