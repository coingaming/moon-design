/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Default from '../Default';
import AsLink from '../AsLink';
import Checkbox from '../Checkbox';
import ExpandCollapse from '../ExpandCollapse';
import MultiLine from '../MultiLine';
import MultiTitle from '../MultiTitle';
import Radio from '../Radio';
import WithIcon from '../WithIcon';
import WithMeta from '../WithMeta';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('MenuItem', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders AsLink', () => {
    const tree = render(<AsLink />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Checkbox', () => {
    const tree = render(<Checkbox />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Radio', () => {
    const tree = render(<Radio />);
    expect(tree).toMatchSnapshot();
  });
  it('renders ExpandCollapse', () => {
    const tree = render(<ExpandCollapse />);
    expect(tree).toMatchSnapshot();
  });
  it('renders MultiLine', () => {
    const tree = render(<MultiLine />);
    expect(tree).toMatchSnapshot();
  });
  it('renders MultiTitle', () => {
    const tree = render(<MultiTitle />);
    expect(tree).toMatchSnapshot();
  });
  it('renders WithIcon', () => {
    const tree = render(<WithIcon />);
    expect(tree).toMatchSnapshot();
  });
  it('renders WithMeta', () => {
    const tree = render(<WithMeta />);
    expect(tree).toMatchSnapshot();
  });
});

describe('MenuItem in RTL', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders AsLink', () => {
    const tree = render(withRtl(<AsLink />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Checkbox', () => {
    const tree = render(withRtl(<Checkbox />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Radio', () => {
    const tree = render(withRtl(<Radio />));
    expect(tree).toMatchSnapshot();
  });
  it('renders ExpandCollapse', () => {
    const tree = render(withRtl(<ExpandCollapse />));
    expect(tree).toMatchSnapshot();
  });
  it('renders MultiLine', () => {
    const tree = render(withRtl(<MultiLine />));
    expect(tree).toMatchSnapshot();
  });
  it('renders MultiTitle', () => {
    const tree = render(withRtl(<MultiTitle />));
    expect(tree).toMatchSnapshot();
  });
  it('renders WithIcon', () => {
    const tree = render(withRtl(<WithIcon />));
    expect(tree).toMatchSnapshot();
  });
  it('renders WithMeta', () => {
    const tree = render(withRtl(<WithMeta />));
    expect(tree).toMatchSnapshot();
  });
});
