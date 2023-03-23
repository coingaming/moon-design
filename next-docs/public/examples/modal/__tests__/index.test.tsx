/**
 * @jest-environment jsdom
 */

import '../../../../__mocks__/ResizeObserver';
import BigContent from '../BigContent';
import Default from '../Default';
import StyledContent from '../StyledContent';
import WithSelect from '../WithSelect';
import { act, cleanup, fireEvent, render } from '@testing-library/react';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Modal', () => {
  afterEach(cleanup);
  it('renders Default', async () => {
    const tree = render(<Default />);
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
  it('renders BigContent', async () => {
    const tree = render(<BigContent />);
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
  it('renders StyledContent', async () => {
    const tree = render(<StyledContent />);
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
  it('renders WithSelect', async () => {
    const tree = render(<WithSelect />);
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
});

describe('Modal in RTL', () => {
  afterEach(cleanup);
  it('renders Default', async () => {
    const tree = render(withRtl(<Default />));
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
  it('renders BigContent', async () => {
    const tree = render(withRtl(<BigContent />));
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
  it('renders StyledContent', async () => {
    const tree = render(withRtl(<StyledContent />));
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
  it('renders WithSelect', async () => {
    const tree = render(withRtl(<WithSelect />));
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
});
