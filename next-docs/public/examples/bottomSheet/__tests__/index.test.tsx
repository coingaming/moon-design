/**
 * @jest-environment jsdom
 */

import { act, cleanup, fireEvent, render } from '@testing-library/react';
import '../../../../__mocks__/resizeObserver';
import LargeWithOptionalExtras from '../LargeWithOptionalExtras';
import Default from '../Default';
import CustomHeight from '../CustomHeight';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('BottomSheet', () => {
  afterEach(cleanup);
  it('renders Default', async () => {
    const tree = render(<Default />);
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
  it('renders LargeWithOptionalExtras', async () => {
    const tree = render(<LargeWithOptionalExtras />);
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
  it('renders CustomHeight', async () => {
    const tree = render(<CustomHeight />);
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
});

describe('BottomSheet in RTL', () => {
  afterEach(cleanup);
  it('renders Default', async () => {
    const tree = render(withRtl(<Default />));
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
  it('renders LargeWithOptionalExtras', async () => {
    const tree = render(withRtl(<LargeWithOptionalExtras />));
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
  it('renders CustomHeight', async () => {
    const tree = render(withRtl(<CustomHeight />));
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
});
