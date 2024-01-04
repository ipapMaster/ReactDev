import React from "react";
import DataList from "../views/local/DataList";

const Stat = (props) => {

    const { statData } = props

    return (
        <React.Fragment>
            <DataList data={statData} />
        </React.Fragment>
    )
}

export default Stat