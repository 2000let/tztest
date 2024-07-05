import React from "react";
import styles from "./GradientText.module.scss";

interface Props {
  children: string;
}

const GradientText: React.FC<Props> = (props) => {
  return <span className={styles.text}>{props.children}</span>;
};

export default GradientText;
