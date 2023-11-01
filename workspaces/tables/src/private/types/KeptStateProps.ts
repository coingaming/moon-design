type StateTypes = "expandedRows" | "checkedBoxes" | "selectedRows";

type KeptStateProps = Partial<Record<StateTypes, {[key: string]: boolean}[]>>;

export default KeptStateProps;
