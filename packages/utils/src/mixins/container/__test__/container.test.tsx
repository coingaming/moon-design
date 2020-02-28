import * as React from 'react';
import styled, { CSSObject } from 'styled-components';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

const Example = styled.div<{ css: CSSObject }>(({ css }) => css);

import container from '../container';

describe('Container', () => {
  test('renders a rem-based container with number value', () => {
    expect(create(<Example css={container(300)} />)).toMatchSnapshot();
  });

  test('renders with custom padding number value', () => {
    expect(create(<Example css={container(300, 50)} />)).toMatchSnapshot();
  });

  test('renders with no padding', () => {
    expect(create(<Example css={container(300, 0)} />)).toMatchSnapshot();
  });
});
