import hints from './hints.json';
import {Hint} from "../types/hint";

const getHints = () => {
    return hints.map(hint => hint as Hint);
};


export {getHints};
