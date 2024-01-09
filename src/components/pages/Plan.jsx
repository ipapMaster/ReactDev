import React from "react";

export default class Plan extends React.Component {

    constructor(props) {
        super(props)
        // состояния
        this.state = {
            age: 30,
            city: 'London'
        }
    }

    // возвращает JSX элемент
    render() {
        return (
            <>
                <span>Welcome, {this.props.testProps}! Вам {this.state.age} лет. You're from {this.state.city}</span><br />
                <button onClick={() => this.setState({ age: 35 })}>Изменить возраст</button>
            </>
        )
    }
}