import { ControlsChevronDown, ControlsChevronRight } from '@heathmont/moon-icons-tw';
import { BodyTR, TD, Table } from '@heathmont/moon-table-tw';
import React from 'react';

const Example = () => {
  const columnsInitial = [
    {
      id: 'expander',
      width: 50,
      Header: ({ getToggleAllRowsExpandedProps, toggleAllRowsExpanded, isAllRowsExpanded }: any) => {
        return (
          <div className="flex h-full items-center">
            <span
              {...getToggleAllRowsExpandedProps()}
              onClick={(e) => {
                e.preventDefault();
                toggleAllRowsExpanded(!isAllRowsExpanded);
              }}
            >
              Expand
              {isAllRowsExpanded ? <ControlsChevronDown /> : <ControlsChevronRight />}
            </span>
          </div>
      )},
      Cell: ({ row, toggleRowExpanded }: any) =>
        <div className="flex h-full items-center">
          {row.subRows ? (
            <span
              {...row.getToggleRowExpandedProps({
                style: {
                  paddingLeft: `${row.depth * 2}rem`,
                },
              })}
              onClick={(e) => {
                e.preventDefault();
                toggleRowExpanded(row.id, row.isExpanded !== true);
              }}
            >
              {row.isExpanded ? <ControlsChevronDown /> : <ControlsChevronRight />}
            </span>
          ) : null}
        </div>,
    },
    {
      Header: 'First Name',
      accessor: 'firstName',
    },
    {
      Header: 'Age',
      accessor: 'age',
      width: 50,
    },
  ];

  const makeData = (length: number) => {
    return Array.from('_'.repeat(length)).map((_, index) => {
      return {
        firstName: 'Test',
        age: <span>{Math.floor(index * 30)}</span>,
        subRows: [],
      };
    });
  };

  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 100,
      width: 150,
      maxWidth: 400,
    }),
    []
  );

  const columns = React.useMemo(() => columnsInitial, []);
  const data = React.useMemo(() => makeData(40), []);

  return (
    <Table
      columns={columns}
      data={data}
      defaultColumn={defaultColumn}
      width={800}
      height={400}
      getOnRowClickHandler={(row: any) => () => {
        (row as any).depth === 0
          ? () => (row as any).toggleRowExpanded()
          : undefined;
      }}
      renderRowSubComponent={({ row, backgroundColor }) => {
        return (
          <BodyTR
            {...row.getRowProps()}
            key={row.getRowProps().key + '1'}
            hasParent={true}
            backgroundColor={backgroundColor}
            isExpanded
          >
            <TD {...row.getRowProps()} isExpanded>
              <p className="text-center">Custom content</p>
            </TD>
          </BodyTR>
        );
      }}
    />
  );
};

export default Example;
