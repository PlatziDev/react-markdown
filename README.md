# react-markdown
React component to parse and render Platzi Flavored Markdown content

This component made use of [@platzi/markdown](https://github.com/PlatziDev/markdown) to render a content using markdown in a React application.

## Usage
Install it with:

```bash
npm i -S react @platzi/react-markdown
```

Import it with:

```js
import React from 'react';
import Markdown from '@platzi/react-markdown';

function App() {
  return (
    <Markdown
      tagName="div"
      content="**Hello Platzi!**"
      parser={{
        // @platzi/markdown options
      }}
    />
  );
}
```

- You cand send any native DOM attribute to the Markdown component.
- The default `tagName` is a `div`.
- The value of `parser` is an empty object by default.
- The `content` is required.

## Run test
You have 4 ways to run tests.

- `npm t`: run the test once
- `npm run test:fix`: run the test and fix the snapshots
- `npm run test:watch`: run the test and keep watching changes
- `npm run test:report`: run test and generate a coverage report
