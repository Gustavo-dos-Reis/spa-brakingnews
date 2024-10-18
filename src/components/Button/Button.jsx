import PropTypes from "prop-types";
import { ButtonSpace } from "./ButtonStyled";

export function Button({ type, text }) {
  return <ButtonSpace type={type}>{text}</ButtonSpace>;
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};