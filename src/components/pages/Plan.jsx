import React, { useState, useEffect } from "react";

const Plan = () => {

    const [time, setTime] = useState()

    useEffect(() => {

        setInterval(() => setTime(new Date().toLocaleTimeString()), 1000)

    }, [])

    return (
        <React.Fragment>
            <span style={{ display: 'block', marginTop: '100px', marginLeft: '130px' }}>страница планирования</span>
            <span style={{ display: 'block', marginTop: '10px', marginLeft: '130px' }}>время - {time}</span>
        </React.Fragment>
    )
}

export default Plan