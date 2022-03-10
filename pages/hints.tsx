import React, {useEffect, useState} from 'react';
import {getHints} from "../data/hints";
import {Hint} from "../types/hint";
import HintCard from "../components/HintCard";

import generalStyles from '../styles/General.module.scss';

const Hints = () => {
    const [hints, setHints] = useState<Hint[]>([]);

    useEffect(() => {
        const dbHints = getHints();
        setHints([...dbHints])
    }, []);

    return (
        <div>
            <div className={`${generalStyles.flowGrid}`}>
                <HintCard/>
                <HintCard/>
                <HintCard/>
                <HintCard/>
                <HintCard/>
                <HintCard/>
                <HintCard/>
            </div>
            {hints && hints.map((hint, index) => <div key={`${index}`}>
                <p>{hint.title}</p>
            </div>)}
        </div>
    );
};

export default Hints;
