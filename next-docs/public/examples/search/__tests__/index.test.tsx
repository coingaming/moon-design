/**
 * @jest-environment jsdom
 */

import { act, cleanup, fireEvent, render } from '@testing-library/react';
import '../../../../__mocks__/resizeObserver';
import Default from '../Default';
import Modal from '../Modal';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Search', () => {
  afterEach(cleanup);
  it('renders Default', async () => {
    const tree = render(<Default />);
    await act(() => fireEvent.click(tree.getByPlaceholderText('Search')));
    expect(tree).toMatchSnapshot();
  });
  it('renders Modal', async () => {
    const tree = render(<Modal />);
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
});

describe('Search in RTL', () => {
  afterEach(cleanup);
  it('renders Default', async () => {
    const tree = render(withRtl(<Default />));
    await act(() => fireEvent.click(tree.getByPlaceholderText('Search')));
    expect(tree).toMatchSnapshot();
  });
  it('renders Modal', async () => {
    const tree = render(withRtl(<Modal />));
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
});
