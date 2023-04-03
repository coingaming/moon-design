/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Default from '../Default';
import CellBorder from '../CellBorder';
import RowGaps from '../RowGaps';
import RowSizes from '../RowSizes';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Table', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders CellBorder', () => {
    const tree = render(<CellBorder />);
    expect(tree).toMatchSnapshot();
  });
  it('renders RowGaps', () => {
    const tree = render(<RowGaps />);
    expect(tree).toMatchSnapshot();
  });
  it('renders RowSizes', () => {
    const tree = render(<RowSizes />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Table in RTL', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders CellBorder', () => {
    const tree = render(withRtl(<CellBorder />));
    expect(tree).toMatchSnapshot();
  });
  it('renders RowGaps', () => {
    const tree = render(withRtl(<RowGaps />));
    expect(tree).toMatchSnapshot();
  });
  it('renders RowSizes', () => {
    const tree = render(withRtl(<RowSizes />));
    expect(tree).toMatchSnapshot();
  });
});
