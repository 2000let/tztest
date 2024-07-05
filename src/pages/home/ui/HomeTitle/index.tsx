import GradientText from '../../../../shared/GradientText';
import styles from './Title.module.scss';

const HomeTitle = () => {
  return (
    <h1 className={styles.title}>
      Do you want to Learn more About cryptocurrencies{" "}
      <GradientText>quickly and easily ?</GradientText>
    </h1>
  );
}

export default HomeTitle;