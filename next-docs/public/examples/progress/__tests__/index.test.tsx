/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Default from '../Default';
import Customisation from '../Customisation';
import Values from '../Values';
import Sizes from '../Sizes';
import WithPin from '../WithPin';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Progress', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(<Sizes />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Values', () => {
    const tree = render(<Values />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Customisation', () => {
    const tree = render(<Customisation />);
    expect(tree).toMatchSnapshot();
  });
  it('renders WithPin', () => {
    const tree = render(<WithPin />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Progress in RTL', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(withRtl(<Sizes />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Values', () => {
    const tree = render(withRtl(<Values />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Customisation', () => {
    const tree = render(withRtl(<Customisation />));
    expect(tree).toMatchSnapshot();
  });
  it('renders WithPin', () => {
    const tree = render(withRtl(<WithPin />));
    expect(tree).toMatchSnapshot();
  });
});
