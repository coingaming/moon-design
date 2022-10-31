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
      <table className="min-w-full divide-y divide-beerus">
        <thead className="bg-goku">
          <tr>
            <th
              scope="col"
              className="px-4 py-3 text-start text-xs font-medium text-bulma uppercase tracking-wider"
            >
              Property
            </th>

            <th
              scope="col"
              className="px-4 py-3 text-start text-xs font-medium text-bulma uppercase tracking-wider"
            >
              Key
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-start text-xs font-medium text-bulma uppercase tracking-wider"
            >
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((prop: Data, propIdx: number) => (
            <tr
              key={prop.key}
              className={propIdx % 2 === 0 ? 'bg-gohan' : 'bg-goku'}
            >
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-bulma">
                {prop.name}
              </td>

              <td className="px-4 py-4 whitespace-nowrap text-sm text-bulma">
                {prop.key}
              </td>

              <td className="px-4 py-4 text-sm text-bulma">{prop.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default TokenTable;
