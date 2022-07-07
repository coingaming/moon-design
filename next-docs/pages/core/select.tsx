import React from "react";
import Preview from "../../components/codePreview/Preview";
import PropsTable from "../../components/PropsTable";
import CustomOptionLabel from "../../public/examples/select/selectTW/CustomOptionLabel";
import Default from "../../public/examples/select/selectTW/Default";
import Disabled from "../../public/examples/select/selectTW/Disabled";
import Error from "../../public/examples/select/selectTW/Error";
import Hint from "../../public/examples/select/selectTW/Hint";
import LeftSlot from "../../public/examples/select/selectTW/LeftSlot";
import Searchable from "../../public/examples/select/selectTW/Searchable";
import Sizes from "../../public/examples/select/selectTW/Sizes";
import VisibleItems from "../../public/examples/select/selectTW/VisibleItems";
import useExamples from "../../utils/useExamples";

const Example = () => {
  const examples = useExamples('selectTW');

  return (<div className="flex flex-col gap-12 theme-moon-light">
    <h1 className="text-moon-32 font-medium">Single select</h1>
    <div className="flex flex-col gap-2 max-w-screen-sm">
      <p className="text-moon-16">
        Indeed, forms require input from all users, including astronauts. Text input fields help to gather both short and long-form information. The size of the text field should correspond to the length of information that’s required.
      </p>
      <p className="text-moon-16">
        Text input fields can contain various rules to ensure the right information is obtained from users. Users should also be given prompts to guide them on what’s needed, or if they’ve made an error while doing so.
      </p>
    </div>

    <section className="mt-8">
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Select : 'Loading'}
      />
    </section>

    <section className="mt-8">
      <Preview
        title="Disabled"
        preview={<Disabled />}
        code={examples ? examples.Disabled : 'Loading'}
      />
    </section>

    <section className="mt-8">
      <Preview
        title="Sizes"
        preview={<Sizes />}
        code={examples ? examples.Sizes : 'Loading'}
      />
    </section>

    <section className="mt-8">
      <Preview
        title="Hint"
        preview={<Hint />}
        code={examples ? examples.Hint : 'Loading'}
      />
    </section>

    <section className="mt-8">
      <Preview
        title="Error"
        preview={<Error />}
        code={examples ? examples.Error : 'Loading'}
      />
    </section>

    <section className="mt-8">
      <Preview
        title="Left slot"
        preview={<LeftSlot />}
        code={examples ? examples.LeftSlot : 'Loading'}
      />
    </section>

    <section className="mt-8">
      <Preview
        title="Custom option"
        preview={<CustomOptionLabel />}
        code={examples ? examples.CustomOptionLabel : 'Loading'}
      />
    </section>

    <section className="mt-8">
      <Preview
        title="Visible items"
        preview={<VisibleItems />}
        code={examples ? examples.VisibleItems : 'Loading'}
      />
    </section>

    <section className="mt-8">
        <Preview
          title="Searchable"
          preview={<Searchable />}
          code={examples ? examples.Searchable : 'Loading'}
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
