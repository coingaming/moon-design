import { ReactNode } from 'react';
import Preview from '../components/codePreview/Preview';
import ComponentPageDescription from '../components/ComponentPageDescription';
import Layout from '../components/Layout';
import Caption from '../public/examples/typography/Caption';
import Colors from '../public/examples/typography/Colors';
import Heading from '../public/examples/typography/Heading';
import Text from '../public/examples/typography/Text';
import useComponent from '../utils/useComponent';
import type { ComponentNames } from '../components/getComponent';

const COMPONENT_NAME: ComponentNames = 'Typography';

const PageTypography = () => {
  const { examples } = useComponent(COMPONENT_NAME);
  return (
    <>
      <ComponentPageDescription title={COMPONENT_NAME}>
        <p>Typography includes text, headings, and captions.</p>
      </ComponentPageDescription>
      <Preview
        title="Text"
        preview={<Text />}
        code={examples ? examples.Text : 'Loading'}
      />
      <Preview
        title="Heading"
        preview={<Heading />}
        code={examples ? examples.Heading : 'Loading'}
      />
      <Preview
        title="Caption"
        preview={<Caption />}
        code={examples ? examples.Caption : 'Loading'}
      />
      <Preview
        title="Custom Colours"
        preview={<Colors />}
        code={examples ? examples.Colors : 'Loading'}
      />
    </>
  );
};

PageTypography.getLayout = function getLayout(page: ReactNode) {
  return <Layout title={COMPONENT_NAME}>{page}</Layout>;
};

export default PageTypography;
