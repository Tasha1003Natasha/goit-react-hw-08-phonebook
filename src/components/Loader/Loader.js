import React from 'react';
import { Grid } from 'react-loader-spinner';
import styles from './Loader.module.css';

export const Loader = () => (
  <div className={styles.loader}>
    <Grid
      color="#3f51b5"
      height={80}
      width={80}
      ariaLabel="three-dots-loading"
      wrapperStyle
      wrapperClass="Loader"
    />
  </div>
);
