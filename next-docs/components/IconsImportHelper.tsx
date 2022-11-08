import CodeSnippet from './CodeSnippet';
import PageSection from './PageSection';

const IconsImportHelper: React.FC<{ text: string }> = ({ text }) => (
  <PageSection title="Importing">
    <CodeSnippet>{text}</CodeSnippet>
  </PageSection>
);

export default IconsImportHelper;
