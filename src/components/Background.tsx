import React from 'react'
import styles from './Background.module.scss';

import btcIcon from '../assets/crypto/Bitcoin.svg';
import ltcIcon from '../assets/crypto/Litecoin.svg';
import ethIcon from '../assets/crypto/Ethereum.svg';

const Background = () => {
  return (
    <div className={styles.container}>
      <img src={btcIcon} />
      <img src={ltcIcon} />
      <img src={ethIcon} />
    </div>
  );
}

export default Background