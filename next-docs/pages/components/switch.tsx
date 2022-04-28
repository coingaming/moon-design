import Preview from '../../components/codePreview/Preview';
import PropsTable from "../../components/PropsTable";
import Caption from '../../public/examples/switch/Caption';
import Default from '../../public/examples/switch/Default';
import Rtl from '../../public/examples/switch/Rtl';
import Sizes from '../../public/examples/switch/Sizes';
import Theme from '../../public/examples/switch/Theme';
import ThemeCaption from '../../public/examples/switch/ThemeCaption';
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
          An alternate checkbox appearance for simulating on/off state.
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
          title="With captions"
          preview={<Caption />}
          code={examples ? examples.Caption : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Dark &amp; Light mode with captions"
          preview={<ThemeCaption />}
          code={examples ? examples.ThemeCaption : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Rtl"
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
