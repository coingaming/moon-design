/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Default from '../Default';
import States from '../States';
import Customization from '../Customization';
import WithBtn from '../WithBtn';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Textarea', () => {
  afterEach(cleanup);
  it('renders Deafult', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders States', () => {
    const tree = render(<States />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Customization', () => {
    const tree = render(<Customization />);
    expect(tree).toMatchSnapshot();
  });
  it('renders WithBtn', () => {
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
  it('renders States', () => {
    const tree = render(withRtl(<States />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Customization', () => {
    const tree = render(withRtl(<Customization />));
    expect(tree).toMatchSnapshot();
  });
  it('renders WithBtn', () => {
    const tree = render(withRtl(<WithBtn />));
    expect(tree).toMatchSnapshot();
  });
});
