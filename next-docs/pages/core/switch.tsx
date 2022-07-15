import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Buttons from '../../public/examples/switchTW/Buttons';
import CustomIcons from '../../public/examples/switchTW/CustomIcons';
import Default from '../../public/examples/switchTW/Default';
import Disabled from '../../public/examples/switchTW/Disabled';
import Rtl from '../../public/examples/switchTW/Rtl';
import Sizes from '../../public/examples/switchTW/Sizes';
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
        title="Sizes"
        preview={<Sizes />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Theme switch"
        preview={<Theme />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Custom icons"
        preview={<CustomIcons />}
        code={examples ? examples.CustomIcons : 'Loading'}
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
            name: 'checked',
            type: 'boolean',
            required: true,
            default: 'false',
            description: `Is switch checked/unchecked`,
          },
          {
            name: 'onChange',
            type: 'React.ChangeEvent',
            required: true,
            default: '-',
            description: `Event that happens when you click on the switch`,
          },
          {
            name: 'size',
            type: 'string',
            required: true,
            default: '-',
            description: `Determines the size of the switch`,
          },
          {
            name: 'button',
            type: 'string',
            required: false,
            default: '-',
            description: `Displayed switch with button`,
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
