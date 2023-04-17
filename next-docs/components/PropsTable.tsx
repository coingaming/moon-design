type Data = {
  name: string;
  type: string;
  required: boolean | undefined;
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
      <table className="min-w-full border-separate border-spacing-y-1">
        <thead>
          <tr>
            <th
              scope="col"
              className="px-3 py-2 text-start text-moon-14 font-medium"
            >
              Name
            </th>

            <th
              scope="col"
              className="px-3 py-2 text-start text-moon-14 font-medium"
            >
              Type
            </th>
            <th
              scope="col"
              className="px-3 py-2 text-start text-moon-14 font-medium"
            >
              Required
            </th>
            <th
              scope="col"
              className="px-3 py-2 text-start text-moon-14 font-medium"
            >
              Default
            </th>
            <th
              scope="col"
              className="px-3 py-2 text-start text-moon-14 font-medium"
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((prop: Data) => (
            <tr key={prop.name} className="bg-goku">
              <td className="px-3 py-2 whitespace-nowrap text-moon-14 rounded-s-lg">
                {prop.name}
              </td>

              <td className="px-3 py-2 whitespace-nowrap text-moon-14">
                {prop.type}
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-moon-14">
                {typeof prop.required === 'boolean'
                  ? prop.required
                    ? 'Yes'
                    : 'No'
                  : ''}
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-moon-14">
                {prop.default}
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-moon-14 rounded-e-lg">
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
