import React from "react";
import classNames from "classnames";

import styles from "./styles.scss";

interface Props {
  className?: string;
  value: string;
  placeholder: string;
  onChange: (arg0: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = (props: Props) => (
  <input
    type="text"
    spellCheck="false"
    className={classNames(styles.field, props.className)}
    value={props.value}
    placeholder={props.placeholder}
    onChange={props.onChange}
  />
);

export default TextInput;
