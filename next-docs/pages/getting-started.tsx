import React from 'react';
import CodeSnippet from '../components/CodeSnippet';

const Text = ({ children }) => <p className="text-lg mt-4">{children}</p>;

export default function PageBadge() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Getting started</h1>
        <h2 className="text-3xl font-semibold mt-8">Installation</h2>

        <Text>using npm</Text>
        <CodeSnippet>{`npm i @heathmont/moon-themes @heathmont/moon-core @heathmont/moon-components`}</CodeSnippet>

        <Text>using yarn</Text>
        <CodeSnippet>{`yarn add @heathmont/moon-themes @heathmont/moon-core @heathmont/moon-components`}</CodeSnippet>
      </section>

      <section className="mt-8">
        <h2 className="text-3xl font-semibold">Set up Theme</h2>
        <Text>{`Wrap your entire application with the <ThemeProvider />, providing your preferred theme via the theme prop.`}</Text>
        <Text>
          Be sure to include global styles, as these will inherit the theme and
          set the integral style foundations for your app.
        </Text>

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
      </section>

      <section className="mt-8">
        <h2 className="text-3xl font-semibold">
          Using Themes With Styled Components
        </h2>

        <Text>
          The theme context is included by default in styled components props,
          and can be implemented as follows:
        </Text>

        <Text>Access 'theme' from styled component props</Text>
        <CodeSnippet>{`import styled from 'styled-components';

const Example = styled.div(({ theme }) => ({
  display: 'block',
  color: theme.color.bulma[100],
  padding: theme.space.default,
}));
`}</CodeSnippet>
        <Text>Or alternatively, destructure the theme properties…</Text>
        <CodeSnippet>{`import styled from 'styled-components';

const Example = styled.div(({ theme: { color, space } }) => ({
  display: 'block',
  color: color.bulma[100],
  padding: space.default,
}));
`}</CodeSnippet>
      </section>

      <section className="mt-8">
        <h2 className="text-3xl font-semibold">Without Styled Components</h2>

        <Text>
          The useTheme helper function returns the current theme from the theme
          context:
        </Text>
        <CodeSnippet>{`import React from 'react';
import { useTheme } from '@heathmont/moon-themes';

const Example = () => {
  const theme = useTheme();
  return <p>{theme.brand}</p>; /* Returns the theme brand name. */
};
`}</CodeSnippet>
        <Text>or for more manual control:</Text>
        <CodeSnippet>{`import React from 'react';
import { ThemeContext } from '@heathmont/moon-themes';

const Example = () => {
  const theme = React.useContext(ThemeContext);
  return <p>{theme.brand}</p>; /* Returns the theme brand name. */
};
`}</CodeSnippet>
      </section>

      <section className="mt-8">
        <h2 className="text-3xl font-semibold"> TypeScript Support</h2>

        <Text>
          If you're using TypeScript, you can extend styled-components' types to
          include our theming schema.
        </Text>
        <Text>
          To make use of extra features (such as auto-completion in VSCode),
          create a d.ts file with the following:
        </Text>
        <CodeSnippet>{`/* types/styled-components.d.ts */
import 'styled-components';
import { Theme } from '@heathmont/moon-themes';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
`}</CodeSnippet>
      </section>
    </>
  );
}
