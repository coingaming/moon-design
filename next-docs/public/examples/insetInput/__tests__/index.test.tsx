/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Bg from '../Bg';
import Default from '../Default';
import Types from '../Types';
import States from '../States';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('InsetInput', () => {
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
  it('renders Types', () => {
    const tree = render(<Types />);
    expect(tree).toMatchSnapshot();
  });
});

describe('InsetInput in RTL', () => {
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
  it('renders Types', () => {
    const tree = render(withRtl(<Types />));
    expect(tree).toMatchSnapshot();
  });
});
