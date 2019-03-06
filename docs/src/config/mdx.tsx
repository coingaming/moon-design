/** @jsx jsx */ jsx;
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import modularScale from 'polished/lib/helpers/modularScale';
import { preToCodeBlock } from 'mdx-utils';
import { Link } from '@heathmont/sportsbet-components';
import { border, colors, typography } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';
import { Code } from '../components/code';
import { Children } from '../types';

const modularScaleConfig = ['1rem', 'augFourth'];

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
      padding: `${spacing('small')} 0`,
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
    <h1
      css={[
        css({
          fontSize: modularScale(4, ...modularScaleConfig),
          lineHeight: 'normal',
        }),
      ]}
    >
      {children}
    </h1>
  ),
  h2: ({ children }: Children) => (
    <h2
      css={[
        css({
          fontSize: modularScale(3, ...modularScaleConfig),
          lineHeight: 'normal',
          fontWeight: typography.fontWeight.normal,
        }),
      ]}
    >
      {children}
    </h2>
  ),
  h3: ({ children }: Children) => (
    <h3
      css={[
        css({
          fontSize: modularScale(2, ...modularScaleConfig),
          lineHeight: 'normal',
          fontWeight: typography.fontWeight.semibold,
        }),
      ]}
    >
      {children}
    </h3>
  ),
  h4: ({ children }: Children) => (
    <h4
      css={[
        css({
          fontSize: modularScale(1, ...modularScaleConfig),
          lineHeight: 'normal',
          fontWeight: typography.fontWeight.semibold,
        }),
      ]}
    >
      {children}
    </h4>
  ),
  p: ({ children }: Children) => <p css={maxWidth}>{children}</p>,
  a: ({ children, ...props }: Children) => <Link {...props}>{children}</Link>,
  table: ({ children }: Children) => <Table>{children}</Table>,
  pre: (props: any) => {
    const codeProps = preToCodeBlock(props);
    return codeProps ? <Code {...codeProps} /> : <pre {...props} />;
  },
};
