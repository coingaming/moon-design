const CodePreview = ({ code }: { code: string }) => (
  <pre className="theme-moon-dark overflow-x-auto bg-gohan text-bulma rounded-moon-s-sm p-4">
    {code}
  </pre>
);

export default CodePreview;
