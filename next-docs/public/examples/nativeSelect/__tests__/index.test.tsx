/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Bg from '../Bg';
import Default from '../Default';
import States from '../States';
import Sizes from '../Sizes';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('NativeSelect', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders States', () => {
    const tree = render(<States />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Bg', () => {
    const tree = render(<Bg />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(<Sizes />);
    expect(tree).toMatchSnapshot();
  });
});

describe('NativeSelect in RTL', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders States', () => {
    const tree = render(withRtl(<States />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Bg', () => {
    const tree = render(withRtl(<Bg />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(withRtl(<Sizes />));
    expect(tree).toMatchSnapshot();
  });
});
