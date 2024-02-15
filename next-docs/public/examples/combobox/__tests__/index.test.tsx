/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Default from '../Default';
import InsetMultiSelect from '../InsetMultiSelect';
import InsetSelect from '../InsetSelect';
import InsetSelectStates from '../InsetSelectStates';
import LongNameOptions from '../LongNameOptions';
import MultiAllSelect from '../MultiAllSelect';
import MultiSelect from '../MultiSelect';
import Select from '../Select';
import SelectStates from '../SelectStates';
import VisualMultiSelect from '../VisualMultiSelect';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Combobox', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders InsetMultiSelect', () => {
    const tree = render(<InsetMultiSelect />);
    expect(tree).toMatchSnapshot();
  });
  it('renders InsetSelect', () => {
    const tree = render(<InsetSelect />);
    expect(tree).toMatchSnapshot();
  });
  it('renders InsetSelectStates', () => {
    const tree = render(<InsetSelectStates />);
    expect(tree).toMatchSnapshot();
  });
  it('renders MultiSelect', () => {
    const tree = render(<MultiSelect />);
    expect(tree).toMatchSnapshot();
  });
  it('renders MultiAllSelect', () => {
    const tree = render(<MultiAllSelect />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Select', () => {
    const tree = render(<Select />);
    expect(tree).toMatchSnapshot();
  });
  it('renders SelectStates', () => {
    const tree = render(<SelectStates />);
    expect(tree).toMatchSnapshot();
  });
  it('renders VisualMultiSelect', () => {
    const tree = render(<VisualMultiSelect />);
    expect(tree).toMatchSnapshot();
  });
  it('renders LongNameOptions', () => {
    const tree = render(<LongNameOptions />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Combobox in RTL', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders InsetMultiSelect', () => {
    const tree = render(withRtl(<InsetMultiSelect />));
    expect(tree).toMatchSnapshot();
  });
  it('renders InsetSelect', () => {
    const tree = render(withRtl(<InsetSelect />));
    expect(tree).toMatchSnapshot();
  });
  it('renders InsetSelectStates', () => {
    const tree = render(withRtl(<InsetSelectStates />));
    expect(tree).toMatchSnapshot();
  });
  it('renders MultiSelect', () => {
    const tree = render(withRtl(<MultiSelect />));
    expect(tree).toMatchSnapshot();
  });
  it('renders MultiAllSelect', () => {
    const tree = render(withRtl(<MultiAllSelect />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Select', () => {
    const tree = render(withRtl(<Select />));
    expect(tree).toMatchSnapshot();
  });
  it('renders SelectStates', () => {
    const tree = render(withRtl(<SelectStates />));
    expect(tree).toMatchSnapshot();
  });
  it('renders VisualMultiSelect', () => {
    const tree = render(withRtl(<VisualMultiSelect />));
    expect(tree).toMatchSnapshot();
  });
  it('renders LongNameOptions', () => {
    const tree = render(withRtl(<LongNameOptions />));
    expect(tree).toMatchSnapshot();
  });
});
