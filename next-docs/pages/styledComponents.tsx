import Link from 'next/link';
import ComponentsPageSection from '../components/componentsPage/ComponentsPageSection';
import StyledComponentsPageCard from '../components/componentsPage/StyledComponentsPageCard';
import styledComponents from '../components/styledComponents';

const PageComponents = () => (
  <>
    <h1 className="relative z-10  max-w-2xl text-moon-48 md:text-moon-72 font-medium text-bulma">
      Deprecated Styled Components
    </h1>
    <div className="relative z-10 flex flex-col gap-6 max-w-2xl">
      <p className="text-moon-18 text-chichi">
        NB! Styled Components are deprecated. Please use new{' '}
        <Link
          href="/components"
          className="text-bulma underline active:text-piccolo hover:text-piccolo transition-colors"
        >
          Components
        </Link>{' '}
        built with Tailwind.
      </p>
    </div>
    <ComponentsPageSection title="Styled Components">
      {styledComponents.map((component, index) => (
        <StyledComponentsPageCard key={index} title={component.name} />
      ))}
    </ComponentsPageSection>
  </>
);

export default PageComponents;
