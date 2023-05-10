import React from 'react';
import { Table, InputCell } from '@heathmont/moon-table-tw';

type UpdateMyDataProps = {
  index?: number;
  id?: string;
  value?: string | number;
};
type UpdateMyData = <T extends {}>(t: T) => void;

type EditableCellProps = {
  value: string | number;
  row: { index: number };
  column: { id: string };
  updateMyData?: UpdateMyData;
};

const makeData = (length: number) => {
  return Array.from('_'.repeat(length)).map((_, index) => {
    return {
      firstName: 'Test',
      lastName: 'Test',
      age: Math.floor(index * 30),
      visits: Math.floor(index * 100),
      progress: Math.floor(index * 100),
      status: Math.floor(index * 100),
      activity: Math.floor(index * 100),
    };
  });
};

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData,
}: EditableCellProps) => {
  const [value, setValue] = React.useState<string | number>(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onBlur = () => {
    updateMyData && updateMyData<UpdateMyDataProps>({ index, id, value });
  };

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return <InputCell value={value} onChange={onChange} onBlur={onBlur} />;
};

const defaultColumn = {
  Cell: EditableCell,
};

const Example = () => {
  const columnsInitial = [
    {
      Header: 'First Name',
      accessor: 'firstName',
    },
    {
      Header: 'Last Name',
      accessor: 'lastName',
    },
    {
      Header: 'Age',
      accessor: 'age',
    },
    {
      Header: 'Visits',
      accessor: 'visits',
    },
    {
      Header: 'Activity',
      accessor: 'activity',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
  ];

  const updateMyData = ({ index, id, value }: UpdateMyDataProps) => {
    console.log('rowIndex', index);
    console.log('columnId', id);
    console.log('value: ', value);
  };

  const columns = React.useMemo(() => columnsInitial, []);
  const data = React.useMemo(() => makeData(5), []);

  return (
    <Table
      columns={columns}
      data={data}
      updateMyData={updateMyData}
      defaultColumn={defaultColumn}
    />
  );
};

export default Example;
