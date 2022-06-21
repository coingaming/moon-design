import Preview from "../../components/codePreview/Preview";
import PropsTable from "../../components/PropsTable";
import Default from "../../public/examples/select/multiSelectTW/Default";
import useExamples from "../../utils/useExamples";

const Example = () => {
  const examples = useExamples('multiSelectTW');

  return (<div className="theme-moon-light">
    <section className="mt-8">
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Select : 'Loading'}
      />
    </section>

    <div className="mt-8">
      <PropsTable
        title="Props"
        data={[
          {
            name: 'value',
            type: 'string',
            required: true,
            default: '-',
            description: `The option's value`,
          },
          {
            name: 'options',
            type: 'Option[]',
            required: true,
            default: '-',
            description: `Options to be listed in the menu`,
          },
          {
            name: 'size',
            type: 'large | xLarge',
            required: false,
            default: 'large',
            description: `Size of the Select component`,
          },
          {
            name: 'label',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: `Label title`,
          },
          {
            name: 'placeholderSlot',
            type: 'JSX.Element | string',
            required: false,
            default: '-',
            description: 'Placeholder',
          },
          {
            name: 'headerSlot',
            type: 'JSX.Element',
            required: false,
            default: '-',
            description: 'Header element slot.',
          },
          {
            name: 'footerSlot',
            type: 'JSX.Element',
            required: false,
            default: '-',
            description: 'Footer element slot.',
          },
          {
            name: 'menuWidth',
            type: 'number',
            required: false,
            default: '_',
            description: 'Options container width',
          },
          {
            name: 'leftSlot',
            type: 'JSX.Element',
            required: false,
            default: '_',
            description: 'Left content for selected option',
          },
          {
            name: 'leftSlot',
            type: 'JSX.Element',
            required: false,
            default: '_',
            description: 'Inform message under select',
          },
          {
            name: 'amountOfVisibleItems',
            type: 'number',
            required: false,
            default: '_',
            description:
              'Set amount of visible options in multi select, all other will be hide under counter',
          },
          {
            name: 'isError',
            type: 'boolean',
            required: false,
            default: '_',
            description: 'Set valid/not valid select',
          },
          {
            name: 'isDisabled',
            type: 'boolean',
            required: false,
            default: '_',
            description: 'Is the select disabled',
          },
          {
            name: 'isMulti',
            type: 'boolean',
            required: false,
            default: '_',
            description: 'Support multiple selected options',
          },
          {
            name: 'isSearchable',
            type: 'boolean',
            required: false,
            default: '_',
            description: 'Whether to enable search functionality',
          },
          {
            name: 'closeMenuOnSelect',
            type: 'boolean',
            required: false,
            default: 'false',
            description:
              'Close the select menu when the user selects an option',
          },
        ]}
      />
    </div>
  </div>);
};

export default Example;
