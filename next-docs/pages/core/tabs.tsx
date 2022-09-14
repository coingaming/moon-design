import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import IsSegmented from '../../public/examples/tabsTW/IsSegmented';
import IsTabPills from '../../public/examples/tabsTW/IsTabPills';
import IsVertical from '../../public/examples/tabsTW/IsVertical';
import VerticalWithLine from '../../public/examples/tabsTW/VerticalWithLine';
import useExamples from '../../utils/useExamples';
import IsUnderline from '../../public/examples/tabsTW/IsUnderline';

const Example = () => {
  const examples = useExamples('tabsTW');
  return (
    <>
      <ComponentPageDescription title="Tabs">
        <p className="w-[416px]">
          Use tabs to allow users to navigate easily between views within the
          same context. <br /> <br />
          Each tab should contain content that is distinct from other tabs in a
          set. For example, tabs can present different sections of news,
          different genres of music, or different themes of documents.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Tab underline"
        preview={<IsUnderline />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Tab pills"
        preview={<IsTabPills />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Segment control"
        preview={<IsSegmented />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Tab underline vertical"
        preview={<VerticalWithLine />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Tab pills vertical"
        preview={<IsVertical />}
        code={examples ? examples.Default : 'Loading'}
      />
    </>
  );
};

export default Example;
