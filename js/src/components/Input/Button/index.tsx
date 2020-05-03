import React from "react";
import classNames from "classnames";

import styles from "./styles.scss";

interface Props {
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (arg0: React.MouseEvent) => void;
  children?: React.ReactNode;
}

const Button = ({ type = "button", ...props }: Props) => (
  <button
    type={type}
    className={classNames(styles.button, props.className)}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default Button;
