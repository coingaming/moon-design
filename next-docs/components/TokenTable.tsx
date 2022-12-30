import { Table } from '@heathmont/moon-table-tw';

type Data = {
  name: string;
  key: string;
  value: number | string;
};

type TokenTableProps = {
  data: Data[];
  title?: string;
};

const TokenTable = ({ data, title }: TokenTableProps) => {
  const columns = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Key',
      accessor: 'key',
    },
    {
      Header: 'Value',
      accessor: 'value',
    },
  ];
  return (
    <section className="flex flex-col gap-6">
      {title && <h2 className="text-moon-24 font-medium">{title}</h2>}
      <Table columns={columns} data={data} />
    </section>
  );
};

export default TokenTable;
