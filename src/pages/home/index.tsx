import styles from "./Home.module.scss";
import BenefitsSection from "./ui/BenefitsSection";
import HomeDescription from "./ui/HomeDescription";
import HomeTitle from "./ui/HomeTitle";
import JoinButton from "./ui/JoinButton";
import LinksSection from "./ui/LinksSection";
import ReviewSection from "./ui/ReviewSection";

const HomePage = () => {
  const onJoinClick = () => {
    window.open("", "_blank");
  };

  return (
    <div className={styles.container}>
      <div>
        <HomeTitle />
        <HomeDescription />
        <BenefitsSection />
        <JoinButton onClick={onJoinClick} />
        <LinksSection />
      </div>
      <div>
        <ReviewSection />
      </div>
    </div>
  );
};

export default HomePage;
