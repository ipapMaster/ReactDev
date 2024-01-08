import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Plan = () => {

    const { demoParam } = useParams()
    const [params, setParams] = useSearchParams() // начального значения нет, оно читается из URL-запроса

    useEffect(() => {
        console.log(demoParam)
        setParams({ userName: 'Nick', userAge: '30' }) // если не задано в URL
    }, [demoParam])

    return (
        <React.Fragment>
            <span style={{ display: 'block', marginTop: '100px', marginLeft: '130px' }}>имя пользователя - {params.get('userName')}</span>
            <span style={{ display: 'block', marginTop: '10px', marginLeft: '130px', marginBottom: '10px' }}>возраст пользователя - {params.get('userAge')}</span>
        </React.Fragment>
    )
}

export default Plan