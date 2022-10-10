import React from "react";

function Button({ type, children, ...rest }) {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      {...rest}
    >
      {children}
    </button>
  );
}

function SelectButton({ children, id, ...rest }) {
  return (
    <select
      id={id}
      {...rest}
    >
      {children}
    </select>
  );
}

export { SelectButton };

export default Button;
