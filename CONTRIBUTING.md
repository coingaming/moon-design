# Contributing

## Contents

1. [When does a component go in the design system?](#when-does-a-component-go-in-the-design-system)
1. [Maintaining Assets](#maintaining-assets)
1. [Git Strategy](#git-strategy)
1. [Code Standards](#code-standards)
1. [Code Style](#code-style)
1. [Release Process](#release-process)

---

## When does a component go in the design system?

[Does It Belong in the System?](https://medium.com/eightshapes-llc/i-made-this-does-it-go-in-the-system-3b67b9894531)

## Maintaining Assets

### Icons

#### Designing

Icons are designed in the [`.sketch` file](design/assets/src/icons/icons.sketch), with the exported 'original' Sketch-generated SVGs stored in the adjacent [`svg`](design/assets/src/icons/svg) directory.

Each icon **must**:

- have it's own `20×20` artboard.
  - in other words, a `viewBox` that is **at least `20`** on one axis:
    - good: `viewBox="0 0 20 18"`, `viewBox="0 0 20 20"`.
    - bad: `viewbox="0 0 20 34"`.
- contain only one exportable layer, which has:
  1. a single path or group.
  1. a kebab-case layer name prefixed with `icon-`
     - this is essential for the [build step](#building).
  1. the export format defined as "SVG".
- have its color fill set to `#DE1E7E` (remember "DELETE") if you want the color to be modified.

Any changes to this Sketch file should be committed **as well as** the Sketch-generated SVGs. To export all SVGs in Sketch, select `File > Export` and in the next step choose the [`svg`](design/assets/src/icons/svg) directory as the output location.

#### Building

For performance benefits (such as code-splitting) we opted for creating individual React components for **each** icon, rather than one single component.

We make use of [SVGR](https://www.smooth-code.com/open-source/svgr/), to transform the above SVG icons in [`assets`](design/assets/src/icons/svg) to React components in [`sportsbet-icons`](design/icons/README.mdx).

To update/add icons run: `yarn icons build`

- Runs SVGR based on the [config options](design/icons/src/config/svgr.js).
- Builds React `.tsx` files for each component with the [template](design/icons/src/config/template.js).

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

#### Rebasing pull requests example

1. Pick your base commit, where you want add all other commits on top of.

   > `git log`
   >
   > or the more visually friendly
   >
   > `git log --oneline --graph --all --decorate -n 30`

1. `git rebase -i hash` - launches interactive shell where you choose your commits to squash
1. `git push -f` - force push your git changes

#### Merge or Rebase

**Use merge - not rebase** whenever you've already pushed.

Never use `git rebase` on public branches.
Consider using `git rebase` only if you want to [avoid spaghetti-history](https://stackoverflow.com/a/21539012/3748398) in your local branch.

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

#### Documentation

Each component/consumable feature **must** have a README that follows the appropriate package's pre-defined `.templates/`:

- [`design/components`](design/components/.templates/README.mdx)

This should be written in [`.mdx`](https://mdxjs.com/) syntax, which will be included automatically in the [Style Guide](./README.md#style-guide).

#### Directory Structure

For a basic component, the directory structure would look something like this:

```
+————————————+
│   Button   │
+————————————+


components
├── banner
├── button
│   ├── README.mdx
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
│   ├── README.mdx
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

## Release Process

Thanks to [Lerna and Commitizen](https://github.com/lerna/lerna/tree/master/commands/version#--conventional-commits), we can generate version bumps and CHANGELOGs for each package and release automatically.

1. Assuming that all changes to be released have followed the [Git Workflow outlined above](#workflow), raise a pull request from [`develop` into `master`](https://github.com/coingaming/sportsbet-design/compare/master...develop).
2. Ensure the pull request is up to date with `master`.
3. Obtain at least 1 approval.
4. Click the "Merge Pull Request" button to trigger an automatic release, monitoring progress in [CircleCI](https://circleci.com/gh/coingaming/sportsbet-design).

   - If successful, a new [tag](https://github.com/coingaming/sportsbet-design/releases) will be visible, along with new package versions on NPM.

5. Communicate the release to the team!
