/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import CustomBg from '../CustomBg';
import Default from '../Default';
import Form from '../Form';
import Sizes from '../Sizes';
import Disabled from '../Disabled';
import WithIcons from '../WithIcons';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Switch in Light Theme', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(<Sizes />);
    expect(tree).toMatchSnapshot();
  });
  it('renders CustomBg', () => {
    const tree = render(<CustomBg />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Form', () => {
    const tree = render(<Form />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const tree = render(<Disabled />);
    expect(tree).toMatchSnapshot();
  });
  it('renders WithIcons', () => {
    const tree = render(<WithIcons />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Switch in RTL', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(withRtl(<Sizes />));
    expect(tree).toMatchSnapshot();
  });
  it('renders CustomBg', () => {
    const tree = render(withRtl(<CustomBg />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Form', () => {
    const tree = render(withRtl(<Form />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const tree = render(withRtl(<Disabled />));
    expect(tree).toMatchSnapshot();
  });
  it('renders WithIcons', () => {
    const tree = render(withRtl(<WithIcons />));
    expect(tree).toMatchSnapshot();
  });
});
