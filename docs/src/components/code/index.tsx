import * as React from 'react';
import styled from 'styled-components';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import * as Assets from '@heathmont/moon-assets';
import * as Components from '@heathmont/moon-components';
import * as Utils from '@heathmont/moon-utils';
import { useTheme } from '@heathmont/moon-themes';

import { prismTheme } from './prism';

type CodeProps = {
  codeString: string;
  language: string;
  'react-live'?: boolean;
};

const CodeWrapper = styled.div(
  ({ theme: { border, color, radius, space } }) => ({
    display: 'block',
    border,
    borderColor: color.beerus[100],
    borderRadius: Utils.rem(radius.small),
    position: 'relative',
    overflow: 'hidden',
    '.prism-code:focus': {
      outline: 'none',
      boxShadow: `inset 0 0 3px ${color.piccolo[100]}`,
    },
    pre: {
      padding: Utils.rem(space.default),
      overflow: 'auto',
      marginBottom: '0',
    },
  })
);

const CodePreview = styled.div(
  ({ theme: { border, color, fontFamily, space } }) => ({
    padding: Utils.rem(space.large),
    minHeight: Utils.rem(space.large),
    fontFamily,
    borderBottom: border,
    borderColor: color.beerus[100],
    overflowY: 'scroll',
  })
);

export const Code = ({ codeString, ...props }: CodeProps) => {
  return (
    /* eslint-disable-next-line react/destructuring-assignment */
    props['react-live'] ? (
      <CodeWrapper>
        <LiveProvider
          code={codeString}
          scope={{
            ...Assets,
            ...Components,
            ...Utils,
            useTheme,
            styled,
          }}
          theme={prismTheme()}
        >
          <React.Fragment>
            <CodePreview>
              {typeof window !== 'undefined' && <LivePreview />}
            </CodePreview>
            <div css={{ overflowY: 'scroll' }}>
              <LiveEditor />
            </div>
            <LiveError />
          </React.Fragment>
        </LiveProvider>
      </CodeWrapper>
    ) : (
      <CodeWrapper>
        <Highlight
          {...defaultProps}
          code={codeString}
          language="jsx"
          theme={prismTheme()}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </CodeWrapper>
    )
  );
};
