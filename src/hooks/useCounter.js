import {useState} from "react";

const useCounter = (initialValue = 0, incrementalValue = 1) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = () => {
        setCounter(counter + incrementalValue);
    }

    const decrement = () => {
        setCounter(counter - incrementalValue);
    }

    const reset = () => {
        setCounter(initialValue)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}

export default useCounter;