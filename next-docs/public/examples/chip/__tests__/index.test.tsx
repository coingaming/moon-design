/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Default from '../Default';
import Sizes from '../Sizes';
import Variants from '../Variants';
import Active from '../Active';
import Icons from '../Icons';
import IsStroke from '../IsStroke';
import IsStrokeIcons from '../IsStrokeIcons';
import OnClick from '../OnClick';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Chip', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(<Sizes />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Variants', () => {
    const tree = render(<Variants />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Active', () => {
    const tree = render(<Active />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Icons', () => {
    const tree = render(<Icons />);
    expect(tree).toMatchSnapshot();
  });
  it('renders IsStroke', () => {
    const tree = render(<IsStroke />);
    expect(tree).toMatchSnapshot();
  });
  it('renders IsStrokeIcons', () => {
    const tree = render(<IsStrokeIcons />);
    expect(tree).toMatchSnapshot();
  });
  it('renders OnClick', () => {
    const tree = render(<OnClick />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Chip in RTL', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(withRtl(<Sizes />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Variants', () => {
    const tree = render(withRtl(<Variants />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Active', () => {
    const tree = render(withRtl(<Active />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Icons', () => {
    const tree = render(withRtl(<Icons />));
    expect(tree).toMatchSnapshot();
  });
  it('renders IsStroke', () => {
    const tree = render(withRtl(<IsStroke />));
    expect(tree).toMatchSnapshot();
  });
  it('renders IsStrokeIcons', () => {
    const tree = render(withRtl(<IsStrokeIcons />));
    expect(tree).toMatchSnapshot();
  });
  it('renders OnClick', () => {
    const tree = render(withRtl(<OnClick />));
    expect(tree).toMatchSnapshot();
  });
});
