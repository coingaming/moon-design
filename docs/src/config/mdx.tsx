import React from 'react';
import styled, { CSSObject } from 'styled-components';
import { preToCodeBlock } from 'mdx-utils';
import { Heading, Link, Stack } from '@heathmont/moon-components';
import { rem } from '@heathmont/moon-utils';

import { Code } from '../components/code';
import { Children } from '../types';

const maxWidth: CSSObject = {
  maxWidth: '40rem',
};

const Table = styled.table(
  ({ theme: { border, color, fontWeight, space } }) => ({
    width: '100%',
    ...maxWidth,
    thead: {
      color: color.bulma[100],
      fontWeight: fontWeight.semibold,
      borderBottom: border,
      borderBottomColor: color.trunks[100],
    },
    'th, td': {
      padding: `${rem(space.small)} 0`,
    },
  })
);

const MarkdownStack = styled(Stack)(({ theme: { space } }) => ({
  'ul, ol': {
    '&:not([class])': {
      marginLeft: rem(space.default),
    },
  },
}));

/**
 * Map custom components to HTML provided by MDX
 * See: https://mdxjs.com/getting-started/
 */
export const mdxComponents = {
  wrapper: (props: any) => <MarkdownStack {...props} />,
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
