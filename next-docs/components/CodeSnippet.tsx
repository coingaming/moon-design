import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
    style={atomOneDark}
    className="rounded-moon-s-sm !p-4"
  >
    {children}
  </SyntaxHighlighter>
);

export default CodeSnippet;
