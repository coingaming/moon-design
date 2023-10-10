import React, { ReactNode, useState } from 'react';
import { Table } from '@heathmont/moon-table-tw';
import { Button, Chip, Modal, Tooltip } from '@heathmont/moon-core-tw';
import { OtherFrame } from '@heathmont/moon-icons-tw';
import { number } from 'zod';

interface HeaderProps {
  isAllRowsExpanded: boolean;
  getToggleAllRowsExpandedProps: () => React.HTMLAttributes<HTMLSpanElement>;
}

const Example = () => {
  const columnsInitial = [
    {
      Header: 'Expand',
      sticky: 'left',
      columns: [
        {
          id: 'expander',
          Header: ({
            getToggleAllRowsExpandedProps,
            isAllRowsExpanded,
          }: HeaderProps) => (
            <span {...getToggleAllRowsExpandedProps()}>
              {isAllRowsExpanded ? '👇' : '👉'}
            </span>
          ),
          Cell: ({ row }: any) =>
            row.canExpand ? (
              <span
                {...row.getToggleRowExpandedProps({
                  style: {
                    paddingLeft: `${row.depth * 2}rem`,
                  },
                })}
              >
                {row.isExpanded ? '👇' : '👉'}
              </span>
            ) : null,
        },
      ],
    },
    {
      Header: 'Name',
      sticky: 'left',
      columns: [
        {
          Header: 'First Name',
          accessor: 'firstName',
        },
      ],
    },
    {
      Header: 'Info',
      columns: [
        {
          Header: 'Age',
          accessor: 'age',
          width: 50,
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
          width: 60,
          accessor: 'status',
        },
        {
          Header: 'Profile Progress',
          Footer: 'Profile Progress',
          accessor: 'progress',
        },
      ],
    },
    {
      Header: 'Actions',
      sticky: 'right',
      columns: [
        {
          Header: 'Actions',
          accessor: 'actions',
          Footer: '',
        },
      ],
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [panel, setPanel] = useState<ReactNode>();
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const tooltip = (tip: string, modal: { title: string; panel: () => ReactNode }) => (
    <Tooltip>
      <Tooltip.Trigger>
        <Chip
          className='max-h-6'
          variant="ghost"
          iconOnly={<OtherFrame className="text-moon-24" />}
          onClick={() => {
            setTitle(modal.title);
            setPanel(modal.panel);
            openModal(); }}
        />
      </Tooltip.Trigger>
      <Tooltip.Content position="top-start">
        {tip}
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip>
  );

  const makeModalData = (type: string, index: number) => {
    return {
      title: type,
      panel: () => (
        <ul className="text-moon-sm text-trunks">
          <li>Age: {Math.floor(index * 30)}</li>
          <li>Visits: {Math.floor(index * 100)}</li>
          <li>Status: {Math.floor(index * 100)}</li>
          <li>Activity: {Math.floor(index * 100)}</li>
          <li>Actions: {Math.floor(index * 100)}</li>
        </ul>
        )
    };
  }

  const makeData = (length: number) => {
    return Array.from('_'.repeat(length)).map((_, index) => {
      return {
        firstName: 'Test',
        age: <span>{Math.floor(index * 30)}</span>,
        visits: <span>{Math.floor(index * 100)}</span>,
        progress: <span>{Math.floor(index * 100)}</span>,
        status: Math.floor(index * 100),
        activity: Math.floor(index * 100),
        actions: tooltip(
          'Call the modal window',
          makeModalData('Test', index)
        ),
        subRows: [
          {
            firstName: 'Sub Test',
            age: <span>{Math.floor(index * 30)}</span>,
            visits: <span>{Math.floor(index * 100)}</span>,
            progress: <span>{Math.floor(index * 100)}</span>,
            status: Math.floor(index * 100),
            activity: Math.floor(index * 100),
            actions: tooltip(
              'Call the modal window',
              makeModalData('Sub Test', index)
            ),
          },
        ],
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
    <>
      <Table
        columns={columns}
        data={data}
        defaultColumn={defaultColumn}
        width={800}
        height={400}
      />
      <Modal open={isOpen} onClose={closeModal}>
        <Modal.Backdrop />
        <Modal.Panel>
          <div className="p-4 border-b-2 border-beerus">
            <h3 className="text-moon-18 text-bulma font-medium">
              {title}
            </h3>
          </div>
          <div className="p-4">
            {panel}
          </div>
          <div className="p-4 border-t-2 border-beerus">
            <Button onClick={closeModal}>Got it, thanks!</Button>
          </div>
        </Modal.Panel>
      </Modal>
    </>
  );
};

export default Example;
