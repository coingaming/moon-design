import Link from 'next/link';
import CodeSnippet from '../CodeSnippet';
import PageSection from '../PageSection';

const DevGettingStarted = () => (
  <>
    <PageSection title="Overview">
      <p className="text-moon-16">
        <span className="font-medium">Moon Design System</span> is a collection
        of reusable components set up and grouped according to simple and clear
        standards. <span className="font-medium">Moon DS</span> component
        collection is the single source of truth that can be used to build any
        number of applications. Currently, to improve performance,{' '}
        <span className="font-medium">Moon DS</span> is moving to Tailwind CSS
        framework instead of the Styled-components (CSS-in-JS styling framework)
        that was used previously.
      </p>
      <p className="text-moon-16 font-medium">
        NB! Please note that the Moon DS, which is based on the
        Styled-components framework, is still maintained, but it is no longer
        updated with new components.{' '}
      </p>
    </PageSection>
    <PageSection title="Prerequisites">
      <p className="text-moon-16">
        Before you can use Moon DS, you need to do the following:{' '}
      </p>
      <ol className="flex flex-col gap-1 list-decimal list-inside text-moon-16">
        <li>
          Install Tailwind CSS:{' '}
          <a
            href="https://tailwindcss.com/docs/installation"
            className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
            target="_blank"
            rel="noreferrer"
          >
            Tailwind CLI - Tailwind CSS
          </a>
        </li>
        <li>
          <span className="font-medium">
            NB! You need to be using the latest version of Tailwind CSS for the
            system to work.
          </span>
        </li>
        <li>
          <a href="#install">
            Install <span className="font-medium">Moon DS</span> in your
            project.
          </a>
        </li>
        <li>
          <a href="#config">
            Configure your project to use{' '}
            <span className="font-medium">Moon DS.</span>
          </a>
        </li>
        <li>
          <a href="#rtl">
            Install and configure{' '}
            <code className="bg-goku px-2 rounded-moon-s-xs">
              tailwindcss-rtl
            </code>
          </a>
        </li>
        <li>
          <a href="#themes">
            Install and configure the Themes package. (Optional)
          </a>
        </li>
        <li>
          <a href="#icons">
            Install and configure the Icons package. (Optional)
          </a>
        </li>
      </ol>
    </PageSection>
    <PageSection title="Installing Moon DS" id="install">
      <p className="text-moon-16">Run:</p>
      <CodeSnippet>{`pnpm i @heathmont/moon-core-tw`}</CodeSnippet>
    </PageSection>
    <PageSection title="Configuring the Project" id="config">
      <p className="text-moon-16">
        To configure your project to use{' '}
        <span className="font-medium">Moon DS</span> presets, add the following
        to{' '}
        <code className="bg-goku px-2 rounded-moon-s-xs">
          tailwind.config.js
        </code>{' '}
        file:
      </p>
      <CodeSnippet>{`// tailwind.config
{ 
...
  content: [
    './node_modules/@heathmont/moon-core-tw/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [
    require('@heathmont/moon-core-tw/src/private/presets/ds-moon-preset'),
  ],
...
}
`}</CodeSnippet>
      <p className="text-moon-16 font-medium">
        NB! Make sure you have the content list in{' '}
        <code className="bg-goku px-2 rounded-moon-s-xs">
          tailwind.config.js
        </code>
        , that is pointing to all files using tailwind.
      </p>
      <p className="text-moon-16">
        Project-specific configurations contained in the{' '}
        <code className="bg-goku px-2 rounded-moon-s-xs">
          tailwind.config.js
        </code>{' '}
        file are merged against presets in the same way they are merged against
        the default configuration. Also, you can always extend or redefine the
        existing classes in{' '}
        <code className="bg-goku px-2 rounded-moon-s-xs">
          tailwind.config.js
        </code>{' '}
        file.
      </p>
      <p>
        For more information on configuring presets, see:{' '}
        <a
          href="https://tailwindcss.com/docs/presets"
          className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
          target="_blank"
          rel="noreferrer"
        >
          Presets - Tailwind CSS
        </a>
      </p>
    </PageSection>
    <PageSection title="Installing and adding tailwindcss-rtl plugin" id="rtl">
      <p className="text-moon-16">
        <code className="bg-goku px-2 rounded-moon-s-xs">tailwindcss-rtl</code>{' '}
        is a third-party plugin that provides new styles for Tailwind for
        right-to-left orientation.
      </p>
      <p className="text-moon-16">1. Run:</p>
      <CodeSnippet>{`npm i tailwindcss-rtl`}</CodeSnippet>
      <p className="text-moon-16">
        2. Add the plugin to your config{' '}
        <code className="bg-goku px-2 rounded-moon-s-xs">
          tailwind.config.js
        </code>{' '}
        file:{' '}
      </p>
      <CodeSnippet>{`// tailwind.config
{ 
...
  plugins: [    
    require('tailwindcss-rtl'),   
  ], 
...
}
`}</CodeSnippet>
      <ul className="flex flex-col gap-1 list-disc list-inside text-moon-16">
        <li>
          {' '}
          For more information about tailwindcss-rtl plugin and the list of all
          extended classes, see npm:{' '}
          <a
            href="https://www.npmjs.com/package/tailwindcss-rtl"
            className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
            target="_blank"
            rel="noreferrer"
          >
            tailwindcss-rtl
          </a>
        </li>
        <li>
          {' '}
          For more information about customization with plugins, see{' '}
          <a
            href="https://tailwindcss.com/docs/plugins"
            className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
            target="_blank"
            rel="noreferrer"
          >
            Plugins - Tailwind CSS
          </a>{' '}
        </li>
      </ul>
    </PageSection>
    <PageSection title="Moon DS additional information">
      <ul className="flex flex-col gap-1 list-disc list-inside text-moon-16">
        <li>
          Fonts and reset CSS are configured on the project side. For more
          information, see:{' '}
          <a
            href="https://tailwindcss.com/docs/installation"
            className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
            target="_blank"
            rel="noreferrer"
          >
            Installation: Tailwind CLI - Tailwind CSS
          </a>
          .
        </li>
        <li>
          Tailwind CSS IntelliSense is an extension that helps with writing
          tailwind code. All classes in our preset are supported by this tool.
          For more information on this extension, see:{' '}
          <a
            href="https://tailwindcss.com/docs/editor-setup"
            className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
            target="_blank"
            rel="noreferrer"
          >
            Editor Setup - Tailwind CSS
          </a>
          .
        </li>
      </ul>
    </PageSection>
    <PageSection title="Packages">
      <p className="text-moon-16">
        For now, <span className="font-medium">Moon DS</span> provides three
        packages ready for use in projects with Tailwind CSS:
      </p>
      <ul className="flex flex-col gap-1 list-disc list-inside text-moon-16">
        <li>
          <a href="#corePackage">Core Package</a>
        </li>
        <li>
          <a href="#themesPackage">Themes Package</a>
        </li>
        <li>
          <a href="#iconsPackage">Icons Package</a>
        </li>
      </ul>
    </PageSection>
    <PageSection title="Core Package" id="corePackage">
      <code className="bg-goku px-2 rounded-moon-s-xs self-start">
        @heathmont/moon-core-tw
      </code>
      <p className="text-moon-16">Run:</p>
      <CodeSnippet>{`pnpm i @heathmont/moon-core-tw`}</CodeSnippet>
      <p className="text-moon-16">
        This package contains the core components of{' '}
        <span className="font-medium">Moon DS</span> and a reusable preset with
        all configurations needed for using{' '}
        <span className="font-medium">Moon DS</span>.
      </p>
      <p className="text-moon-16">
        For the description of all ready-to-use components with examples, see
        the{' '}
        <Link href="/">
          <a className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit">
            {' '}
            Moon Design System
          </a>
        </Link>{' '}
        page, under Tailwind.
      </p>
      <p className="text-moon-16">
        This package is installed as part of Moon DS installation so you don't
        need to install it separately.
      </p>
    </PageSection>
    <PageSection title="Themes Package" id="themesPackage">
      <code className="bg-goku px-2 rounded-moon-s-xs self-start">
        @heathmont/moon-themes-tw
      </code>
      <p className="text-moon-16">Run:</p>
      <CodeSnippet>{`pnpm i @heathmont/moon-themes-tw`}</CodeSnippet>
      <p className="text-moon-16">
        This package contains all available themes as CSS files with configured
        tokens as CSS variables: main colors, support colors, border radius,
        border width, etc.
      </p>
      <p className="text-moon-16">
        For theming, we use CSS variables as tokens for styling various aspects
        of the website in a different way, while still maintaining the overall
        look and feel. You can import a CSS file with a particular theme from
        the package. The name of the CSS file corresponds to the name of the
        theme for a particular brand. Each file contains the Light and Dark
        modes.
      </p>
      <p className="text-moon-16">
        CSS variables are defined globally in the{' '}
        <code className="bg-goku px-2 rounded-moon-s-xs">:root</code> element
        and also within the relevant class selector. To switch between Light and
        Dark mode, you need to change classes.
      </p>
      <p className="text-moon-16">
        Below is an example of a CSS file configured for the Sportsbet.io page:
      </p>
      <CodeSnippet>{`:root,
:root.theme-sb-light,
.theme-sb-light {
  --piccolo: 12 207 97; /* #0ccf61 */
  --hit: 223 224 226; /* #dfe0e2 */
  --beerus: 230, 230, 230; /* #e6e6e6 */
  --goku: 255 255 255; /* #ffffff */
  --gohan: 247 247 247; /* #f7f7f7 */
  --bulma: 26 33 42; /* #1a212a */
  --trunks: 96 118 128; /* #607680 */
  --goten: 255 255 255; /* #ffffff */
  --popo: 0 0 0; /* #000000 */

  /* support-colors  */
  --krillin: 255 179 25; /* #ffb319 */
  --krillin-60: 255 198 82; /* #ffc652 */
  --krillin-10: 255 217 141; /* #ffd98d */

  --chichi: 255 78 100; /* #ff4e64 */
  --chichi-60: 255 118 135; /* #ff7687 */
  --chichi-10: 255 150 163; /* #ff96a3 */

  --roshi: 74 209 95; /* #4ad15f */
  --roshi-60: 100 220 119; /* #64dc77 */
  --roshi-10: 127 242 145; /* #7ff291 */

  --dodoria: 211 48 48; /* #d33030 */
  --dodoria-60: 219 78 78; /* #db4e4e */
  --dodoria-10: 240 103 103; /* #f06767 */

  --cell: 149 241 213; /* #95f1d5 */
  --cell-60: 162 250 223; /* #a2fadf */
  --cell-10: 191 255 236; /* #bfffec */

  --raditz: 179 128 74; /* #b3804a */
  --raditz-60: 193 145 93; /* #c1915d */
  --raditz-10: 214 169 121; /* #d6a979 */

  --whis: 52 72 240; /* #3448f0 */
  --whis-60: 103 119 248; /* #6777f8 */
  --whis-10: 132 144 249; /* #8490f9 */

  --frieza: 92 51 207; /* #5c33cf */
  --frieza-60: 115 77 222; /* #734dde */
  --frieza-10: 146 113 239; /* #9271ef */

  --nappa: 114 85 80; /* #725550 */
  --nappa-60: 133 106 102; /* #856a66 */
  --nappa-10: 161 134 129; /* #a18681 */

  /* border-radius */
  --radius-i-xs: 624.938rem; /* 9999px */
  --radius-i-sm: 624.938rem; /* 9999px */
  --radius-i-md: 624.938rem; /* 9999px */
  --radius-s-xs: 0.25rem; /* 4px */
  --radius-s-sm: 0.5rem; /* 8px */
  --radius-s-md: 0.75rem; /* 12px */
  --radius-s-lg: 1rem; /* 16px */

  /* border-width */
  --border-width: 0.0625rem; /* 1px */
  --border-i-width: 0.125rem; /* 2px */
}

:root.theme-sb-dark,
.theme-sb-dark {
  --piccolo: 12 207 97; /* #0ccf61 */
  --hit: 57 62 71; /* #393e47 */
  --beerus: 49 55 63; /* #31373f */
  --goku: 35 42 51; /* #232a33 */
  --gohan: 26 33 42; /* #1a212a */
  --bulma: 255 255 255; /* #ffffff */
  --trunks: 134 151 162; /* #8697a2 */
  --goten: 255 255 255; /* #ffffff */
  --popo: 0 0 0; /* #000000 */

  --radius-i-xs: 624.938rem; /* 9999px */
  --radius-i-sm: 624.938rem; /* 9999px */
  --radius-i-md: 624.938rem; /* 9999px */
}
`}</CodeSnippet>
      <p className="text-moon-16 font-medium">
        NB! Setting up themes is optional.
      </p>
      <p className="text-moon-16">
        It is up to you how to set up themes inside your project.
      </p>
      <p className="text-moon-16">For example, you can do the following:</p>
      <CodeSnippet>{`@import '@heathmont/moon-themes-tw/src/sportsbet.css';`}</CodeSnippet>
      <p className="text-moon-16">
        Alternatively, you can copy-paste the tokens from{' '}
        <a
          href="https://github.com/coingaming/moon-design/tree/master/workspaces/themes/src"
          className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
          target="_blank"
          rel="noreferrer"
        >
          moon-design
        </a>
        , and add them to your project.
      </p>
      <p className="text-moon-16 font-medium">
        Warning! Do not delete any tokens, please, as it can affect the work of
        Moon DS.
      </p>
    </PageSection>

    <PageSection title="Icons Package" id="iconsPackage">
      <code className="bg-goku px-2 rounded-moon-s-xs self-start">
        @heathmont/moon-icons-tw
      </code>
      <p className="text-moon-16">Run:</p>
      <CodeSnippet>{`pnpm i @heathmont/moon-icons-tw`}</CodeSnippet>
      <p className="text-moon-16">
        This package contains all SVG assets that you might need to build an
        application. They are ready to work with Tailwind CSS, so you can change
        the size and color of icons with the help of TW classes.
      </p>
      <p className="text-moon-16 font-medium">Example: </p>
      <CodeSnippet>{`import { FilesCopy } from '@heathmont/moon-icons-tw';

const Example = () => (
  <div className="flex justify-around gap-2 flex-wrap items-center w-full">
    <FilesCopy className="text-chiChi text-[1rem]" />
    <FilesCopy className="text-chiChi text-[2rem]" />
    <FilesCopy className="text-piccolo text-[3rem]" />
    <FilesCopy className="text-cell text-[3rem]" />
  </div>
);

export default Example;
`}</CodeSnippet>
      <p className="text-moon-16">
        For more information on <span className="font-medium">Moon DS</span>{' '}
        icons and icons preview, see:{' '}
        <Link href="/core/icons">
          <a className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit">
            Moon Design System
          </a>
        </Link>
      </p>
    </PageSection>
    <PageSection title="Useful Links">
      <ul className="flex flex-col gap-1 list-disc list-inside text-moon-16">
        <li>
          <a
            href="https://tailwindcss.com/docs/installation"
            className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
            target="_blank"
            rel="noreferrer"
          >
            Installation: Tailwind CLI - Tailwind CSS
          </a>
          .
        </li>
        <li>
          <a
            href="https://tailwindcss.com/docs/editor-setup"
            className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
            target="_blank"
            rel="noreferrer"
          >
            Editor Setup - Tailwind CSS
          </a>
          .
        </li>
        <li>
          <a
            href="https://www.npmjs.com/package/tailwindcss-rtl"
            className="text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit"
            target="_blank"
            rel="noreferrer"
          >
            npm: tailwindcss-rtl
          </a>
          .
        </li>
      </ul>
    </PageSection>
  </>
);

export default DevGettingStarted;
