/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Disabled from '../Disabled';
import Error from '../Error';
import Options from '../Options';
import WithLabel from '../WithLabel';
import WithoutLabel from '../WithoutLabel';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Combobox', () => {
  afterEach(cleanup);
  it('renders WithLabel', () => {
    const tree = render(<WithLabel />);
    expect(tree).toMatchSnapshot();
  });
  it('renders WithoutLabel', () => {
    const tree = render(<WithoutLabel />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const tree = render(<Disabled />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Error', () => {
    const tree = render(<Error />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Options', () => {
    const tree = render(<Options />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Combobox in RTL', () => {
  afterEach(cleanup);
  it('renders WithLabel', () => {
    const tree = render(withRtl(<WithLabel />));
    expect(tree).toMatchSnapshot();
  });
  it('renders WithoutLabel', () => {
    const tree = render(withRtl(<WithoutLabel />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Disabled', () => {
    const tree = render(withRtl(<Disabled />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Error', () => {
    const tree = render(withRtl(<Error />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Options', () => {
    const tree = render(withRtl(<Options />));
    expect(tree).toMatchSnapshot();
  });
});
