import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Button.module.scss";

const Button = ({ label, icon: Icon, disabled, type, block, handleClick }) => (
  <button
    className={classNames([styles["btn"]], {
      [styles[`btn-${type}`]]: type,
      [styles[`btn-block`]]: block,
    })}
    onClick={handleClick}
    disabled={disabled}
  >
    {Icon && <Icon className={styles["icon"]} />}
    <span className={styles["label"]}>{label}</span>
  </button>
);

Button.defaultProps = {
  type: "secondary",
  block: false,
};

Button.propTypes = {
  label: PropTypes.any.isRequired,
  type: PropTypes.string,
  icon: PropTypes.elementType,
  block: PropTypes.bool,
  disabled: PropTypes.any,
};

export default Button;
