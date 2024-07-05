import styles from "./BenefitsSection.module.scss";
import Block from "./ui/Block";

const BenefitsSection = () => {
  return (
    <div className={styles.container}>
      <Block text="20K+" description="subscribers" />
      <Block text="19,5K+" description="successful cases" />
      <Block text="4.8/5" description="rating" />
    </div>
  );
};

export default BenefitsSection;
