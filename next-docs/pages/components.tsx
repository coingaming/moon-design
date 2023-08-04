import { ReactNode } from 'react';
import components from '../components/components';
import ComponentsPageCard from '../components/componentsPage/ComponentsPageCard';
import ComponentsPageSection from '../components/componentsPage/ComponentsPageSection';
import Layout from '../components/Layout';

const PageComponents = () => (
  <>
    <h1 className="relative z-10  max-w-2xl text-moon-48 md:text-moon-72 font-medium text-bulma">
      Beautiful UI components, crafted with Tailwind CSS
    </h1>
    <div className="relative z-10 flex flex-col gap-6 max-w-2xl">
      <p className="text-moon-18 text-bulma">
        Components are one of the key building blocks of the design system.
        Their systematic reuse helps to create visual and functional consistency
        across products.
      </p>
    </div>
    <ComponentsPageSection title="Components">
      {components.map((component, index) => (
        <ComponentsPageCard key={index} title={component.name} />
      ))}
    </ComponentsPageSection>
  </>
);

PageComponents.getLayout = function getLayout(page: ReactNode) {
  return <Layout title="Components">{page}</Layout>;
};

export default PageComponents;
