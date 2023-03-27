/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Default from '../Default';
import FourChars from '../FourChars';
import OnlyDigits from '../OnlyDigits';
import ErrorState from '../ErrorState';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('AuthCode', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders FourChars', () => {
    const tree = render(<FourChars />);
    expect(tree).toMatchSnapshot();
  });
  it('renders OnlyDigits', () => {
    const tree = render(<OnlyDigits />);
    expect(tree).toMatchSnapshot();
  });
  it('renders ErrorState', () => {
    const tree = render(<ErrorState />);
    expect(tree).toMatchSnapshot();
  });
});

describe('AuthCode in RTL', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders FourChars', () => {
    const tree = render(withRtl(<FourChars />));
    expect(tree).toMatchSnapshot();
  });
  it('renders OnlyDigits', () => {
    const tree = render(withRtl(<OnlyDigits />));
    expect(tree).toMatchSnapshot();
  });
  it('renders ErrorState', () => {
    const tree = render(withRtl(<ErrorState />));
    expect(tree).toMatchSnapshot();
  });
});
