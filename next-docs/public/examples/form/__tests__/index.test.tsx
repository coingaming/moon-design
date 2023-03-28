/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Default from '../Default';
import WithInsetInput from '../WithInsetInput';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Form', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders WithInsetInput', () => {
    const tree = render(<WithInsetInput />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Form in RTL', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders WithInsetInput', () => {
    const tree = render(withRtl(<WithInsetInput />));
    expect(tree).toMatchSnapshot();
  });
});
