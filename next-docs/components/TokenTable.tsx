type Data = {
  name: string;
  key: string;
  value: number | string;
};

type TokenTableProps = {
  data: Data[];
  title?: string;
};

const TokenTable = ({ data, title }: TokenTableProps) => (
  <section className="flex flex-col gap-6">
    {title && <h2 className="text-moon-24 font-medium">{title}</h2>}
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Property
            </th>

            <th
              scope="col"
              className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Key
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((prop: Data, propIdx: number) => (
            <tr
              key={prop.key}
              className={propIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            >
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {prop.name}
              </td>

              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                {prop.key}
              </td>

              <td className="px-4 py-4 text-sm text-gray-500">{prop.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default TokenTable;
