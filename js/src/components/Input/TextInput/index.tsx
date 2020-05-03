import React from "react";
import classNames from "classnames";

import styles from "./styles.scss";

interface Props {
  className?: string;
  value: string;
  onChange: (arg0: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = (props: Props) => (
  <input
    type="text"
    spellCheck="false"
    className={classNames(styles.field, props.className)}
    onChange={props.onChange}
    value={props.value}
  />
);

export default TextInput;
