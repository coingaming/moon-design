import React from 'react';
import styled from 'styled-components';
import Highlight, { defaultProps } from 'prism-react-renderer';
import {
  LiveProvider, LiveEditor, LiveError, LivePreview,
} from 'react-live';
import * as Assets from '@heathmont/moon-assets';
import * as Components from '@heathmont/moon-components';
import * as Utils from '@heathmont/moon-utils';
import * as Pagination from '@heathmont/moon-pagination';
import * as Sidebar from '@heathmont/moon-sidebar';
import * as Calendar from '@heathmont/moon-calendar';
import * as Table from '@heathmont/moon-table';
import * as Charts from '@heathmont/moon-charts';
import * as Core from '@heathmont/moon-core';
import * as Notifications from '@heathmont/moon-notifications';
import * as Popover from '@heathmont/moon-popover';
import * as Accordion from '@heathmont/moon-accordion';
import { useTheme } from '@heathmont/moon-themes';

import * as DraggableTable from '../../../../packages/draggabletable/src';

import { prismTheme } from './prism';

type CodeProps = {
  codeString: string;
  language: string;
  'react-live'?: boolean;
};

const CodeWrapper = styled.div(({ theme: { color, space } }) => ({
  display: 'block',
  backgroundColor: color.gohan[100],
  position: 'relative',
  // overflow: 'hidden',
  '.prism-code:focus': {
    outline: 'none',
    boxShadow: `inset 0 0 3px ${color.piccolo[100]}`,
  },
  pre: {
    padding: Utils.rem(space.default),
    overflow: 'auto',
    marginBottom: '0',
  },
}));

const CodePreview = styled.div(({ theme: { color, fontFamily, space } }) => ({
  padding: Utils.rem(space.large),
  minHeight: Utils.rem(space.large),
  fontFamily,
  borderBottom: `1px solid ${color.beerus[100]}`,
}));

export const Code = ({ codeString, ...props }: CodeProps) => (
  /* eslint-disable-next-line react/destructuring-assignment */
  props['react-live'] ? (
      <CodeWrapper>
        <LiveProvider
          code={codeString}
          scope={{
            ...Assets,
            ...Components,
            ...Core,
            ...Utils,
            ...Pagination,
            ...Sidebar,
            ...Calendar,
            ...Table,
            ...DraggableTable,
            ...Charts,
            ...Popover,
            ...Notifications,
            ...Accordion,
            useTheme,
            styled,
          }}
          theme={prismTheme()}
        >
          <React.Fragment>
            <CodePreview>
              {typeof window !== 'undefined' && <LivePreview />}
            </CodePreview>
            <div style={{ overflowY: 'scroll' }}>
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
          {({
            className, style, tokens, getLineProps, getTokenProps,
          }) => (
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
