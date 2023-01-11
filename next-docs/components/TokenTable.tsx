type Data = {
  name: string;
  className: string;
  variable: string;
  value: string;
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
              className="px-4 py-3 text-start text-moon-12 font-medium text-bulma uppercase"
            >
              Property
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-start text-moon-12 font-medium text-bulma uppercase"
            >
              CSS Variable
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-start text-moon-12 font-medium text-bulma uppercase"
            >
              Classname
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-start text-moon-12 font-medium text-bulma uppercase"
            >
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((prop: Data, propIdx: number) => (
            <tr
              key={prop.className}
              className={propIdx % 2 === 0 ? 'bg-gohan' : 'bg-goku'}
            >
              <td className="px-4 py-4 whitespace-nowrap text-moon-14 font-medium text-bulma">
                {prop.name}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-moon-14 text-bulma">
                {prop.variable}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-moon-14 text-bulma">
                {prop.className}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-moon-14 text-bulma">
                {prop.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default TokenTable;
