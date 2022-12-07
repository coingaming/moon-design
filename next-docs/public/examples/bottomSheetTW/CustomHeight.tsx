import React, { useState } from 'react';
import { BottomSheet, Button } from '@heathmont/moon-core-tw';
import { Table } from '@heathmont/moon-table-tw';

const generateTableData = (length: number) =>
  Array.from('_'.repeat(length)).map((_, index) => {
    return {
      firstName: index % 2 === 0 ? 'Milton' : 'Thomas',
      lastName: index % 2 === 0 ? 'Friedman' : 'Sowell',
      age: <span>{Math.floor(index * 22)}</span>,
      money: <span>{Math.floor(index * 10000)}</span>,
      progress: <span>{Math.floor(index * 100)}</span>,
      status: Math.floor(index * 100),
      activity: Math.floor(index * 100),
    };
  });

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeBottomSheet = () => {
    setIsOpen(false);
  };
  const openBottomSheet = () => {
    setIsOpen(true);
  };
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
      Header: 'Money',
      accessor: 'money',
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
  const columns = React.useMemo(() => columnsInitial, []);
  const data = React.useMemo(() => generateTableData(5), []);
  return (
    <>
      <Button onClick={openBottomSheet}>Initialize uncloaking</Button>
      <BottomSheet open={isOpen} onClose={closeBottomSheet} hasShadow>
        <BottomSheet.Backdrop />
        <BottomSheet.Panel className="h-[77%]">
          <>
            <BottomSheet.Draghandle>
              <BottomSheet.Title className="text-center">
                I am gonna show you some data whether you like it or not!
              </BottomSheet.Title>
            </BottomSheet.Draghandle>
            <div className="p-2">
              <Table columns={columns} data={data} />
            </div>
            <div className="p-2">
              <Button onClick={closeBottomSheet} variant="ghost" fullWidth>
                I don't wanna see this
              </Button>
            </div>
          </>
        </BottomSheet.Panel>
      </BottomSheet>
    </>
  );
};

export default Example;
