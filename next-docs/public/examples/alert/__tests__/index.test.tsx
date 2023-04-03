/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Default from '../Default';
import Customization from '../Customization';
import WithClose from '../WithClose';
import WithIcon from '../WithIcon';
import WithTitle from '../WithTitle';
import WithIconAndClose from '../WithIconAndClose';
import HandleClose from '../HandleClose';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Alert', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Customization', () => {
    const tree = render(<Customization />);
    expect(tree).toMatchSnapshot();
  });
  it('renders WithClose', () => {
    const tree = render(<WithClose />);
    expect(tree).toMatchSnapshot();
  });
  it('renders WithIcon', () => {
    const tree = render(<WithIcon />);
    expect(tree).toMatchSnapshot();
  });
  it('renders WithTitle', () => {
    const tree = render(<WithTitle />);
    expect(tree).toMatchSnapshot();
  });
  it('renders WithIconAndClose', () => {
    const tree = render(<WithIconAndClose />);
    expect(tree).toMatchSnapshot();
  });
  it('renders HandleClose', () => {
    const tree = render(<HandleClose />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Alert in RTL', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Customization', () => {
    const tree = render(withRtl(<Customization />));
    expect(tree).toMatchSnapshot();
  });
  it('renders WithClose', () => {
    const tree = render(withRtl(<WithClose />));
    expect(tree).toMatchSnapshot();
  });
  it('renders WithIcon', () => {
    const tree = render(withRtl(<WithIcon />));
    expect(tree).toMatchSnapshot();
  });
  it('renders WithTitle', () => {
    const tree = render(withRtl(<WithTitle />));
    expect(tree).toMatchSnapshot();
  });
  it('renders WithIconAndClose', () => {
    const tree = render(withRtl(<WithIconAndClose />));
    expect(tree).toMatchSnapshot();
  });
  it('renders HandleClose', () => {
    const tree = render(withRtl(<HandleClose />));
    expect(tree).toMatchSnapshot();
  });
});
