/**
 * @jest-environment jsdom
 */

import { act, cleanup, fireEvent, render } from '@testing-library/react';
import '../../../../__mocks__/resizeObserver';
import Default from '../Default';
import Positions from '../Positions';
import Options from '../Options';
import Semantics from '../Semantics';
import Customization from '../Customization';
import AutoClose from '../AutoClose';
import Queue from '../Queue';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Snackbar', () => {
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
  it('renders Options', async () => {
    const tree = render(<Options />);
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders Semantics', async () => {
    const tree = render(<Semantics />);
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders AutoClose', async () => {
    const tree = render(<AutoClose />);
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders Customization', async () => {
    const tree = render(<Customization />);
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders Queue', async () => {
    const tree = render(<Queue />);
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
});

describe('Snackbar in RTL', () => {
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
  it('renders Options', async () => {
    const tree = render(withRtl(<Options />));
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders Semantics', async () => {
    const tree = render(withRtl(<Semantics />));
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders AutoClose', async () => {
    const tree = render(withRtl(<AutoClose />));
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders Customization', async () => {
    const tree = render(withRtl(<Customization />));
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders Queue', async () => {
    const tree = render(withRtl(<Queue />));
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
});
