/**
 * @jest-environment jsdom
 */

import { act, cleanup, fireEvent, render } from '@testing-library/react';
import '../../../../__mocks__/resizeObserver';
import CommandMenu from '../CommandMenu';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('SearchCmdk', () => {
  afterEach(cleanup);
  it('renders CommandMenu', async () => {
    const tree = render(<CommandMenu />);
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
});

describe('SearchCmdk in RTL', () => {
  afterEach(cleanup);
  it('renders CommandMenu', async () => {
    const tree = render(withRtl(<CommandMenu />));
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
});
