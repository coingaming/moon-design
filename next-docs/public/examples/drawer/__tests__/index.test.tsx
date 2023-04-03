/**
 * @jest-environment jsdom
 */

import { act, cleanup, fireEvent, render } from '@testing-library/react';
import '../../../../__mocks__/resizeObserver';
import Backdrop from '../Backdrop';
import Close from '../Close';
import Default from '../Default';
import Positions from '../Positions';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Drawer', () => {
  afterEach(cleanup);
  it('renders Default', async () => {
    const tree = render(<Default />);
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
  it('renders Positions', async () => {
    const tree = render(<Positions />);
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders Backdrop', async () => {
    const tree = render(<Backdrop />);
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
  it('renders Close', async () => {
    const tree = render(<Close />);
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
});

describe('Drawer in RTL', () => {
  afterEach(cleanup);
  it('renders Default', async () => {
    const tree = render(withRtl(<Default />));
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
  it('renders Positions', async () => {
    const tree = render(withRtl(<Positions />));
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders Backdrop', async () => {
    const tree = render(withRtl(<Backdrop />));
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
  it('renders Close', async () => {
    const tree = render(withRtl(<Close />));
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
});
