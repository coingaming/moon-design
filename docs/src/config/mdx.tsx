/** @jsx jsx */ jsx;
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { preToCodeBlock } from 'mdx-utils';
import { Heading, Link } from '@heathmont/sportsbet-components';
import { border, colors } from '@heathmont/sportsbet-tokens';
import * as Utils from '@heathmont/sportsbet-utils';
import { Code } from '../components/code';
import { Children } from '../types';

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
]);

/**
 * Map custom components to HTML provided by MDX
 * See: https://mdxjs.com/getting-started/
 */
export const mdxComponents = {
  h1: ({ children }: Children) => (
    <Heading element="h1" size="alpha">
      {children}
    </Heading>
  ),
  h2: ({ children }: Children) => (
    <Heading element="h2" size="charlie">
      {children}
    </Heading>
  ),
  h3: ({ children }: Children) => (
    <Heading element="h3" size="delta">
      {children}
    </Heading>
  ),
  h4: ({ children }: Children) => (
    <Heading element="h4" size="echo">
      {children}
    </Heading>
  ),
  p: ({ children }: Children) => <p css={maxWidth}>{children}</p>,
  a: ({ children, ...props }: Children) => <Link {...props}>{children}</Link>,
  table: ({ children }: Children) => <Table>{children}</Table>,
  pre: (props: any) => {
    const codeProps = preToCodeBlock(props);
    return codeProps ? <Code {...codeProps} /> : <pre {...props} />;
  },
};
