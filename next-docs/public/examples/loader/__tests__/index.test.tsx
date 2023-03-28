/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Default from '../Default';
import Sizes from '../Sizes';
import Colors from '../Colors';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Loader', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(<Sizes />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Colors', () => {
    const tree = render(<Colors />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Loader in RTL', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(withRtl(<Sizes />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Colors', () => {
    const tree = render(withRtl(<Colors />));
    expect(tree).toMatchSnapshot();
  });
});
