import React from "react";
import Header from "../views/global/Header";
import Footer from "../views/global/Footer";
import InputComponent from "../comps/Input";
import css from "../../styles/form";

const { FormContainer, Button } = css

const Main = () => {
    return (
        <React.Fragment>
            <Header />
            <FormContainer>
                <InputComponent placeholder={"Введите сумму транзакции"} />
                <InputComponent placeholder={"Bведите тип транзакции"} />
                <InputComponent placeholder={"Введите комментарий"} />
                <Button backgroundColor={"rgb(229, 229, 229)"}>Сохранить</Button>
            </FormContainer>
            <Footer />
        </React.Fragment>
    )
}

export default Main