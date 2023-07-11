/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Customization from '../Customization';
import Default from '../Default';
import Form from '../Form';
import Sizes from '../Sizes';
import Disabled from '../Disabled';
import WithIcons from '../WithIcons';
import WithTooltip from '../WithTooltip';

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
  it('renders Customization', () => {
    const tree = render(<Customization />);
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
  it('renders WithTooltip', () => {
    const tree = render(<WithTooltip />);
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
  it('renders Customization', () => {
    const tree = render(withRtl(<Customization />));
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
  it('renders WithTooltip', () => {
    const tree = render(withRtl(<WithTooltip />));
    expect(tree).toMatchSnapshot();
  });
});
