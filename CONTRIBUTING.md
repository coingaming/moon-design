# Contributing

## Git Strategy

### Commits

Commits follow the [Angular Commit Message Format](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines). When committing changes, make use of the [Commitizen](https://github.com/commitizen/cz-cli) CLI to generate consistent commit messages:

```
yarn commit
```

## Code Standards

### Accessibility

All features should attempt to conform to as many items on The A11Y Project's [Web Accessibility Checklist](https://a11yproject.com/checklist) as possible. If a checkbox can't be completed, the justification should be documented for future reference.

As part of our TypeScript linting process, we make use of [`react-a11y` rules](https://github.com/reactjs/react-a11y) (surfaced via [`tslint-microsoft-contrib`](https://github.com/Microsoft/tslint-microsoft-contrib)) to catch any common issues.

## Code Style

Code formatting is handled **automatically** via [Prettier](https://prettier.io/) on pre-commit. However, you could install an [IDE extension](https://prettier.io/docs/en/editors.html) or run manually via `yarn format <prettier-args>`.

Linting will catch any further non-formatting issues:

- [TSLint](https://palantir.github.io/tslint/)
  - **Config**: [tslint.json](./tslint.json)
  - **Note**: As TSLint does not yet support TypeScript project `references` [(palantir/tslint#4137)](https://github.com/palantir/tslint/issues/4137), TSLint must be executed via `lerna run` to treat each package correctly.

### Component Structure

#### File Structure

Separate concerns on a component basis, rather than the more traditional "style vs. function".

With [Emotion](https://emotion.sh) we can take advantage of keeping style, markup and logic tightly bound together as a single `.tsx` file. A component file should be defined in the following order:

1. Imports
1. External (e.g. `node_modules`)
1. Internal (i.e. a different package from the design system)
1. Component partials
1. Styles
1. Settings (e.g. `const`)
1. Helper functions
1. Markup / logic
1. Exports

#### Directory Structure

For a basic component, the directory structure would look something like this:

```
+————————————+
│   Button   │
+————————————+


components
├── banner
├── button
│   └── index.js
└── …
```

For larger components, consider breaking down into smaller partials:

```
+—————Banner——————+
│                 │
│      Title      │
│                 │
+—————————————————+
│                 │
│     Caption     │
│                 │
+—————————————————+


components
├── banner
│   ├── caption.tsx
│   ├── index.ts
│   ├── settings.ts
│   ├── title.tsx
│   └── utils.ts
├── button
└── …
```

**`settings`**

Common constants/raw values that can be re-used across the different component partials.

**`utils`**

Styles that are unique to the `component` but need to be shared across the partials.

These styles should be **flat**/**stateless** and not bound by any form of functionality, making use of `css` in [Emotion](https://emotion.sh/docs/composition).

#### Naming

- **Components** should be defined in **PascalCase**.

  For example: `<Banner/>`

  - Component partials should be prefixed by the component name:

    For example: `<BannerTitle/>`

- **Flat re-usable styles** should be defined in **camelCase** to differentiate.

  - For example: `<div css={bannerSizing}/>`
