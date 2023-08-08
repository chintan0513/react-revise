import { useState } from "react";
import useConsoleLog from "./CustomHook";

const CustomFunction = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }
    useConsoleLog(count)


    return (

        <div>
            <h1>Count: {count}</h1>
            <button onClick={increase}>Click Me</button>
        </div>
    );
}

export default CustomFunction;