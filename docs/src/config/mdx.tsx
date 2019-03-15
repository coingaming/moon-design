/** @jsx jsx */ jsx;
import { jsx, CSSObject } from '@emotion/core';
import styled from '@emotion/styled';
import modularScale from 'polished/lib/helpers/modularScale';
import { preToCodeBlock } from 'mdx-utils';
import { Heading, Link } from '@heathmont/sportsbet-components';
import { border, colors, typography } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';
import { Code } from '../components/code';
import { Children } from '../types';

const modularScaleConfig = ['1rem', 'augFourth'];

const maxWidth: CSSObject = {
  maxWidth: '40rem',
};

const Table = styled.table([
  {
    width: '100%',
    ...maxWidth,
    thead: {
      color: colors.neutral[20],
      borderBottom: `${border.width}px solid ${colors.neutral[30]}`,
    },
    'th, td': {
      padding: `${spacing('small')} 0`,
    },
  },
]);

/**
 * Map custom components to HTML provided by MDX
 * See: https://mdxjs.com/getting-started/
 */
export const mdxComponents = {
  h1: ({ children }: Children) => (
    <Heading size="alpha" element="h1">
      {children}
    </Heading>
  ),
  h2: ({ children }: Children) => (
    <Heading size="bravo" element="h2">
      {children}
    </Heading>
  ),
  h3: ({ children }: Children) => (
    <Heading size="charlie" element="h3">
      {children}
    </Heading>
  ),
  h4: ({ children }: Children) => (
    <Heading size="delta" element="h4">
      {children}
    </Heading>
  ),
  h5: ({ children }: Children) => (
    <Heading size="echo" element="h5">
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
