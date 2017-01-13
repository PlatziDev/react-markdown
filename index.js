const React = require('react');
const createParser = require('@platzi/markdown');


function Markdown(props) {
  const tagProps = Object
    .keys(props)
    .filter(key => (
      key !== 'tagName' && key !== 'content' && key !== 'parser'
    ))
    .reduce((map, key) => (
      Object.assign({}, map, { [key]: props[key] })
    ), {});

  const parser = createParser(props.parser);

  return React.createElement(props.tagName, Object.assign(tagProps, {
    dangerouslySetInnerHTML: {
      __html: parser(props.content),
    }
  }));
}

Markdown.propTypes = {
  tagName: React.PropTypes.string,
  content: React.PropTypes.string,
};
Markdown.defaultProps = {
  tagName: 'div',
  content: '',
  parser: {},
};


module.exports = Markdown;
