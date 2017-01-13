const React = require('react');
const renderer = require('react-test-renderer');
const Markdown = require('./index.js');

const content = `![Platzi Logo](https://static.platzi.com/static/images/logos/platzi@2x.png)
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
# Heading 1
Lorem **ipsum** dolor _sit_ ++amet++ :D.
The HTML ==specification== is maintained by the W3C.
- \`item 1\`
- item 2
- item 3
Term 1
  ~ Definition 1
Term 2
  ~ Definition 2a
  ~ Definition 2b
\`\`\`js
function greeting() {
	return 'hello world!';
}
\`\`\`
@[youtube](ajLJOhf-WdA)`;


test('Markdown component', () => {
  expect(
    renderer.create(
      React.createElement(Markdown, { content })
    ).toJSON()
  ).toMatchSnapshot();
});
