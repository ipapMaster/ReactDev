import React from "react";
import css from "../../styles/form";

const { Input } = css

const InputComponent = (props) => {

    const { placeholder, action } = props
    
    return (
        <React.Fragment>
            <Input
                type={"text"}
                placeholder={placeholder}
                maxLength="100"
                onChange={
                    event => {
                        const newValue = event.target.value
                        action(newValue)
                    }
                }
            />
        </React.Fragment>
    )
}

export default InputComponent