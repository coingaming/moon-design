/**
 * @jest-environment jsdom
 */

import { act, cleanup, fireEvent, render } from '@testing-library/react';
import '../../../../__mocks__/resizeObserver';
import ArrowPositions from '../ArrowPositions';
import Default from '../Default';
import Customization from '../Customization';
import NotPortal from '../NotPortal';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Tooltip', () => {
  afterEach(cleanup);
  it('renders Default', async () => {
    const tree = render(<Default />);
    await act(() => fireEvent.focus(tree.getByText('Trigger')));
    expect(tree).toMatchSnapshot();
  });
  it('renders ArrowPositions', async () => {
    const tree = render(<ArrowPositions />);
    await act(() => fireEvent.focus(tree.getAllByText('Trigger')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders Customization', async () => {
    const tree = render(<Customization />);
    await act(() => fireEvent.focus(tree.getAllByText('Trigger')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders NotPortal', async () => {
    const tree = render(<NotPortal />);
    await act(() => fireEvent.focus(tree.getAllByText('Trigger')[0]));
    expect(tree).toMatchSnapshot();
  });
});

describe('Tooltip in RTL', () => {
  afterEach(cleanup);
  it('renders Default', async () => {
    const tree = render(withRtl(<Default />));
    await act(() => fireEvent.focus(tree.getByText('Trigger')));
    expect(tree).toMatchSnapshot();
  });
  it('renders ArrowPositions', async () => {
    const tree = render(withRtl(<ArrowPositions />));
    await act(() => fireEvent.focus(tree.getAllByText('Trigger')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders Customization', async () => {
    const tree = render(withRtl(<Customization />));
    await act(() => fireEvent.focus(tree.getAllByText('Trigger')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders NotPortal', async () => {
    const tree = render(withRtl(<NotPortal />));
    await act(() => fireEvent.focus(tree.getAllByText('Trigger')[0]));
    expect(tree).toMatchSnapshot();
  });
});
