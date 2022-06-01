import Preview from '../../components/codePreview/Preview';
import PropsTable from '../../components/PropsTable';
import Buttons from '../../public/examples/banner/Buttons';
import Default from '../../public/examples/banner/Default';
import HeaderIcon from '../../public/examples/banner/HeaderIcon';
import Mobile from '../../public/examples/banner/Mobile';
import Singleline from '../../public/examples/banner/Singleline';
import useExamples from '../../utils/useExamples';

const PageBanner = () => {
  const examples = useExamples('banner');
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-medium">Banner</h1>
        <p className="text-lg mt-4">
          Banners are used to show users important, succinct messages, or space
          alerts, that users should know about. They can interact or ignore
          banners at any time, as they are non-modal. What to take note of when
          using banners Only one banner should be shown at a time. Banners
          require user action in order to be dismissed. Messages should consist
          of no longer than one headline, one description sentence and one short
          call-to-action.
        </p>
      </section>

      <section className="mt-8">
        <Preview
          title="Default"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
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
          title="Header Icon"
          preview={<HeaderIcon />}
          code={examples ? examples.HeaderIcon : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Mobile"
          preview={<Mobile />}
          code={examples ? examples.Mobile : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Singleline"
          preview={<Singleline />}
          code={examples ? examples.Singleline : 'Loading'}
        />
      </section>

      <PropsTable
        title="Props"
        data={[
          {
            name: 'description',
            type: 'string',
            required: true,
            default: '-',
            description: 'Main text content of the banner',
          },
          {
            name: 'title',
            type: 'string',
            required: false,
            default: '-',
            description: 'Text to appear on the header for multiline mode',
          },
          {
            name: 'iconHeader',
            type: 'React.ReactElement',
            required: false,
            default: '-',
            description:
              'Icon to appear at  the top end of the header for multiline',
          },
          {
            name: 'isMultiline',
            type: 'boolean',
            required: false,
            default: 'true',
            description: 'Controls whether the banner is in multiline mode',
          },
          {
            name: 'isMobile',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Controls whether the banner is in mobile mode',
          },
        ]}
      />
    </>
  );
};
export default PageBanner;
