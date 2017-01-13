# react-markdown
React component to parse and render Platzi Flavored Markdown content

This component made use of [@platzi/markdown](https://github.com/PlatziDev/markdown) to render a content using markdown in React.

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
You can send every native DOM attribute to the Markdown component and it's going to be received, the default `tagName` is a `div`. The value of `parser` is an empty object by default.

## Run test
You have 4 ways to run tests.

- `npm t`: run the test once
- `npm run test:fix`: run the test and fix the snapshots
- `npm run test:watch`: run the test and keep watching changes
- `npm run test:report`: run test and generate a coverage report
