import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Plan = () => {

    const { demoParam } = useParams()

    useEffect(() => {
        console.log(demoParam)
    }, [demoParam])

    return (
        <React.Fragment>
            <span style={{ display: 'block', marginTop: '100px', marginLeft: '130px' }}>страница планирования</span>
        </React.Fragment>
    )
}

export default Plan