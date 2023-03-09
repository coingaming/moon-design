import dynamic from 'next/dynamic';

const CodeSnippet = dynamic(() => import('./CodeComponent'), { ssr: false });

export default CodeSnippet;
