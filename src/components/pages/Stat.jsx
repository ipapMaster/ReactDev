import React, { useState } from "react";
import DataList from "../views/local/DataList";
import DataChart from "../views/local/DataChart";

const Stat = (props) => {

    const { statData } = props
    const [isShowChart, setIsShowChart] = useState(true)

    return (
        <React.Fragment>
            <DataList setShow={setIsShowChart} data={statData} />
            <DataChart show={isShowChart} data={statData} />
        </React.Fragment>
    )
}

export default Stat