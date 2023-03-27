/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Default from '../Default';
import Variants from '../Variants';
import Sizes from '../Sizes';
import Icons from '../Icons';
import FullWidth from '../FullWidth';
import Disabled from '../Disabled';
import Animations from '../Animations';
import AsLink from '../AsLink';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Button', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders AsLink', () => {
    const tree = render(<AsLink />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Variants', () => {
    const tree = render(<Variants />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(<Sizes />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Icons', () => {
    const tree = render(<Icons />);
    expect(tree).toMatchSnapshot();
  });
  it('renders FullWidth', () => {
    const tree = render(<FullWidth />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const tree = render(<Disabled />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Animations', () => {
    const tree = render(<Animations />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Button in RTL', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders AsLink', () => {
    const tree = render(withRtl(<AsLink />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Variants', () => {
    const tree = render(withRtl(<Variants />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(withRtl(<Sizes />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Icons', () => {
    const tree = render(withRtl(<Icons />));
    expect(tree).toMatchSnapshot();
  });
  it('renders FullWidth', () => {
    const tree = render(withRtl(<FullWidth />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const tree = render(withRtl(<Disabled />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Animations', () => {
    const tree = render(withRtl(<Animations />));
    expect(tree).toMatchSnapshot();
  });
});
