import React from "react";
import styles from "./Button.module.scss";

type Props = {
  onClick: () => void;
  children: string;
};

const Button: React.FC<Props> = (props) => {
  return <button className={styles.btn} onClick={props.onClick}>{props.children}</button>;
};

export default Button;
