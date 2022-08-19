import CodeSnippet from '../components/CodeSnippet';
import PageSection from '../components/PageSection';

const PageHowToContribute = () => (
  <>
    <h1 className="text-moon-32 font-medium">How to contribute</h1>
    <PageSection title="Setup">
      <p className="text-moon-16">Install `pnpm`:</p>
      <CodeSnippet>{`npm install -g pnpm`}</CodeSnippet>
      <p className="text-moon-16">
        Check{' '}
        <a
          href="https://pnpm.io/installation"
          className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
          target="_blank"
          rel="noreferrer"
        >
          pnpm docs
        </a>{' '}
        for additional ways.
      </p>
      <p className="text-moon-16">Clone the repository:</p>
      <CodeSnippet>{`git clone git@github.com:coingaming/moon-design.git`}</CodeSnippet>
      <p className="text-moon-16">
        Install dependencies and link local packages together:
      </p>
      <CodeSnippet>{`pnpm install`}</CodeSnippet>
      <p className="text-moon-16">Compile and build all packages:</p>
      <CodeSnippet>{`pnpm run build`}</CodeSnippet>
      <p className="text-moon-16">
        Run storybook for development with Hot Module Replacement:
      </p>
      <CodeSnippet>{`pnpm run next dev`}</CodeSnippet>
      <p className="text-moon-16">
        For Hot Module Replacement run in parallel in separate tab:
      </p>
      <CodeSnippet>{`pnpm run watch`}</CodeSnippet>
      <p className="text-moon-16">
        Build and run storybook for production at localhost:80:
      </p>
      <CodeSnippet>{`pnpm run next build`}</CodeSnippet>
      <CodeSnippet>{`pnpm run next start`}</CodeSnippet>
    </PageSection>
    <PageSection title="Check our githib">
      <ul className="list-inside list-disc text-moon-16">
        <li>
          <a
            href="https://github.com/coingaming/moon-design"
            className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
            target="_blank"
            rel="noreferrer"
          >
            Github repository
          </a>
        </li>
        <li>
          <a
            href="https://github.com/coingaming/moon-design/blob/develop/CONTRIBUTING.md"
            className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
            target="_blank"
            rel="noreferrer"
          >
            Contributing page
          </a>
        </li>
      </ul>
    </PageSection>
  </>
);

export default PageHowToContribute;
