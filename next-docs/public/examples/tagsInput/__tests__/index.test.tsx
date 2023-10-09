/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Default from '../Default';
import Sizes from '../Sizes';
import States from '../States';
import TagsCases from '../LowerCase';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Combobox', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(<Sizes />);
    expect(tree).toMatchSnapshot();
  });
  it('renders States', () => {
    const tree = render(<States />);
    expect(tree).toMatchSnapshot();
  });
  it('renders TagsCases', () => {
    const tree = render(<TagsCases />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Combobox in RTL', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', () => {
    const tree = render(withRtl(<Sizes />));
    expect(tree).toMatchSnapshot();
  });
  it('renders States', () => {
    const tree = render(withRtl(<States />));
    expect(tree).toMatchSnapshot();
  });
  it('renders TagsCases', () => {
    const tree = render(withRtl(<TagsCases />));
    expect(tree).toMatchSnapshot();
  });
});
