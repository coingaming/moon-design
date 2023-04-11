/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Default from '../Default';
import NoTransition from '../NoTransition';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Search', () => {
  afterEach(cleanup);
  it('renders Default', async () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });

  it('renders NoTransition', async () => {
    const tree = render(<NoTransition />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Search in RTL', () => {
  afterEach(cleanup);
  it('renders Default', async () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
});
