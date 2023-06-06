/**
 * @jest-environment jsdom
 */

import { act, cleanup, fireEvent, render } from '@testing-library/react';
import '../../../../__mocks__/resizeObserver';
import Default from '../Default';
import Position from '../Position';
import TriggerElements from '../TriggerElements';
import WithClose from '../WithClose';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Popover', () => {
  afterEach(cleanup);
  it('renders Default', async () => {
    const tree = render(<Default />);
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders TriggerElements', async () => {
    const tree = render(<TriggerElements />);
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders Position', async () => {
    const tree = render(<Position />);
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders WithClose', async () => {
    const tree = render(<WithClose />);
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
});

describe('Popover in RTL', () => {
  afterEach(cleanup);
  it('renders Default', async () => {
    const tree = render(withRtl(<Default />));
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders TriggerElements', async () => {
    const tree = render(withRtl(<TriggerElements />));
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders Position', async () => {
    const tree = render(withRtl(<Position />));
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders WithClose', async () => {
    const tree = render(withRtl(<WithClose />));
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
});
