import PropTypes from "prop-types";
import { useState } from "react";
import { InputSpace, TextareaSpace } from "./InputStyled";

export function Input({
  type,
  placeholder,
  name,
  register,
  isInput = true,
  value: initialValue = "",
  disabled,
}) {
  const [value, setValue] = useState(initialValue || "");
  let inputProps = {
    type,
    placeholder,
    ...register(name),
    onChange: (e) => setValue(e.target.value),
    disabled,
  };
  inputProps.value = value;

  return (
    <>
      {isInput ? (
        <InputSpace {...inputProps} />
      ) : (
        <TextareaSpace {...inputProps} />
      )}
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.func,  
  isInput: PropTypes.bool,  
  value: PropTypes.string,  
  disabled: PropTypes.bool, 
};


Input.defaultProps = {
  placeholder: "",
  isInput: true,
  value: "",
  disabled: false,
};