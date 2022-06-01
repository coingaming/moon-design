import CodeSnippet from './CodeSnippet';
import PageSection from './PageSection';

const IconsImportHelper: React.FC<{ text: string }> = ({ text }) => (
  <PageSection>
    <h2 className="text-moon-24 font-medium">Importing</h2>
    <CodeSnippet>{text}</CodeSnippet>
  </PageSection>
);

export default IconsImportHelper;
