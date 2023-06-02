/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Background from '../Background';
import Default from '../Default';
import ContentOutside from '../ContentOutside';
import ContentHeader from '../ContentHeader';
import Sizes from '../Sizes';
import ContentOutsideSizes from '../ContentOutsideSizes';
import OpenDefault from '../OpenDefault';
import Disabled from '../Disabled';
import Single from '../Single';
import ControlOutside from '../ControlOutside';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Accordion', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders OpenDefault', () => {
    const tree = render(<OpenDefault />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Single', () => {
    const tree = render(<Single />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const tree = render(<Disabled />);
    expect(tree).toMatchSnapshot();
  });
  it('renders ContentOutside', () => {
    const tree = render(<ContentOutside />);
    expect(tree).toMatchSnapshot();
  });
  it('renders ContentHeader', () => {
    const tree = render(<ContentHeader />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(<Sizes />);
    expect(tree).toMatchSnapshot();
  });
  it('renders ContentOutsideSizes', () => {
    const tree = render(<ContentOutsideSizes />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Background', () => {
    const tree = render(<Background />);
    expect(tree).toMatchSnapshot();
  });
  it('renders toggle all outside', () => {
    const tree = render(<ControlOutside />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Accordion in RTL', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders OpenDefault', () => {
    const tree = render(withRtl(<OpenDefault />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Single', () => {
    const tree = render(withRtl(<Single />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const tree = render(withRtl(<Disabled />));
    expect(tree).toMatchSnapshot();
  });
  it('renders ContentOutside', () => {
    const tree = render(withRtl(<ContentOutside />));
    expect(tree).toMatchSnapshot();
  });
  it('renders ContentHeader', () => {
    const tree = render(withRtl(<ContentHeader />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(withRtl(<Sizes />));
    expect(tree).toMatchSnapshot();
  });
  it('renders ContentOutsideSizes', () => {
    const tree = render(withRtl(<ContentOutsideSizes />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Background', () => {
    const tree = render(withRtl(<Background />));
    expect(tree).toMatchSnapshot();
  });
  it('renders toggle all outside', () => {
    const tree = render(withRtl(<ControlOutside />));
    expect(tree).toMatchSnapshot();
  });
});
