import React from 'react';
import styled, { CSSObject } from 'styled-components';
import { preToCodeBlock } from 'mdx-utils';
import { Link, Stack } from '@heathmont/moon-components';
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

const MarkdownStack = styled(Stack as any)({
  'ul, ol': {
    '&:not([class])': {
      marginLeft: rem(16),
    },
  },
});

/**
 * Map custom components to HTML provided by MDX
 * See: https://mdxjs.com/getting-started/
 */
export const mdxComponents = {
  wrapper: (props: any) => <MarkdownStack {...props} />,
  h1: ({ children }: Children) => (
    <h1 className="text-bulma text-4xl">{children}</h1>
  ),
  h2: ({ children }: Children) => (
    <h2 className="text-bulma text-3xl">{children}</h2>
  ),
  h3: ({ children }: Children) => (
    <h3 className="text-bulma text-2xl">{children}</h3>
  ),
  h4: ({ children }: Children) => (
    <h4 className="text-bulma text-xl">{children}</h4>
  ),
  h5: ({ children }: Children) => (
    <h5 className="text-bulma text-lg">{children}</h5>
  ),
  p: ({ children }: Children) => <p className="text-bulma mb-16">{children}</p>,
  a: ({ children, ...props }: Children) => (
    <a {...props} className="text-bulma">
      {children}
    </a>
  ),
  li: ({ children }: Children) => <li className="bg-pink text-bulma">{children}</li>,
  table: ({ children }: Children) => <Table>{children}</Table>,
  /* @TODO Revisit post-EPL */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  pre: (props: any) => {
    const codeProps = preToCodeBlock(props);
    return codeProps ? <Code {...codeProps} /> : <pre {...props} />;
  },
};
