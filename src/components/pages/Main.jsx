import React from "react";
import Header from "../views/global/Header";
import Footer from "../views/global/Footer";
import InputComponent from "../comps/Input";
import css from "../../styles/form";

const { FormContainer, Button } = css

const params = [
    {
        maxLength: 100,
        placeholder: "Введите сумму транзакции"
    },
    {
        maxLength: 100,
        placeholder: "Bведите тип транзакции"
    },
    {
        maxLength: 100,
        placeholder: "Введите комментарий"
    }
]

const Fields = () => {
    let fields = [];

    params.forEach((item, index) => {
        fields.push(<InputComponent key={index} maxLength={item.maxLength} placeholder={item.placeholder} />)
    });

    return fields;
}

const Main = () => {
    return (
        <React.Fragment>
            <Header />
            <FormContainer>
                <Fields />
                <Button backgroundColor={"rgb(229, 229, 229)"}>Сохранить</Button>
            </FormContainer>
            <Footer />
        </React.Fragment>
    )
}

export default Main