import * as React from 'react';
import styled, { CSSObject } from 'styled-components';
import { preToCodeBlock } from 'mdx-utils';
import { Heading, Link, Stack } from '@heathmont/sportsbet-components';
import { border, colors, typography } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';

import { Code } from '../components/code';
import { Children } from '../types';

const maxWidth: CSSObject = {
  maxWidth: '40rem',
};

const Table = styled.table({
  width: '100%',
  ...maxWidth,
  thead: {
    color: colors.neutral[10],
    fontWeight: typography.fontWeight.semibold,
    borderBottom: `${border.width}px solid ${colors.neutral[20]}`,
  },
  'th, td': {
    padding: `${spacing('small')} 0`,
  },
});

/**
 * Markdown-specific CSS
 * Investigate re-applying to `global`.
 */
const markdownContent: CSSObject = {
  'ul, ol': {
    '&:not([class])': {
      marginLeft: spacing(),
    },
  },
};

/**
 * Map custom components to HTML provided by MDX
 * See: https://mdxjs.com/getting-started/
 */
export const mdxComponents = {
  wrapper: (props: any) => <Stack css={markdownContent} {...props} />,
  h1: ({ children }: Children) => (
    <Heading size="alpha" as="h1">
      {children}
    </Heading>
  ),
  h2: ({ children }: Children) => (
    <Heading size="bravo" as="h2">
      {children}
    </Heading>
  ),
  h3: ({ children }: Children) => (
    <Heading size="charlie" as="h3">
      {children}
    </Heading>
  ),
  h4: ({ children }: Children) => (
    <Heading size="delta" as="h4">
      {children}
    </Heading>
  ),
  h5: ({ children }: Children) => (
    <Heading size="echo" as="h5">
      {children}
    </Heading>
  ),
  p: ({ children }: Children) => <p css={maxWidth}>{children}</p>,
  a: ({ children, ...props }: Children) => <Link {...props}>{children}</Link>,
  table: ({ children }: Children) => <Table>{children}</Table>,
  /* @TODO Revisit post-EPL */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  pre: (props: any) => {
    const codeProps = preToCodeBlock(props);
    return codeProps ? <Code {...codeProps} /> : <pre {...props} />;
  },
};
