/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Bg from '../Bg';
import Default from '../Default';
import Sizes from '../Sizes';
import Types from '../Types';
import States from '../States';
import Controled from '../Controled';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Input', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
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
  it('renders Bg', () => {
    const tree = render(<Bg />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Types', () => {
    const tree = render(<Types />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Controled', () => {
    const tree = render(<Controled />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Input in RTL', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(withRtl(<Default />));
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
  it('renders Bg', () => {
    const tree = render(withRtl(<Bg />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Types', () => {
    const tree = render(withRtl(<Types />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Controled', () => {
    const tree = render(withRtl(<Controled />));
    expect(tree).toMatchSnapshot();
  });
});
