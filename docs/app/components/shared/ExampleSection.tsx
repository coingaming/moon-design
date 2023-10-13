import CodePreview from './CodePreview';
import ComponentPreview from './ComponentPreview';

type Props = {
  title: string;
  component: JSX.Element;
  code: string;
};

const ExampleSection = async ({ title, component, code }: Props) => (
  <div className="space-y-2">
    <h2 className="text-moon-24 font-medium">{title}</h2>
    <ComponentPreview component={component} />
    <CodePreview code={code} />
  </div>
);

export default ExampleSection;
