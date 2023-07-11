/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Default from '../Default';
import WithButtons from '../WithButtons';
import WithHref from '../WithHref';

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
  it('renders WithHref', () => {
    const tree = render(<WithHref />);
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
  it('renders WithHref', () => {
    const tree = render(withRtl(<WithHref />));
    expect(tree).toMatchSnapshot();
  });
});
