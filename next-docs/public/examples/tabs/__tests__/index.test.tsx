/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Default from '../Default';
import DefaultPills from '../DefaultPills';
import NoPanels from '../NoPanels';
import Segment from '../Segment';
import Sizes from '../Sizes';
import WithCustomStyles from '../WithCustomStyles';
import WithHandler from '../WithHandler';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Tabs', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Segment', () => {
    const tree = render(<Segment />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(<Sizes />);
    expect(tree).toMatchSnapshot();
  });
  it('renders DefaultPills', () => {
    const tree = render(<DefaultPills />);
    expect(tree).toMatchSnapshot();
  });
  it('renders NoPanels', () => {
    const tree = render(<NoPanels />);
    expect(tree).toMatchSnapshot();
  });
  it('renders WithCustomStyles', () => {
    const tree = render(<WithCustomStyles />);
    expect(tree).toMatchSnapshot();
  });
  it('renders WithHandler', () => {
    const tree = render(<WithHandler />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Tabs in RTL', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Segment', () => {
    const tree = render(withRtl(<Segment />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(withRtl(<Sizes />));
    expect(tree).toMatchSnapshot();
  });
  it('renders DefaultPills', () => {
    const tree = render(withRtl(<DefaultPills />));
    expect(tree).toMatchSnapshot();
  });
  it('renders NoPanels', () => {
    const tree = render(withRtl(<NoPanels />));
    expect(tree).toMatchSnapshot();
  });
  it('renders WithCustomStyles', () => {
    const tree = render(withRtl(<WithCustomStyles />));
    expect(tree).toMatchSnapshot();
  });
  it('renders WithHandler', () => {
    const tree = render(withRtl(<WithHandler />));
    expect(tree).toMatchSnapshot();
  });
});
