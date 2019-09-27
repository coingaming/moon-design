/** @jsx jsx */
import { jsx } from '@emotion/core';
import { create } from 'react-test-renderer';

import { container } from '../container';

describe('Container', () => {
  test('renders correctly by default', () => {
    expect(create(<div css={container()} />)).toMatchSnapshot();
  });

  test('renders container key', () => {
    expect(create(<div css={container('large')} />)).toMatchSnapshot();
  });

  test('renders a rem-based container with number value', () => {
    expect(create(<div css={container(300)} />)).toMatchSnapshot();
  });

  test('renders with custom padding key', () => {
    expect(
      create(<div css={container('default', 'small')} />)
    ).toMatchSnapshot();
  });

  test('renders with custom padding number value', () => {
    expect(create(<div css={container('default', 50)} />)).toMatchSnapshot();
  });

  test('renders with no padding', () => {
    expect(create(<div css={container('default', 0)} />)).toMatchSnapshot();
  });
});
