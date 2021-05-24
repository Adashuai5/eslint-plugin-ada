# Jsx event attributes naming rules (jsx-events-naming)

For events with attributes starting with "on" in jsx, the name must be a hump starting with "handle"

## Rule Details

Examples of **incorrect** code for this rule:

```jsx
<button onClick={onXxxx} />
```

Examples of **correct** code for this rule:

```jsx
<button onClick={handleXxxx} />
```
