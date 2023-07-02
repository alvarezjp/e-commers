import { saveCounter } from "./saveCounter.js";
import { addCounter } from "./addCounter.js";

export const incrementCounter = () => {
    saveCounter(addCounter());
    return addCounter();
}

