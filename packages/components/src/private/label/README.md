# Label

Captions to offer contextual information for form inputs.

By default, a label will sit above the input:

```jsx
<Label text="First name">
  <input type="text" placeholder="e.g. Fred Bloggs" />
</Label>
```

Adding the `inline` prop will render any labels directly next to the input.

## Flex

On larger screens, Labels and inputs can be displayed alongside eachother via the `flex` prop, filling available space **evenly**.

The input's [`flex-grow`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow) value can be modified via `inputGrow`.

```jsx react-live
<Form legend="Flex Demo Form" maxWidth="40rem">
  <FormItem>
    <Label text="First name" flex>
      <input type="text" placeholder="e.g. Fred Bloggs" />
    </Label>
  </FormItem>
  <FormItem>
    <Label text="First name" flex inputGrow="2">
      <input type="text" placeholder="e.g. Fred Bloggs" />
    </Label>
  </FormItem>
  <FormItem>
    <Label text="First name" flex inputGrow="3">
      <input type="text" placeholder="e.g. Fred Bloggs" />
    </Label>
  </FormItem>
</Form>
```
