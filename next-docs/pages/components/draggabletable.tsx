// @ts-nocheck
import React from 'react';
import Default from '../../public/examples/draggabletable/Default';
import Preview from '../../components/codePreview/Preview';
import useExamples from '../../utils/useExamples';

const PreviewDraggableTable = () => {
  return (
    <Preview
      title="Draggable table"
      preview={<Default />}
      code={examples ? examples.Default : 'Loading'}
    />
  );
};

export default function PageDraggableTable() {
  const examples = useExamples('DraggableTable');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">DraggableTable</h1>
      </section>
      <section className="mt-8">
        <PreviewDraggableTable />
      </section>
    </>
  );
}
