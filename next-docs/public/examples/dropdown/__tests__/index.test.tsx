/**
 * @jest-environment jsdom
 */

import { act, cleanup, fireEvent, render } from '@testing-library/react';
import '../../../../__mocks__/resizeObserver';
import Default from '../Default';
import OptionsVariants from '../OptionsVariants';
import Select from '../Select';
import SelectStates from '../SelectStates';
import TriggerElements from '../TriggerElements';
import InsetSelect from '../InsetSelect';
import InsetMultiSelect from '../InsetMultiSelect';
import InsetSelectStates from '../InsetSelectStates';
import MultiSelect from '../MultiSelect';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Dropdown', () => {
  afterEach(cleanup);
  it('renders Default', async () => {
    const tree = render(<Default />);
    await act(() => fireEvent.click(tree.getByText('Choose a name...')));
    expect(tree).toMatchSnapshot();
  });
  it('renders TriggerElements', async () => {
    const tree = render(<TriggerElements />);
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders OptionsVariants', async () => {
    const tree = render(<OptionsVariants />);
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders Select', async () => {
    const tree = render(<Select />);
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders SelectStates', async () => {
    const tree = render(<SelectStates />);
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders InsetSelect', async () => {
    const tree = render(<InsetSelect />);
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
  it('renders InsetMultiSelect', async () => {
    const tree = render(<InsetMultiSelect />);
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
  it('renders InsetSelectStates', async () => {
    const tree = render(<InsetSelectStates />);
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders MultiSelect', async () => {
    const tree = render(<MultiSelect />);
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
});

describe('Dropdown in RTL', () => {
  afterEach(cleanup);
  it('renders Default', async () => {
    const tree = render(withRtl(<Default />));
    await act(() => fireEvent.click(tree.getByText('Choose a name...')));
    expect(tree).toMatchSnapshot();
  });
  it('renders TriggerElements', async () => {
    const tree = render(withRtl(<TriggerElements />));
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders OptionsVariants', async () => {
    const tree = render(withRtl(<OptionsVariants />));
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders Select', async () => {
    const tree = render(withRtl(<Select />));
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders SelectStates', async () => {
    const tree = render(withRtl(<SelectStates />));
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders InsetSelect', async () => {
    const tree = render(withRtl(<InsetSelect />));
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
  it('renders InsetMultiSelect', async () => {
    const tree = render(withRtl(<InsetMultiSelect />));
    await act(() => fireEvent.click(tree.getByRole('button')));
    expect(tree).toMatchSnapshot();
  });
  it('renders InsetSelectStates', async () => {
    const tree = render(withRtl(<InsetSelectStates />));
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
  it('renders MultiSelect', async () => {
    const tree = render(withRtl(<MultiSelect />));
    await act(() => fireEvent.click(tree.getAllByRole('button')[0]));
    expect(tree).toMatchSnapshot();
  });
});
