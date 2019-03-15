/** @jsx jsx */
import { jsx } from '@emotion/core';
import { create } from 'react-test-renderer';
import { container } from '../';

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
});
