import React from 'react';
import { Table } from '@heathmont/moon-table-tw';

type Data = {
  name: string;
  type: string;
  required: 'true' | 'false';
  default: string;
  description: string;
};

type TableProps = {
  data: Data[];
  title?: string;
};

const PropsTable = ({ data, title }: TableProps) => {
  const columns = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Type',
      accessor: 'type',
    },
    {
      Header: 'Required',
      accessor: 'required',
    },
    {
      Header: 'Default',
      accessor: 'default',
    },
    {
      Header: 'Description',
      accessor: 'description',
    },
  ];
  return (
    <section className="flex flex-col gap-6">
      {title && <h2 className="text-moon-24 font-medium">{title}</h2>}
      <Table columns={columns} data={data} />
    </section>
  );
};

export default PropsTable;
