/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import OneItem from '../OneItem';
import TwoItems from '../TwoItems';
import FourItems from '../FourItems';
import Collapsed from '../Collapsed';
import CustomDivider from '../CustomDivider';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Breadcrumb', () => {
  afterEach(cleanup);
  it('renders OneItem', () => {
    const tree = render(<OneItem />);
    expect(tree).toMatchSnapshot();
  });
  it('renders TwoItems', () => {
    const tree = render(<TwoItems />);
    expect(tree).toMatchSnapshot();
  });
  it('renders FourItems', () => {
    const tree = render(<FourItems />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Collapsed', () => {
    const tree = render(<Collapsed />);
    expect(tree).toMatchSnapshot();
  });
  it('renders with custom divider', () => {
    const tree = render(<CustomDivider />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Breadcrumb in RTL', () => {
  afterEach(cleanup);
  it('renders OneItem', () => {
    const tree = render(withRtl(<OneItem />));
    expect(tree).toMatchSnapshot();
  });
  it('renders TwoItems', () => {
    const tree = render(withRtl(<TwoItems />));
    expect(tree).toMatchSnapshot();
  });
  it('renders FourItems', () => {
    const tree = render(withRtl(<FourItems />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Collapsed', () => {
    const tree = render(withRtl(<Collapsed />));
    expect(tree).toMatchSnapshot();
  });
  it('renders with custom divider', () => {
    const tree = render(withRtl(<CustomDivider />));
    expect(tree).toMatchSnapshot();
  });
});
