
import reviewList from './mock';
import styles from './ReviewSection.module.scss';
import ReviewListItem from './ui/ReviewListItem';

const ReviewSection = () => {
  return <div className={styles.container}>{reviewList.map(el => <ReviewListItem key={el.id} {...el}/>)}</div>;
};

export default ReviewSection;