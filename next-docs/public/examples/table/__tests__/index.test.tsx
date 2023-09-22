/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import Default from '../Default';
import CellBorder from '../CellBorder';
import RowGaps from '../RowGaps';
import RowSizes from '../RowSizes';
import ClickableRows from '../ClickableRows';
import SelectableRows from '../SelectableRows';
import SelectableCheckboxes from '../SelectableCheckboxes';
import CustomColors from '../CustomColors';
import ExpandedRows from '../ExpandedRows';
import Sorting from '../Sorting';
import DeepTable from '../DeepTable';
import CustomContent from '../CustomContent';
import MiniMap from '../MiniMap';
import Calendar from '../Calendar';
import Editable from '../Editable';
import Zebra from '../Zebra';
import LongData from '../LongData';

const withRtl = (component: JSX.Element) => <div dir="rtl">{component}</div>;

describe('Table', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(<Default />);
    expect(tree).toMatchSnapshot();
  });
  it('renders CellBorder', () => {
    const tree = render(<CellBorder />);
    expect(tree).toMatchSnapshot();
  });
  it('renders RowGaps', () => {
    const tree = render(<RowGaps />);
    expect(tree).toMatchSnapshot();
  });
  it('renders RowSizes', () => {
    const tree = render(<RowSizes />);
    expect(tree).toMatchSnapshot();
  });
  it('renders ClickableRows', () => {
    const tree = render(<ClickableRows />);
    expect(tree).toMatchSnapshot();
  });
  it('renders SelectableRows', () => {
    const tree = render(<SelectableRows />);
    expect(tree).toMatchSnapshot();
  });
  it('renders SelectableCheckboxes', () => {
    const tree = render(<SelectableCheckboxes />);
    expect(tree).toMatchSnapshot();
  });
  it('renders CustomColors', () => {
    const tree = render(<CustomColors />);
    expect(tree).toMatchSnapshot();
  });
  it('renders ExpandedRows', () => {
    const tree = render(<ExpandedRows />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Sorting', () => {
    const tree = render(<Sorting />);
    expect(tree).toMatchSnapshot();
  });
  it('renders DeepTable', () => {
    const tree = render(<DeepTable />);
    expect(tree).toMatchSnapshot();
  });
  it('renders CustomContent', () => {
    const tree = render(<CustomContent />);
    expect(tree).toMatchSnapshot();
  });
  it('renders MiniMap', () => {
    const tree = render(<MiniMap />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Calendar', () => {
    const tree = render(<Calendar />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Editable', () => {
    const tree = render(<Editable />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Zebra', () => {
    const tree = render(<Zebra />);
    expect(tree).toMatchSnapshot();
  });
  it('renders LongData', () => {
    const tree = render(<LongData />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Table in RTL', () => {
  afterEach(cleanup);
  it('renders Default', () => {
    const tree = render(withRtl(<Default />));
    expect(tree).toMatchSnapshot();
  });
  it('renders CellBorder', () => {
    const tree = render(withRtl(<CellBorder />));
    expect(tree).toMatchSnapshot();
  });
  it('renders RowGaps', () => {
    const tree = render(withRtl(<RowGaps />));
    expect(tree).toMatchSnapshot();
  });
  it('renders RowSizes', () => {
    const tree = render(withRtl(<RowSizes />));
    expect(tree).toMatchSnapshot();
  });
  it('renders ClickableRows', () => {
    const tree = render(withRtl(<ClickableRows />));
    expect(tree).toMatchSnapshot();
  });
  it('renders SelectableRows', () => {
    const tree = render(withRtl(<SelectableRows />));
    expect(tree).toMatchSnapshot();
  });
  it('renders SelectableCheckboxes', () => {
    const tree = render(withRtl(<SelectableCheckboxes />));
    expect(tree).toMatchSnapshot();
  });
  it('renders CustomColors', () => {
    const tree = render(withRtl(<CustomColors />));
    expect(tree).toMatchSnapshot();
  });
  it('renders ExpandedRows', () => {
    const tree = render(withRtl(<ExpandedRows />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Sorting', () => {
    const tree = render(withRtl(<Sorting />));
    expect(tree).toMatchSnapshot();
  });
  it('renders DeepTable', () => {
    const tree = render(withRtl(<DeepTable />));
    expect(tree).toMatchSnapshot();
  });
  it('renders CustomContent', () => {
    const tree = render(withRtl(<CustomContent />));
    expect(tree).toMatchSnapshot();
  });
  it('renders MiniMap', () => {
    const tree = render(withRtl(<MiniMap />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Calendar', () => {
    const tree = render(withRtl(<Calendar />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Editable', () => {
    const tree = render(withRtl(<Editable />));
    expect(tree).toMatchSnapshot();
  });
  it('renders Zebra', () => {
    const tree = render(withRtl(<Zebra />));
    expect(tree).toMatchSnapshot();
  });
  it('renders LongData', () => {
    const tree = render(withRtl(<LongData />));
    expect(tree).toMatchSnapshot();
  });
});
