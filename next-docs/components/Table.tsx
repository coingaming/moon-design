/* This example requires Tailwind CSS v2.0+ */
const props = [
  {
    name: 'title',
    type: 'string',
    required: true,
    default: '-',
    description: 'Chart title text',
  },
  {
    name: 'data',
    type: 'Data[]',
    required: true,
    default: '-',
    description: 'Required. Array of data',
  },
  {
    name: 'onUpdate',
    type: 'function',
    required: false,
    default: '-',
    description: 'Handler function when pressing the update button',
  },
  {
    name: 'onShare',
    type: 'function',
    required: false,
    default: '-',
    description: 'Handler function when pressing the share button',
  },
  {
    name: 'onExpand',
    type: 'function',
    required: false,
    default: '-',
    description: 'Handler function when pressing the expand button',
  },
  {
    name: 'isUpdating',
    type: 'boolean',
    required: false,
    default: 'false',
    description: 'If set true, the loader icon is displayed',
  },
  {
    name: 'hasUpdates',
    type: 'boolean',
    required: false,
    default: 'false',
    description: 'If set true, the dot icon is displayed',
  },
  {
    name: 'filter',
    type: 'React.ReactNode',
    required: false,
    default: '-',
    description: 'Placeholder for filter component',
  },
  {
    name: 'height',
    type: 'string, number',
    required: false,
    default: '446',
    description: 'Height of component',
  },
  {
    name: 'positiveColor',
    type: 'ColorProps',
    required: false,
    default: 'krillin.100',
    description: 'Highlight color for positive values',
  },
  {
    name: 'negativeColor',
    type: 'ColorProps',
    required: false,
    default: 'whis.100',
    description: 'Highlight color for negative values',
  },
  {
    name: 'icon',
    type: 'React.ReactNode',
    required: false,
    default: '<ChartIcons.Countries />',
    description: 'Placeholder for chart icon component',
  },
  {
    name: 'loaderText',
    type: 'string, React.ReactNode',
    required: false,
    default: 'No data',
    description: 'The text for "no data" / "loading" states',
  },
  {
    name: 'formatFn',
    type: 'function',
    required: false,
    default: '-',
    description: 'The formatter function of data value',
  },
];

export default function Table() {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-4 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Required
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Default
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.map((person, personIdx) => (
                  <tr
                    key={person.email}
                    className={personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {person.name}
                    </td>

                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.type}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.required ? 'Yes' : 'No'}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.default}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500">
                      {person.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
