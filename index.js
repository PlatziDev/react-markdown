const React = require('react');
const PropTypes = require('prop-types');
const createParser = require('@platzi/markdown');


/**
 * Filter custom props
 * @param  {string}  key The props name
 * @return {boolean}     If it's a custom prop or not
 */
function filter(key) {
  return key !== 'tagName' && key !== 'content' && key !== 'parser';
}

/**
 * Merge props into a new map
 * @param  {Object} props The original prop map
 * @param  {Object} map   The new prop map to fill
 * @param  {string} key   Each key name that have passed the filter
 * @return {Object}       The new prop map with the setted prop
 */
function reducer(props, map, key) {
  return Object.assign({}, map, {
    [key]: props[key]
  });
}


/**
 * Render Platzi Flavored Markdown inside a React application.
 * @param {string} [props.tagName='div'] The HTML tag used as wrapper
 * @param {string} props.content         The Markdown content to parse and render
 * @param {Object} [props.parser={}]     The parser options
 */
function Markdown(props) {
  const tagProps = Object
    .keys(props)
    .filter(filter)
    .reduce(reducer.bind(null, props), {});

  const parser = createParser(props.parser);

  return React.createElement(props.tagName, Object.assign(tagProps, {
    dangerouslySetInnerHTML: {
      __html: parser(props.content),
    }
  }));
}


Markdown.propTypes = {
  tagName: PropTypes.string,
  content: PropTypes.string.isRequired,
  parser: PropTypes.object,
};

Markdown.defaultProps = {
  tagName: 'div',
  parser: {},
};


module.exports = Markdown;
