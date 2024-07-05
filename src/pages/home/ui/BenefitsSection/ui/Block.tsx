import styles from "./Block.module.scss";

type Props = {
  text: string;
  description: string;
};

const Block = (props: Props) => {
  return (
    <div>
      <div className={styles.text}>{props.text}</div>
      <div className={styles.description}>{props.description}</div>
    </div>
  );
};

export default Block;
