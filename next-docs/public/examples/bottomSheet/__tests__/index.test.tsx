/**
 * @jest-environment jsdom
 */

import { act, cleanup, fireEvent, render } from '@testing-library/react';
import '../../../../__mocks__/resizeObserver';
import Sizes from '../Sizes';
import Default from '../Default';
import Customization from '../Customization';
import WithDraghandle from '../WithDraghandle';
import WithTitle from '../WithTitle';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('BottomSheet', () => {
  afterEach(cleanup);
  it('renders Default', async () => {
    const tree = render(<Default />);
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
  it('renders Sizes', async () => {
    const tree = render(<Sizes />);
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders WithDraghandle', async () => {
    const tree = render(<WithDraghandle />);
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
  it('renders WithTitle', async () => {
    const tree = render(<WithTitle />);
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders Customization', async () => {
    const tree = render(<Customization />);
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
  it('renders Sizes', async () => {
    const tree = render(withRtl(<Sizes />));
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders WithDraghandle', async () => {
    const tree = render(withRtl(<WithDraghandle />));
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
  it('renders WithTitle', async () => {
    const tree = render(withRtl(<WithTitle />));
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders Customization', async () => {
    const tree = render(withRtl(<Customization />));
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
});
