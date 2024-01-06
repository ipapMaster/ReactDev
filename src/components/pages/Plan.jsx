import React, { useState } from "react";

const Plan = () => {

    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
    }

    return (
        <React.Fragment>
            <span style={{ display: 'block', marginTop: '100px', marginLeft: '100px' }}>{count}</span>
            <button onClick={increment}>Прибавить</button>
        </React.Fragment>
    )
}

export default Plan