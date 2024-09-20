import PropTypes from 'prop-types';

export function TextLimit({ text = '', limit = 100 }) {
  const textLimited =
    text?.length > limit ? `${text.substring(0, limit)}...` : text;

  return <p>{textLimited}</p>;
}

// Validação de PropTypes
TextLimit.propTypes = {
  text: PropTypes.string,
  limit: PropTypes.number,
};
