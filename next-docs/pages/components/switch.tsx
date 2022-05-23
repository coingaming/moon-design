import Preview from '../../components/codePreview/Preview';
import PropsTable from "../../components/PropsTable";
import Buttons from "../../public/examples/switch/Buttons";
import Default from '../../public/examples/switch/Default';
import DisabledTW from "../../public/examples/switch/Disabled";
import Rtl from "../../public/examples/switch/Rtl";
import Sizes from '../../public/examples/switch/Sizes';
import Theme from '../../public/examples/switch/Theme';
import useExamples from '../../utils/useExamples';

type Props = {
  isRtl?: boolean;
};

export default function PageSwitch({ isRtl }: Props) {
  const examples = useExamples('switch');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Switch</h1>
        <p className="text-lg mt-4">
          Switch is a control that is used to quickly switch between two possible states. Switches are only used for these binary actions that occur immediately after the user “flips” the switch. They are commonly used for “on/off” switches.
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Default"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      {/* Sizes */}
      <section className="mt-8">
        <Preview
          title="Sizes"
          preview={<Sizes />}
          code={examples ? examples.Sizes : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Dark &amp; Light mode"
          preview={<Theme />}
          code={examples ? examples.Theme : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="DisabledTW"
          preview={<Disabled />}
          code={examples ? examples.Disabled : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Buttons"
          preview={<Buttons />}
          code={examples ? examples.Buttons : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Right to left"
          preview={<Rtl />}
          code={examples ? examples.Rtl : 'Loading'}
        />
      </section>

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
