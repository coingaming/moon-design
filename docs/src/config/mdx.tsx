import React from 'react';
import styled, { CSSObject } from 'styled-components';
import { preToCodeBlock } from 'mdx-utils';
import { Stack } from '@heathmont/moon-components';
import { rem } from '@heathmont/moon-utils';

import { Code } from '../components/code';
import { Children } from '../types';

const maxWidth: CSSObject = {
  maxWidth: '40rem',
};

const Table = styled.table(
  ({ theme: { border, color, fontWeight, space } }) => ({
    backgroundColor: 'red',
    width: '100%',
    ...maxWidth,
    thead: {
      color: color.bulma[100],
      fontWeight: fontWeight.semibold,
      borderBottom: border,
      borderBottomColor: color.trunks[100],
    },
    'th, td': {
      backgroundColor: 'red',
      padding: `${rem(space.small)} 0`,
      color: color.bulma[100],
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

interface mdxComponentProps {
  id: string;
  children: Children;
}

/**
 * Map custom components to HTML provided by MDX
 * See: https://mdxjs.com/getting-started/
 */
export const mdxComponents = {
  wrapper: (props: any) => <MarkdownStack {...props} />,
  h1: ({ children, id }: mdxComponentProps) => (
    <h1 id={id} className="text-bulma text-4xl">
      {children}
    </h1>
  ),
  h2: ({ children, id }: mdxComponentProps) => (
    <h1 id={id} className="text-bulma text-2xl mt-8">
      {children}
    </h1>
  ),
  h3: ({ children, id }: mdxComponentProps) => (
    <h1 id={id} className="text-bulma text-xl mt-4">
      {children}
    </h1>
  ),
  h4: ({ children, id }: mdxComponentProps) => (
    <h1 id={id} className="text-bulma text-lg mt-2">
      {children}
    </h1>
  ),
  h5: ({ children, id }: mdxComponentProps) => (
    <h1 id={id} className="text-bulma text-lg">
      {children}
    </h1>
  ),
  p: ({ children }: Children) => <p className="text-bulma mb-4">{children}</p>,
  a: ({ children, ...props }: Children) => (
    <a {...props} className="text-bulma">
      {children}
    </a>
  ),
  li: ({ children }: Children) => <li className="text-bulma">{children}</li>,
  pre: (props: any) => {
    const codeProps = preToCodeBlock(props);
    return codeProps ? <Code {...codeProps} /> : <pre {...props} />;
  },
};
