⚠️ **Framework-only, do not use outside of project.**

---

# Private

A collection of helper components/settings for private reuse across components.

## Input

**Base** input styles for re-use across different form input components/elements.

Inputs support additional icon spacing via the `withIcon` prop, allowing you to
add a `backgroundImage` icon style that automatically fits. e.g. [Select](../select/README.mdx).

Error states can be manually triggered via the `error` prop.

### Extending

As `Input` is a styled Emotion component, we can change the rendered tag and
build upon any styles as normal via [`withComponent`](https://emotion.sh/docs/styled#change-the-rendered-tag-using-withcomponent).

```jsx
const Select = Input.withComponent('select');
```
