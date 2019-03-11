/**
 * Ideally, we would target the form elements directly, e.g. ComponentName, but
 * Emotion won't let us do that without the babel-plugin:
 * https://emotion.sh/docs/styled#targeting-another-emotion-component
 * For now let's just list the selectors manually.
 */

export const inputSelectors = 'select, input';
