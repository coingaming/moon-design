import CodePreviewWrapper from './wrapper/CodePreviewWrapper';

const CodePreview = ({ code }: { code: string }) => {
  return (
    <CodePreviewWrapper code={code}>
      <pre id="code">{code}</pre>
    </CodePreviewWrapper>
  );
};

export default CodePreview;
