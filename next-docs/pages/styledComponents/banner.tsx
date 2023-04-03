import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import DeprecationWarning from '../../components/facing/DeprecationWarning';
import PropsTable from '../../components/PropsTable';
import Buttons from '../../public/styledExamples/banner/Buttons';
import Default from '../../public/styledExamples/banner/Default';
import HeaderIcon from '../../public/styledExamples/banner/HeaderIcon';
import Mobile from '../../public/styledExamples/banner/Mobile';
import Singleline from '../../public/styledExamples/banner/Singleline';
import useExamples from '../../utils/useExamples';

const PageBanner = () => {
  const examples = useExamples('banner', 'styled');
  return (
    <>
      <ComponentPageDescription title="Banner" isDeprecated>
        <DeprecationWarning href="/components/alert" name="Alert" />
      </ComponentPageDescription>
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
