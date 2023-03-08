import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import DeprecationWarning from '../../components/facing/DeprecationWarning';
import PropsTable from '../../components/PropsTable';
import Checked from '../../public/styledExamples/checkbox/Checked';
import Default from '../../public/styledExamples/checkbox/Default';
import Disabled from '../../public/styledExamples/checkbox/Disabled';
import NoLabel from '../../public/styledExamples/checkbox/NoLabel';
import Readonly from '../../public/styledExamples/checkbox/Readonly';
import useExamples from '../../utils/useExamples';

const PageAccordion = () => {
  const examples = useExamples('checkbox', 'styled');
  return (
    <>
      <ComponentPageDescription title="Checkbox" isDeprecated>
        <DeprecationWarning href="/core/checkbox" name="Checkbox" />
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
