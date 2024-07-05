import Button from '../../../../shared/Button'
import styles from './JoinButton.module.scss'

type Props = {
    onClick: () => void;
}

const JoinButton = (props: Props) => {
  return (
    <div className={styles.btn_join}>
      <Button onClick={props.onClick}>Join Whatsapp</Button>
    </div>
  );
};

export default JoinButton;