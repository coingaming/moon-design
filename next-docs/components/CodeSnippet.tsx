import { useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
import typescript from 'highlight.js/lib/languages/typescript';
import Highlight from 'react-highlight/lib';

// hljs.registerLanguage('typescript', typescript);
// // hljs.registerLanguage('bash', bash);
// // hljs.registerLanguage('css', css);

// const CodeSnippet: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   useEffect(() => {
//     hljs.highlightAll();
//   });
//   return (
//     <pre className="w-full overflow-scrolltext-moon-14 text-bulma">
//       <code className="rounded-moon-s-sm p-4">{children}</code>
//     </pre>
//   );
// };

const CodeSnippet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Highlight className="w-full overflow-scrolltext-moon-14 text-bulma rounded-moon-s-sm p-4">
    {children}
  </Highlight>
);

export default CodeSnippet;
