import { mergeClassnames } from '@heathmont/moon-base-tw';
import CodePreview from './codePreview/CodePreview';
import ComponentPreview from './ComponentPreview';
import HeaderSection from './HeaderSection';

type Props = {
  title: string;
  description?: string | JSX.Element;
  component: JSX.Element;
  code: string;
};

const ExampleSection: SC<Props> = async ({
  title,
  description,
  component,
  code,
}) => (
  <div className={mergeClassnames('flex flex-col gap-4 relative')}>
    <HeaderSection title={title} description={description} />
    <div className="bg-gohan rounded-moon-i-sm overflow-hidden mt-2">
      <ComponentPreview component={component} />
      <CodePreview code={code} />
    </div>
  </div>
);

export default ExampleSection;
