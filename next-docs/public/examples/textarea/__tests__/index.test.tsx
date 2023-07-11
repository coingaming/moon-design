/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Default from '../Default';
import Disabled from '../Disabled';
import Customization from '../Customization';
import WithBtn from '../WithBtn';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Textarea', () => {
  afterEach(cleanup);
  it('renders Deafult', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const tree = render(<Disabled />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Customization', () => {
    const tree = render(<Customization />);
    expect(tree).toMatchSnapshot();
  });
  it('renders with button', () => {
    const tree = render(<WithBtn />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Textarea in RTL', () => {
  afterEach(cleanup);
  it('renders Deafult', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const tree = render(withRtl(<Disabled />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Customization', () => {
    const tree = render(withRtl(<Customization />));
    expect(tree).toMatchSnapshot();
  });
  it('renders with button', () => {
    const tree = render(withRtl(<WithBtn />));
    expect(tree).toMatchSnapshot();
  });
});
