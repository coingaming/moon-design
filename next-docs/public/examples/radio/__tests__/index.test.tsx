/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Default from '../Default';
import Disabled from '../Disabled';
import Customization from '../Customization';
import AsFormItem from '../AsFormItem';
import Uncontrolled from '../Uncontrolled';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Radio', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders WithLabel', () => {
    const tree = render(<Disabled />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Customization', () => {
    const tree = render(<Customization />);
    expect(tree).toMatchSnapshot();
  });
  it('renders AsFormItem', () => {
    const tree = render(<AsFormItem />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Uncontrolled', () => {
    const tree = render(<Uncontrolled />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Radio in RTL', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders WithLabel', () => {
    const tree = render(withRtl(<Disabled />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Customization', () => {
    const tree = render(withRtl(<Customization />));
    expect(tree).toMatchSnapshot();
  });
  it('renders AsFormItem', () => {
    const tree = render(withRtl(<AsFormItem />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Uncontrolled', () => {
    const tree = render(withRtl(<Uncontrolled />));
    expect(tree).toMatchSnapshot();
  });
});
