import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import SegmentControl from '../../public/examples/tabsTW/segmentControl';
import useExamples from '../../utils/useExamples';

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
        title="Segment control"
        preview={<SegmentControl/>}
        code={examples ? examples.SegmentControl : 'Loading'}
      />
    </>
  );
};

export default Example;
