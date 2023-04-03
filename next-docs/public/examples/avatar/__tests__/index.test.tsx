/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Colours from '../Colours';
import StatusOrigin from '../StatusOrigin';
import Active from '../Active';
import Sizes from '../Sizes';
import Variants from '../Variants';
import Default from '../Default';
import Rounded from '../Rounded';

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
  it('renders Rounded', () => {
    const tree = render(<Rounded />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Colours', () => {
    const tree = render(<Colours />);
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
  it('renders Rounded', () => {
    const tree = render(withRtl(<Rounded />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Colours', () => {
    const tree = render(withRtl(<Colours />));
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
