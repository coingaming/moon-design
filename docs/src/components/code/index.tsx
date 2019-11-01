import * as React from 'react';
import styled from 'styled-components';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import * as Assets from '@heathmont/sportsbet-assets';
import * as Components from '@heathmont/sportsbet-components';
import * as Icons from '@heathmont/sportsbet-icons';
import { border, colors, typography } from '@heathmont/sportsbet-tokens';
import * as Objects from '@heathmont/sportsbet-objects';
import * as Utils from '@heathmont/sportsbet-utils';

import { prismTheme, syntaxStyles } from './prism';
// @ts-ignore

type CodeProps = {
  codeString: string;
  language: string;
  'react-live'?: boolean;
};

const codeBorder = `${border.width}px solid ${colors.neutral[40]}`;

const CodeWrapper = styled.div({
  display: 'block',
  border: codeBorder,
  borderRadius: border.radius.small,
  position: 'relative',
  overflow: 'hidden',
  '.prism-code:focus': {
    outline: 'none',
    boxShadow: `inset 0 0 3px ${colors.brand}`,
  },
  ...syntaxStyles,
});

const CodePreview = styled.div({
  padding: Utils.spacing('large'),
  minHeight: Utils.spacing('xlarge'),
  fontFamily: typography.fontFamily,
  borderBottom: codeBorder,
  overflowY: 'scroll',
});

/* Ensures that we can use `css` props + not have to worry about wrapper divs */
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */

export const Code = ({ codeString, ...props }: CodeProps) =>
  /* @TODO Revisit post-EPL */
  /* eslint-disable-next-line react/destructuring-assignment */
  props['react-live'] ? (
    <CodeWrapper>
      <LiveProvider
        code={codeString}
        scope={{
          ...Assets,
          ...Components,
          ...Icons,
          ...Objects,
          ...Utils,
          colors,
          styled,
        }}
        theme={prismTheme}
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
        theme={prismTheme}
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
  );
