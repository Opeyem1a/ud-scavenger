import React from 'react';
import styles from './Header.module.scss';
import Logo from "../Logo";

const NavBar = () => {
    return (
        <nav className={styles.header}>
            <ul className={styles.left}>
                <li><Logo/></li>
            </ul>
            <ul className={styles.navBar}>
                <li>
                    <div className={styles.navPill}>Hint</div>
                </li>
                <li>
                    <div className={styles.navPill}>Prizes</div>
                </li>
                <li>
                    <div className={styles.navPill}>About</div>
                </li>
            </ul>
            <ul className={styles.right}>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default NavBar;
