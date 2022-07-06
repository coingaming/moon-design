import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Buttons from '../../public/examples/switchTW/Buttons';
import Default from '../../public/examples/switchTW/Default';
import Disabled from '../../public/examples/switchTW/Disabled';
import Rtl from '../../public/examples/switchTW/Rtl';
import Theme from '../../public/examples/switchTW/Theme';
import useExamples from '../../utils/useExamples';

export default function PageSwitch() {
  const examples = useExamples('switchTW');
  return (
    <>
      <ComponentPageDescription title="Switch">
        <p>
          Switch is a control that is used to quickly switch between two
          possible states. Switches are only used for these binary actions that
          occur immediately after the user “flips” the switch. They are commonly
          used for “on/off” switches.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Theme switch"
        preview={<Theme />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Disabled"
        preview={<Disabled />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Buttons"
        preview={<Buttons />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Right to left"
        preview={<Rtl />}
        code={examples ? examples.Default : 'Loading'}
      />

      <PropsTable
        title="Props"
        data={[
          {
            name: 'id',
            type: 'string',
            required: false,
            default: '-',
            description: `Unique element's identifier`,
          },
          {
            name: 'checked',
            type: 'boolean',
            required: false,
            default: 'false',
            description: `Is switch checked/unchecked`,
          },
          {
            name: 'onChange',
            type: 'React.ChangeEvent',
            required: false,
            default: '-',
            description: `Event that happens when you click on the switch`,
          },
          {
            name: 'captionUnchecked',
            type: 'string',
            required: false,
            default: '-',
            description: `Displayed text when unchecked`,
          },
          {
            name: 'captionChecked',
            type: 'string',
            required: false,
            default: '-',
            description: `Displayed text when checked`,
          },
          {
            name: 'isRtl',
            type: 'boolean',
            required: false,
            default: 'false',
            description: `-`,
          },
        ]}
      />
    </>
  );
}
