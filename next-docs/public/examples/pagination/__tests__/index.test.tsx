/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Default from '../Default';
import WithButtons from '../WithButtons';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Pagination', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders WithButtons', () => {
    const tree = render(<WithButtons />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Pagination in RTL', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders WithButtons', () => {
    const tree = render(withRtl(<WithButtons />));
    expect(tree).toMatchSnapshot();
  });
});
