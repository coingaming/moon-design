/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Default from '../Default';
import Direction from '../Direction';
import Sizes from '../Sizes';
import Variant from '../Variant';
import States from '../States';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Group', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Direction', () => {
    const tree = render(<Direction />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(<Sizes />);
    expect(tree).toMatchSnapshot();
  });
  it('renders States', () => {
    const tree = render(<States />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Variant', () => {
    const tree = render(<Variant />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Group in RTL', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Direction', () => {
    const tree = render(withRtl(<Direction />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(withRtl(<Sizes />));
    expect(tree).toMatchSnapshot();
  });
  it('renders States', () => {
    const tree = render(withRtl(<States />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Variant', () => {
    const tree = render(withRtl(<Variant />));
    expect(tree).toMatchSnapshot();
  });
});
