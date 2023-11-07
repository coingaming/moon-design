import { mergeClassnames } from '@heathmont/moon-base-tw';
import { GenericLink } from '@heathmont/moon-icons-tw';
import CodePreview from './CodePreview';
import ComponentPreview from './ComponentPreview';

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
    <h2 id={title} className="text-moon-20 font-medium ">
      <a
        href={`#${title}`}
        className="flex items-center gap-3 [&:hover_svg]:opacity-100 cursor-pointer"
      >
        {title}
        <GenericLink className="text-piccolo text-moon-16 opacity-0 transition-opacity" />
      </a>
    </h2>
    {description && (
      <div className="text-moon-16 text-bulma">{description}</div>
    )}
    <div className="bg-gohan rounded-moon-i-sm overflow-hidden mt-2">
      <ComponentPreview component={component} />
      <CodePreview code={code} />
    </div>
  </div>
);

export default ExampleSection;
