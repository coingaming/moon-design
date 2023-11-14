import React, { ReactNode, useEffect, useState } from 'react';
import { Table } from '@heathmont/moon-table-tw';
import { Button, Chip, Modal, Tooltip } from '@heathmont/moon-core-tw';
import { ControlsChevronDown, ControlsChevronRight, OtherFrame } from '@heathmont/moon-icons-tw';
import KeepStateProps from '@heathmont/moon-table-tw/lib/private/types/KeepStateProps';

interface HeaderProps {
  rowsById: { [key: string]: { id: string, canExpand: boolean } },
  isAllRowsExpanded: boolean;
  toggleAllRowsExpanded: (isExpanded?: boolean) => void;
  getToggleAllRowsExpandedProps: () => React.HTMLAttributes<HTMLSpanElement>;
}

const Example = () => {
  /**
   *  The PREFIX is necessary to identify records for storing/restoring the table state data.
   *  Each table should have its own unique PREFIX.
   */
  const PREFIX = "any_unique_string_for_each_table";

  const columnsInitial = [
    {
      Header: 'Expand',
      sticky: 'left',
      columns: [
        {
          id: 'expander',
          Header: ({
            rowsById,
            getToggleAllRowsExpandedProps,
            toggleAllRowsExpanded,
            isAllRowsExpanded,
          }: HeaderProps) => {
            useEffect (() => {
              setAllExpandableRowSet(
                Object.values(rowsById)
                .filter(({ canExpand }) => canExpand)
                .map(({ id }) => ({[id]: isAllRowsExpanded}))
            )}, [rowsById, isAllRowsExpanded]);
            return (
              <div className="flex h-full items-center">
                <span
                  {...getToggleAllRowsExpandedProps()}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleAllRowsExpanded(!allRowsExpandedState);
                    toggleAllRowsExpandedState(allRowsExpandedState);
                  }}
                >
                  {allRowsExpandedState ?  <ControlsChevronDown /> : <ControlsChevronRight />}
                </span>
              </div>
            )
          },
          Cell: ({ row, toggleRowExpanded }: any) =>
          <div className="flex h-full items-center">
            {row.canExpand ? (
              <span
                {...row.getToggleRowExpandedProps({
                  style: {
                    paddingLeft: `${row.depth * 2}rem`,
                  },
                })}
                onClick={(e) => {
                  e.preventDefault();
                  toggleRowExpanded(row.id, row.isExpanded !== true);
                  toggleRowExpandedState(row);
                }}
              >
                {row.isExpanded ? <ControlsChevronDown /> : <ControlsChevronRight />}
              </span>
            ) : null}
          </div>
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
  const [expandedRows, setExpandedRows] = useState<{[key: string]: boolean}[] | undefined>();
  const [allExpandableRowSet, setAllExpandableRowSet] = useState<{[key: string]: boolean}[] | undefined>();
  const [allRowsExpandedState, setAllRowsExpandedState] = useState(false);
  const [keepState, setKeepState] = useState<KeepStateProps>({});
  const closeModal = () => {
    setIsOpen(false);
    storeTableState(PREFIX, { expandedRows: expandedRows });
    document.location.reload();
  };
  const openModal = () => setIsOpen(true);

  const toggleRowExpandedState = (
    {
      id,
      canExpand,
      isExpanded,
    }: { id: string, canExpand: boolean, isExpanded: boolean }
  ) => {
    if (canExpand) {
      setExpandedRows((er) => {
        return isExpanded
          ? er?.filter(item => !item[id])
          : er
            ? [...er, {[id]: true}]
            : [{[id]: true}];
      });
    }
  };

  const toggleAllRowsExpandedState = (
    allExpanded: boolean
  ) => {
    setAllExpandableRowSet((ers) => {
      if (allExpanded) {
        setExpandedRows([]);
      } else {
        setExpandedRows(ers?.map(item => { const key = Object.keys(item)[0]; return {[key]: true} }));
      }

      return ers;
    });
  }

  /** This saves the table state into the LocalStorage */
  const storeTableState = (
    prefix: string,
    states: { [key: string]: unknown }
  ) => {
    localStorage.setItem(prefix, JSON.stringify(states));
  }

  /** This retrieves stored table state data from the LocalStorage
   * and uses this data to make the table preset[]
   */
  const restoreTableState = (prefix: string) => {
    const storedData = localStorage.getItem(prefix);
    if (storedData === null) return;
    try {
      const states = JSON.parse(storedData);
      if (states.expandedRows) {
        setExpandedRows(states.expandedRows);
        setKeepState({expandedRows: states.expandedRows});
      }
    } catch (e) {
    } finally {
      localStorage.removeItem(prefix);
    }
  }

  useEffect(() => { restoreTableState(PREFIX) }, []);
  useEffect(() => {
    allRowsExpandedState && setExpandedRows(allExpandableRowSet?.map(item => { const key = Object.keys(item)[0]; return {[key]: true} }))
  }, [allRowsExpandedState]);

  useEffect(() => {
    if (allExpandableRowSet) {
      expandedRows && setAllRowsExpandedState(allExpandableRowSet.length === expandedRows.length);
      !expandedRows && setAllRowsExpandedState(allExpandableRowSet.every(row => Object.values(row)[0]));
    }
  }, [expandedRows, allExpandableRowSet]);

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
            document.location.assign('/components/table#expandableKeepState');
            openModal();
          }}
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
          'Call the modal window and refresh the page',
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
              'Call the modal window and refresh the page',
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

  const columns = React.useMemo(() => columnsInitial, [allRowsExpandedState]);
  const data = React.useMemo(() => makeData(40), []);

  return (
    <>
      <Table
        columns={columns}
        data={data}
        defaultColumn={defaultColumn}
        width={800}
        height={400}
        keepState={keepState}
        /* expandedByDefault={true} */
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
