import CodeSnippet from '../CodeSnippet';
import PageSection from '../PageSection';

const ScGettingStarted = () => (
  <>
    <p>
      <p className="text-krillin font-medium">
        NB! Packages built with Styled Components will be deprecated soon.
      </p>
      Please check out a new implementation built with Tailwind.
    </p>
    <PageSection title="Installation">
      <p>using npm</p>
      <CodeSnippet>{`npm i @heathmont/moon-themes @heathmont/moon-core @heathmont/moon-components`}</CodeSnippet>
      <p>using yarn</p>
      <CodeSnippet>{`yarn add @heathmont/moon-themes @heathmont/moon-core @heathmont/moon-components`}</CodeSnippet>
    </PageSection>
    <PageSection title="Peer dependencies">
      <p>
        Your project should include "react", "react-dom" and "styled-components"
        as its dependency.
      </p>
      <p>using npm</p>
      <CodeSnippet>{`npm i react react-dom styled-components`}</CodeSnippet>
      <p>using yarn</p>
      <CodeSnippet>{`yarn add react react-dom styled-components`}</CodeSnippet>
    </PageSection>
    <PageSection title="Set up Theme">
      <p>{`Wrap your entire application with the <ThemeProvider />, providing your preferred theme via the theme prop.`}</p>
      <p>
        Be sure to include global styles and font-face definitions, as these
        will inherit the theme and set the integral style foundations for your
        app.
      </p>
      <CodeSnippet>{`/* Your App.tsx */
import React from 'react';
import { ThemeProvider, sportsbetDark } from '@heathmont/moon-themes';

export const App = () => (
  <ThemeProvider theme={sportsbetDark}>
    <main>
      {/* Your App… */}
    </main>
  </ThemeProvider>
);
`}</CodeSnippet>
    </PageSection>
    <PageSection title="Using Themes With Styled Components">
      <p>
        The theme context is included by default in styled components props, and
        can be implemented as follows:
      </p>
      <p>Access 'theme' from styled component props</p>
      <CodeSnippet>{`import styled from 'styled-components';

const Example = styled.div(({ theme }) => ({
  display: 'block',
  color: theme.colorNew.bulma,
  padding: theme.space.default,
}));
`}</CodeSnippet>
      <p>Or alternatively, destructure the theme properties…</p>
      <CodeSnippet>{`import styled from 'styled-components';

const Example = styled.div(({ theme: { colorNew, space } }) => ({
  display: 'block',
  color: colorNew.bulma,
  padding: space.default,
}));
`}</CodeSnippet>
    </PageSection>
    <PageSection title="Without Styled Components">
      <p>
        The useTheme helper function returns the current theme from the theme
        context:
      </p>
      <CodeSnippet>{`import React from 'react';
import { useTheme } from '@heathmont/moon-themes';

const Example = () => {
  const theme = useTheme();
  return <p>{theme.brand}</p>; /* Returns the theme brand name. */
};
`}</CodeSnippet>
      <p>or for more manual control:</p>
      <CodeSnippet>{`import React from 'react';
import { ThemeContext } from '@heathmont/moon-themes';

const Example = () => {
  const theme = React.useContext(ThemeContext);
  return <p>{theme.brand}</p>; /* Returns the theme brand name. */
};
`}</CodeSnippet>
    </PageSection>
    <PageSection title="TypeScript Support">
      <p>
        If you're using TypeScript, you can extend styled-components' types to
        include our theming schema.
      </p>
      <p>
        To make use of extra features (such as auto-completion in VSCode),
        create a d.ts file with the following:
      </p>
      <CodeSnippet>{`/* types/styled-components.d.ts */
import 'styled-components';
import { Theme } from '@heathmont/moon-themes';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
`}</CodeSnippet>
    </PageSection>
  </>
);

export default ScGettingStarted;
