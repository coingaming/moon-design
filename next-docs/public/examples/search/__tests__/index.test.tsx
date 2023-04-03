/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Default from '../Default';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Search', () => {
  afterEach(cleanup);
  it('renders Default', async () => {
    const tree = render(<Default />);
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
