type Data = {
  name: string;
  type: string;
  required: boolean;
  default: string | React.ReactNode;
  description: string;
};

type TableProps = {
  data: Data[];
  title?: string;
};

const PropsTable = ({ data, title }: TableProps) => (
  <section className="flex flex-col gap-6">
    {title && <h2 className="text-moon-24 font-medium">{title}</h2>}
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-beerus">
        <thead className="bg-goku">
          <tr>
            <th
              scope="col"
              className="px-4 py-3 text-start text-xs font-medium text-trunk uppercase tracking-wider"
            >
              Name
            </th>

            <th
              scope="col"
              className="px-4 py-3 text-start text-xs font-medium text-trunks uppercase tracking-wider"
            >
              Type
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-start text-xs font-medium text-trunks uppercase tracking-wider"
            >
              Required
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-start text-xs font-medium text-trunks uppercase tracking-wider"
            >
              Default
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-start text-xs font-medium text-trunks uppercase tracking-wider"
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((prop: Data, propIdx: number) => (
            <tr
              key={prop.name}
              className={propIdx % 2 === 0 ? 'bg-gohan' : 'bg-goku'}
            >
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-bulma">
                {prop.name}
              </td>

              <td className="px-4 py-4 whitespace-nowrap text-sm text-trunks">
                {prop.type}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-trunks">
                {prop.required ? 'Yes' : 'No'}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-trunks">
                {prop.default}
              </td>
              <td className="px-4 py-4 text-sm text-trunks">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default PropsTable;
