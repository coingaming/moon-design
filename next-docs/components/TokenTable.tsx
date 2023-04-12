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
      <table className="min-w-full border-separate border-spacing-y-1">
        <thead>
          <tr>
            <th
              scope="col"
              className="px-3 py-2 text-start text-moon-14 font-medium"
            >
              Property
            </th>
            <th
              scope="col"
              className="px-3 py-2 text-start text-moon-14 font-medium"
            >
              CSS Variable
            </th>
            <th
              scope="col"
              className="px-3 py-2 text-start text-moon-14 font-medium"
            >
              Classname
            </th>
            <th
              scope="col"
              className="px-3 py-2 text-start text-moon-14 font-medium"
            >
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((prop: Data) => (
            <tr key={prop.className} className="bg-goku">
              <td className="px-3 py-2 whitespace-nowrap text-moon-14 rounded-s-lg">
                {prop.name}
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-moon-14">
                {prop.variable}
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-moon-14">
                {prop.className}
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-moon-14 rounded-e-lg">
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
