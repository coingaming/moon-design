/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Text from '../Text';
import Heading from '../Heading';
import Caption from '../Caption';
import Colors from '../Colors';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Typography', () => {
  afterEach(cleanup);
  it('renders Text', () => {
    const tree = render(<Text />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Heading', () => {
    const tree = render(<Heading />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Caption', () => {
    const tree = render(<Caption />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Colors', () => {
    const tree = render(<Colors />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Typography in RTL', () => {
  afterEach(cleanup);
  it('renders Text', () => {
    const tree = render(withRtl(<Text />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Heading', () => {
    const tree = render(withRtl(<Heading />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Caption', () => {
    const tree = render(withRtl(<Caption />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Colors', () => {
    const tree = render(withRtl(<Colors />));
    expect(tree).toMatchSnapshot();
  });
});
