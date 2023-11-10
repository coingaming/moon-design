type StateTypes = "expandedRows" | "checkedBoxes" | "selectedRows";

type KeepStateProps = Partial<Record<StateTypes, {[key: string]: boolean}[]>>;

export default KeepStateProps;
