import * as React from 'react';
import styled, { CSSObject } from 'styled-components';
import 'jest-styled-components';
import { create } from 'react-test-renderer';

import { listPlain, listPlainItem, listInline, listInlineItem } from '../..';

const Example = styled.div<{ css: CSSObject }>(({ css }) => css);

describe('Lists', () => {
  describe('listPlain', () => {
    test('resets list-style-type correctly', () => {
      const list = create(
        <div>
          <Example as="ul" css={listPlain}>
            <Example as="li" css={listPlainItem}>
              Item 1
            </Example>
            <Example as="li" css={listPlainItem}>
              Item 2
            </Example>
            <Example as="li" css={listPlainItem}>
              Item 3
            </Example>
          </Example>
          <Example as="ol" css={listPlain}>
            <Example as="li" css={listPlainItem}>
              Item 1
            </Example>
            <Example as="li" css={listPlainItem}>
              Item 2
            </Example>
            <Example as="li" css={listPlainItem}>
              Item 3
            </Example>
          </Example>
        </div>
      );

      expect(list).toMatchSnapshot();
    });
  });

  describe('listInline', () => {
    test('renders lists inline', () => {
      const list = create(
        <div>
          <Example as="ul" css={listInline}>
            <Example as="li" css={listInlineItem}>
              Item 1
            </Example>
            <Example as="li" css={listInlineItem}>
              Item 2
            </Example>
            <Example as="li" css={listInlineItem}>
              Item 3
            </Example>
          </Example>
          <Example as="ol" css={listInline}>
            <Example as="li" css={listInlineItem}>
              Item 1
            </Example>
            <Example as="li" css={listInlineItem}>
              Item 2
            </Example>
            <Example as="li" css={listInlineItem}>
              Item 3
            </Example>
          </Example>
        </div>
      );

      expect(list).toMatchSnapshot();
    });
  });
});
