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
      <h1 className="text-moon-32 font-medium">Banner</h1>
      <div className="flex flex-col gap-2 max-w-screen-sm">
        <p className="text-moon-16">
          Banners are used to show users important, succinct messages, or space
          alerts, that users should know about. They can interact or ignore
          banners at any time, as they are non-modal. What to take note of when
          using banners Only one banner should be shown at a time. Banners
          require user action in order to be dismissed. Messages should consist
          of no longer than one headline, one description sentence and one short
          call-to-action.
        </p>
      </div>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Buttons"
        preview={<Buttons />}
        code={examples ? examples.Buttons : 'Loading'}
      />
      <Preview
        title="Header Icon"
        preview={<HeaderIcon />}
        code={examples ? examples.HeaderIcon : 'Loading'}
      />
      <Preview
        title="Mobile"
        preview={<Mobile />}
        code={examples ? examples.Mobile : 'Loading'}
      />
      <Preview
        title="Singleline"
        preview={<Singleline />}
        code={examples ? examples.Singleline : 'Loading'}
      />
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
