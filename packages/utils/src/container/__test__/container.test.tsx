import React from 'react';
import { create } from 'react-test-renderer';
import styled, { CSSObject } from 'styled-components';
import 'jest-styled-components';
import container from '../container';

const Example = styled.div<{ css: CSSObject }>(({ css }) => css);

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
