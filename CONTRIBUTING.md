# Contributing

## Contents

1. [When does a component go in the design system?](#when-does-a-component-go-in-the-design-system)
1. [Maintaining Assets](#maintaining-assets)
1. [Git Strategy](#git-strategy)
1. [Code Standards](#code-standards)
1. [Code Style](#code-style)
1. [Release Process](#release-process)
1. [Rules](#rules)
1. [Build process](#build-process)
1. [ES Modules](#es-modules)

---

## When does a component go in the design system?

[Does It Belong in the System?](https://medium.com/eightshapes-llc/i-made-this-does-it-go-in-the-system-3b67b9894531)

## Icons

### Designing

Icons are exported from Figma and stored in the adjacent [`svg`](packages/assets/raw/svg) directory.

Each icon **must**:

- have it's own `32×32` artboard.
  - in other words, a `viewBox` that is **at least `32`** on one axis:
    - good: `viewBox="0 0 32 18"`, `viewBox="0 0 32 32"`.
    - bad: `viewbox="0 0 20 34"`.
- contain only one exportable layer, which has:
  1. a single path or group.
  1. a kebab-case layer name prefixed with `icon-`
     - this is essential for the [build step](#building).
  1. the export format defined as "SVG".
- have its color fill set to `#DE1E7E` (remember "DELETE") if you want the color to be modified.

Any changes to this Sketch file should be committed **as well as** the Sketch-generated SVGs. To export all SVGs in Sketch, select `File > Export` and in the next step choose the [`svg`](packages/assets/raw/svg) directory as the output location.

### Building

For performance benefits (such as code-splitting) we opted for creating individual React components for **each** icon, rather than one single component.

We make use of [SVGR](https://www.smooth-code.com/open-source/svgr/), to transform the above SVG icons in [`assets`](packages/assets/raw/svg) to React components in [`moon-icons`](packages/icons/README.mdx).

To update/add icons run: `yarn assets build`

- Runs SVGR based on the [config options](packages/icons/src/config/svgr.js).
- Builds React `.tsx` files for each component with the [template](packages/icons/src/config/template.js).

## Git Strategy

### Commits

Commits follow the [Angular Commit Message Format](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines). When committing changes, make use of the [Commitizen](https://github.com/commitizen/cz-cli) CLI to generate consistent commit messages:

```
yarn commit
```

### Branches

#### Base Branch

As a developer, you will you be branching and merging from `develop`, our base branch.

Consider `origin/master` to always represent the latest code deployed to production.

#### Supporting Branches

Use supporting branches for all new **features** and **bug fixes**. Unlike the base branch, these branches have a limited life-time and should be removed after merging.

The different types of branches should be named as follows:

- **Feature**: `feature/feature-name`
- **Bug fix**: `fix/fix-name`

#### Workflow

1. Create the branch locally and then push to GitHub if it does not exist yet.

   A branch should always be 'publicly' available, and should never exist in just one developer's local repo.

1. Make a pull request.
1. Add the `in progress` tag until ready for review.
1. Periodically, keep changes up to date with develop via `git rebase develop`.
1. Grab a review and remove the `in progress` tag.
1. One approved, it's down to you to merge the branch into `develop`. Code can **only** be contributed to `develop` via using pull requests.
1. Delete your branch.

#### Rebasing develop branch to your branch example

1. `git checkout develop`
1. `git pull`
1. `git checkout your-branch`
1. `git rebase develop`

#### Feature Flags

Long-lived feature branches present problems when you need to build code on top of unfinished work. Merge unfinished features into the `develop` branch (following the steps [outline above](#workflow)) so others can build off their work, but keep them hidden from your users and testers behind feature flags. Enable the flag in development to use the feature without the changes affecting anyone else. Once the feature is finished, you can remove the flags or use them to roll out to selected users and testers.

## Code Standards

### Accessibility

All features should attempt to conform to as many items on The A11Y Project's [Web Accessibility Checklist](https://a11yproject.com/checklist) as possible. If a checkbox can't be completed, the justification should be documented for future reference.

As part of our TypeScript linting process, we make use of [`react-a11y` rules](https://github.com/reactjs/react-a11y) (surfaced via [`tslint-microsoft-contrib`](https://github.com/Microsoft/tslint-microsoft-contrib)) to catch any common issues. `react-a11y-role-has-required-aria-props` is currently disabled for [incorrect results](https://github.com/Microsoft/tslint-microsoft-contrib/issues/409).

### Mobile First

Mobile devices are the most commonly used methods of browsing the web.
When it comes to designing and developing your component, always build with mobile in mind first.

Need to modify the style at specific breakpoints? Scale your changes **upwards**; build for mobile by default and _then_ add media queries for changes on larger sizes.

Want to use CSS Grid? Set your component to `display: block;` by default to stack items on mobile and other unsupported devices, then implement your grid at larger breakpoints.

## Code Style

Code formatting is handled **automatically** via [Prettier](https://prettier.io/) on pre-commit. However, you could install an [IDE extension](https://prettier.io/docs/en/editors.html) or run manually via `yarn format <prettier-args>`.

Linting will catch any further non-formatting issues:

- [TSLint](https://palantir.github.io/tslint/)
  - **Config**: [tslint.json](.config/tslint/tslint.json)
  - **Note**: As TSLint does not yet support TypeScript project `references` [(palantir/tslint#4137)](https://github.com/palantir/tslint/issues/4137), TSLint must be executed via `lerna run` to treat each package correctly.

### Component Structure

#### File Structure

Separate concerns on a component basis, rather than the more traditional "style vs. function".

With [Styled Components](https://www.styled-components.com/) we can take advantage of keeping style, markup and logic tightly bound together as a single `.tsx` file. A component file should be defined in the following order:

1. Imports
1. External (e.g. `node_modules`)
1. Internal (i.e. a different package from the design system)
1. Component partials
1. Styles
1. Settings (e.g. `const`)
1. Helper functions
1. Markup / logic
1. Exports

#### Documentation

Each component/consumable feature **must** have a README that follows the appropriate package's pre-defined `.templates/`:

- [`packages/components`](packages/components/.templates/README.mdx)

This should be written in [`.mdx`](https://mdxjs.com/) syntax, which will be included automatically in the [Style Guide](./README.md#style-guide).

#### Directory Structure

For a basic component, the directory structure would look something like this:

```
+————————————+
│   Button   │
+————————————+


components
├── button
│   ├── README.mdx
│   └── index.js
└── …
```

For larger components, consider breaking down into smaller partials:

```
+——ComponentName——+
│                 │
│      Title      │
│                 │
+—————————————————+
│                 │
│     Caption     │
│                 │
+—————————————————+


components
├── button
├── component-name
│   ├── caption.tsx
│   ├── index.ts
│   ├── README.mdx
│   ├── settings.ts
│   ├── title.tsx
│   └── utils.ts
└── …
```

**`settings`**

Common constants/raw values that can be re-used across the different component partials.

**`utils`**

Styles that are unique to the `component` but need to be shared across the partials.

These styles should be **flat**/**stateless** and not bound by any form of functionality, making use of the `CSSObject` type from [Styled Components](https://www.styled-components.com/) for compatibility.

#### Naming

- **Components** should be defined in **PascalCase**.

  For example: `<ComponentName/>`

  - Component partials should be prefixed by the component name:

    For example: `<ComponentNameTitle/>`

- **Flat re-usable styles** should be defined in **camelCase** to differentiate.

  - For example: `<div css={componentNameSizing}/>`

## Release Process

Thanks to [Lerna and Commitizen](https://github.com/lerna/lerna/tree/master/commands/version#--conventional-commits), we can generate version bumps and CHANGELOGs for each package and release automatically.

1. Assuming that all changes to be released have followed the [Git Workflow outlined above](#workflow), raise a pull request from [`develop` into `master`](https://github.com/coingaming/moon-design/compare/master...develop).
2. Ensure the pull request is up to date with `master`.
3. Obtain at least 1 approval.
4. Click the "Merge Pull Request" button to trigger an automatic release, monitoring progress in [CircleCI](https://circleci.com/gh/coingaming/moon-design).

   - If successful, a new [tag](https://github.com/coingaming/moon-design/releases) will be visible, along with new package versions on NPM.

5. Communicate the release to the team!

## ES Modules

---

### Rules

1. All your files should be named after the actual component. So the component `GroupIconCurrency` is inside the file `GroupIconCurrency.tsx`.
1. All your components should export a single default React component. This is only so we can enable tree shaking.
1. All first level subfolders inside `/src/` are considered public. People will use `import { } from @heathmont/moon-package-name/folder` to import files from those folders directly.
1. You are required to auto-generate an index file to for each subfolder which uses named exports to re-export all exports inside the folder + sub folders. This is required for tree shaking.
1. You are required to auto-generate an index file to for your package which uses named exports to re-export all exports. This is required to allow lerna to import the project proeprly.

### Build process

All packages are built in 2 separate formats, `commonjs` and `es`.

All code belongs in `/src` folder. When running yarn build, it will automatically generat a `lib` folder based on the code
inside `src`.

First we transpile `commonjs` format modules into the `lib` folder directly.
Second we transpile `es` format modules into the `lib/es` folder.
Third we generated typescript definitions into the `lib` folder directly.

### Release process

**Before** we release, we will:

1. Copy all files from `lib` folder into the root folder.
1. Update the `files`, `main`, `module` and `typings` fields in package.json

**After** we release, we will:

1. Remove all the files we copied over from `lib`.
1. Undo the changes to `files`, `main`, `module` and `typings` fields in package.json
