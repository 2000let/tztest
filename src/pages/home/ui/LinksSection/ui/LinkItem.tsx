import React from "react";

import styles from "./LinkItem.module.scss";

type Props = {
  text: string;
  name: string;
  children: React.ReactElement;
  onClick: () => void;
};

const LinkItem = (props: Props) => {
  return (
    <a className={styles.container} onClick={props.onClick}>
      <div>
        <div className={styles.img}>{props.children}</div>
      </div>
      <div>
        <div className={styles.text}>{props.text}</div>
        <div className={styles.name}>{props.name}</div>
      </div>
    </a>
  );
};

export default LinkItem;
