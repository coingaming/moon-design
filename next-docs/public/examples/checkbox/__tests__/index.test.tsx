/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Default from '../Default';
import WithLabel from '../WithLabel';
import Checked from '../Checked';
import Customize from '../Customize';
import Disabled from '../Disabled';
import ReadOnly from '../ReadOnly';
import PartiallySelected from '../PartiallySelected';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Checkbox', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders WithLabel', () => {
    const tree = render(<WithLabel />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Checked', () => {
    const tree = render(<Checked />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const tree = render(<Disabled />);
    expect(tree).toMatchSnapshot();
  });
  it('renders ReadOnly', () => {
    const tree = render(<ReadOnly />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Customize', () => {
    const tree = render(<Customize />);
    expect(tree).toMatchSnapshot();
  });
  it('renders PartiallySelected', () => {
    const tree = render(<PartiallySelected />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Checkbox in RTL', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders WithLabel', () => {
    const tree = render(withRtl(<WithLabel />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Checked', () => {
    const tree = render(withRtl(<Checked />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const tree = render(withRtl(<Disabled />));
    expect(tree).toMatchSnapshot();
  });
  it('renders ReadOnly', () => {
    const tree = render(withRtl(<ReadOnly />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Customize', () => {
    const tree = render(withRtl(<Customize />));
    expect(tree).toMatchSnapshot();
  });
  it('renders PartiallySelected', () => {
    const tree = render(withRtl(<PartiallySelected />));
    expect(tree).toMatchSnapshot();
  });
});
