import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Checked from '../../public/examples/checkbox/Checked';
import Default from '../../public/examples/checkbox/Default';
import Disabled from '../../public/examples/checkbox/Disabled';
import NoLabel from '../../public/examples/checkbox/NoLabel';
import Readonly from '../../public/examples/checkbox/Readonly';
import useExamples from '../../utils/useExamples';

const PageAccordion = () => {
  const examples = useExamples('checkbox');
  return (
    <>
      <ComponentPageDescription title="Checkbox">
        <p>
          Checkboxes are used as a list in our forms and signup pages so users
          can select options of their choice. Users are free to choose how many
          options to select, from zero to all of them.
        </p>
        <p>
          As each checkbox is independent, this means that additional checkboxes
          do not affect any other selections… or planets.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Checkbox"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Checked"
        preview={<Checked />}
        code={examples ? examples.Checked : 'Loading'}
      />
      <Preview
        title="No label"
        preview={<NoLabel />}
        code={examples ? examples.NoLabel : 'Loading'}
      />
      <Preview
        title="Disabled"
        preview={<Disabled />}
        code={examples ? examples.Disabled : 'Loading'}
      />
      <Preview
        title="Readonly"
        preview={<Readonly />}
        code={examples ? examples.Readonly : 'Loading'}
      />
      <PropsTable
        title="Props"
        data={[
          {
            name: 'checked',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Preset value for checkbox state',
          },
          {
            name: 'disabled',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Checkbox disabled state',
          },
          {
            name: 'readOnly',
            type: 'boolean',
            required: false,
            default: 'false',
            description:
              "Checkbox isn't disabled but its value can't be changed",
          },
          {
            name: 'label',
            type: 'string',
            required: false,
            default: '-',
            description: 'Label that describes checkbox purpose',
          },
        ]}
      />
    </>
  );
};

export default PageAccordion;
