import React from "react";
import Footer from "../views/global/Footer";
import DataList from "../views/local/DataList";

export default class Plan extends React.Component {

    constructor(props) {
        super(props)
    }

    // возвращает JSX элемент
    render() {
        return (
            <>
                <span>страница планирования</span>
                <DataList viewType={'расход'} data={this.props.statData} />
                <Footer />
            </>
        )
    }
}