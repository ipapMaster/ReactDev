import React, { useState } from "react";

const Plan = () => {

    const [data, setData] = useState({name: 'John', age: 25})
    
    const change = () => {
        setData({...data, age: 30})
    }

    return (
        <React.Fragment>
            <span style={{ display: 'block', marginTop: '100px', marginLeft: '100px' }}>{data.name}</span>
            <span style={{ display: 'block', marginTop: '20px', marginLeft: '100px' }}>{data.age}</span>
            <button onClick={change}>Изменить</button>
        </React.Fragment>
    )
}

export default Plan