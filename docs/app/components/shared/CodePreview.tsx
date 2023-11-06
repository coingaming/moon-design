import CodePreviewWrapper from './CodePreviewWrapper';

const CodePreview = ({ code }: { code: string }) => {
  return (
    <CodePreviewWrapper code={code}>
      <pre id="code">{code}</pre>
    </CodePreviewWrapper>
  );
};

export default CodePreview;
