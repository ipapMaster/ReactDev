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

    // shouldComponentUpdate(props, state) {
    //     // return false - если обновлять компоненты не требуется
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     // вызывается сразу после срабатывания render
    //     // выполнение запросов к серверу (state менять нельзя)
    // }

    // componentDidMount() {
    //     // если всё отрендерилось при выполнении запросов к серверу
    //     // компонент смонтирован (state менять нельзя)
    // }

    // componentWillUnmount() {
    //     // "уборка" за компонентом (очистка памяти  и закрытия "висящих" процессов)
    // }

    // возвращает JSX элемент
    render() {
        return (
            <>
                <span>Welcome, {this.props.testProps}! Вам {this.state.age} лет. You're from {this.state.city}</span><br />
                <button onClick={() => this.setState((prevState, props) => ({ age: prevState.age + 5 }))}>Изменить возраст</button>
            </>
        )
    }
}