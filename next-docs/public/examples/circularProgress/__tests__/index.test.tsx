/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Default from '../Default';
import Colors from '../Colors';
import Values from '../Values';
import Sizes from '../Sizes';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('CircularProgress', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(<Sizes />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Values', () => {
    const tree = render(<Values />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Colors', () => {
    const tree = render(<Colors />);
    expect(tree).toMatchSnapshot();
  });
});

describe('CircularProgress in RTL', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(withRtl(<Sizes />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Values', () => {
    const tree = render(withRtl(<Values />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Colors', () => {
    const tree = render(withRtl(<Colors />));
    expect(tree).toMatchSnapshot();
  });
});
