import React, { useState } from "react";
import Header from "../views/global/Header";
import Footer from "../views/global/Footer";
import InputComponent from "../comps/Input";
import css from "../../styles/form";

const { FormContainer, Button } = css

const Main = () => {

    const [value, setValue] = useState()
    const [type, setType] = useState()
    const [comment, setComment] = useState()

    return (
        <React.Fragment>
            <Header />
            <FormContainer>
                <InputComponent action={setValue} placeholder={"Введите сумму транзакции"} />
                <InputComponent action={setType} placeholder={"Введите тип транзакции"} />
                <InputComponent action={setComment} placeholder={"Введите комментарий"} />
                <Button backgroundColor={"rgb(229, 229, 229)"}>Сохранить</Button>
            </FormContainer>
            <span>{value}</span><br />
            <span>{type}</span><br />
            <span>{comment}</span>
            <Footer />
        </React.Fragment>
    )
}

export default Main