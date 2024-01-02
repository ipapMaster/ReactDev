import React, { useState } from "react";
import Header from "../views/global/Header";
import Footer from "../views/global/Footer";
import InputComponent from "../comps/Input";
import css from "../../styles/form";

const { FormContainer, Button } = css

const Main = () => {

    const [value, setValue] = useState('')
    const [type, setType] = useState('')
    const [comment, setComment] = useState('')

    const validation = () => {
        if (value.length > 2 && type) {
            console.log('Валидация успешна');
            setValue('')
            setType('')
            setComment('')
        } else {
            console.log('Ошибка валидации');
        }
    }

    return (
        <React.Fragment>
            <Header />
            <FormContainer>
                <InputComponent inputValue={value} action={setValue} placeholder={"Введите сумму транзакции"} />
                <InputComponent inputValue={type} action={setType} placeholder={"Введите тип транзакции"} />
                <InputComponent inputValue={comment} action={setComment} placeholder={"Введите комментарий"} />
                <Button
                    backgroundColor={
                        value.length < 3 ?
                            "rgb(229, 229, 229)" :
                            type.length < 3 ?
                                "rgb(229, 229, 229)" :
                                "rgb(176, 243, 71)"
                    }
                    onClick={validation}
                >Сохранить</Button>
            </FormContainer>

            <Footer />
        </React.Fragment>
    )
}

export default Main