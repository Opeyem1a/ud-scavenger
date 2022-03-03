import React from 'react';
import styles from './Logo.module.scss';

const Logo = () => {
    return (
        <>
            <div className={styles.title}>Scavenger <span className={styles.tagline}>by UBCO Design</span></div>
        </>
    );
};

export default Logo;
