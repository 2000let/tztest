import LinkItem from "./ui/LinkItem";

import AppleIcon from "../../../../assets/AppleIcon.svg";
import PlayMarketIcon from "../../../../assets/PlayMarketIcon.svg";

import styles from "./LinksSection.module.scss";

const LinksSection = () => {
  const onPlayMarketClick = () => {
    window.open("", "_blank")
  };
  const onAppleClick = () => {
    window.open("", "_blank");
  };

  return (
    <div className={styles.container}>
      <LinkItem text="Get it on" name="Google play" onClick={onPlayMarketClick}>
        <img src={PlayMarketIcon} />
      </LinkItem>
      <LinkItem text="Available on the" name="App Store" onClick={onAppleClick}>
        <img src={AppleIcon} />
      </LinkItem>
    </div>
  );
};

export default LinksSection;
