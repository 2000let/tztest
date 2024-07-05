import React from "react";
import { ReviewListItemI } from "../mock";
import styles from './ReviewListItem.module.scss'

interface Props extends ReviewListItemI {}

const ReviewListItem = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.informationBlock}>
        <div className={styles.imageBlock}>
          <img src={props.imgSrc} className={styles.img}/>
        </div>
        <div>
          <div className={styles.nickName}>{props.nickName}</div>
          <div className={styles.address}>{props.address}</div>
        </div>
      </div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
};

export default ReviewListItem;
