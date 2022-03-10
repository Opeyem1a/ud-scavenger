import React from 'react';

import styles from './HintCard.module.scss';

const HintCard = () => {
    return (
        <div className={`${styles.hintModal}`}>
            <div className={`${styles.hintModalTop}`}>
                <div className={`${styles.hintModalTitle}`}>Title</div>
                <div className={`${styles.hintModalTags}`}>
                    <span>i</span>
                    <span>i</span>
                    <span>i</span>
                </div>
            </div>
            <div className={`${styles.hintModalFooter}`}>
                <div>Left</div>
                <div>Right</div>
            </div>
        </div>
    );
};

export default HintCard;
