import React from "react";
import Header from "../views/global/Header";
import Footer from "../views/global/Footer";
import InputComponent from "../comps/Input";
import css from "../../styles/form";

const { FormContainer } = css

const Main = () => {
    return (
        <React.Fragment>
            <Header />
                <FormContainer>
                    <InputComponent />
                    <InputComponent />
                    <InputComponent />
                </FormContainer>
            <Footer />
        </React.Fragment>
    )
}

export default Main