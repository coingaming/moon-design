import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import tsx from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark';

SyntaxHighlighter.registerLanguage('typescript', tsx);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('bash', bash);

type Props = {
  children: string;
  language?: 'typescript' | 'css' | 'bash';
};

const CodeSnippet: React.FC<Props> = ({
  children,
  language = 'typescript',
}) => (
  <SyntaxHighlighter
    language={language}
    style={style}
    className="rounded-moon-s-sm !p-4"
  >
    {children}
  </SyntaxHighlighter>
);

export default CodeSnippet;
