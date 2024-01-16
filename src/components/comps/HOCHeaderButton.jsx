import React from "react";

const HOCButton = (ButtonComponent) => {
    return (props) => {


        const onClick = () => {
            props.onClick()
        }

        return <ButtonComponent {...props} onClick={onClick} />
    }
}

export default HOCButton