import PropTypes from "prop-types";

export function Button({ text, name }) {
  return <button onClick={function(){
    console.log('Hiciste Click');
  }}>
    {text} - {name}
  </button>
}

Button.propTypes = { text: PropTypes.string.isRequired };

Button.defaultProps = { text: 'Click', name: 'Click' };
