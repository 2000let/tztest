import HomePage from "../pages/home";
import styles from './AppComponent.module.scss';

const AppComponent = () => {
  return (
    <div className={styles.container}>
      <HomePage />
    </div>
  );
}

export default AppComponent;