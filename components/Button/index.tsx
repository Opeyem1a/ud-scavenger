import React from 'react';
import {Button, ButtonStyle} from "../../types/button";

import styles from './Button.module.scss';

const getButtonClass = (style: ButtonStyle) => {
    if(style === 'primary') return `${styles.button}`;
    if(style === 'flat') return `${styles.button}`;
}

const Button = ({content, style}: Button) => {
    return (
        <button className={`${getButtonClass(style)}`} type={'button'}>
            {content}
        </button>
    );
};

export default Button;
