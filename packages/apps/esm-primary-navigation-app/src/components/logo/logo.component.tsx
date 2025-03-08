import React from 'react';
import { interpolateUrl, useConfig } from '@openmrs/esm-framework';
import styles from './logo.scss';

const Logo: React.FC = () => {
  const { logo } = useConfig();
  return (
    <>
      {logo?.src ? (
        <img
          className={styles.logo}
          src={interpolateUrl(logo.src)}
          alt={logo.alt}
        />
      ) : logo?.name ? (
        logo.name
      ) : (
        <svg role="img" width={110} height={40}>
          <use xlinkHref="#omrs-logo-white"></use>
        </svg>
      )}
    </>
  );
};

export default Logo;
