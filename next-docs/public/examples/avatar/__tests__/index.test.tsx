/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Customization from '../Customization';
import StatusOrigin from '../StatusOrigin';
import Active from '../Active';
import Sizes from '../Sizes';
import Variants from '../Variants';
import Default from '../Default';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Avatar', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Variants', () => {
    const tree = render(<Variants />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Customization', () => {
    const tree = render(<Customization />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(<Sizes />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Active', () => {
    const tree = render(<Active />);
    expect(tree).toMatchSnapshot();
  });
  it('renders StatusOrigin', () => {
    const tree = render(<StatusOrigin />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Avatar in RTL', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Variants', () => {
    const tree = render(withRtl(<Variants />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Customization', () => {
    const tree = render(withRtl(<Customization />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(withRtl(<Sizes />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Active', () => {
    const tree = render(withRtl(<Active />));
    expect(tree).toMatchSnapshot();
  });
  it('renders StatusOrigin', () => {
    const tree = render(withRtl(<StatusOrigin />));
    expect(tree).toMatchSnapshot();
  });
});
