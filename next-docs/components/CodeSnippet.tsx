const CodeSnippet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <pre className="theme-moon-dark w-full bg-goku overflow-scroll p-4 text-moon-14 text-bulma rounded-moon-s-sm">
    {children}
  </pre>
);

export default CodeSnippet;
