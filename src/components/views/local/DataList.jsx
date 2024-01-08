import React from "react";
import { useNavigate } from "react-router-dom";
import css from "../../../styles/dataList";

const { DataContainer, ContentLine, ContentCell, ButtonsLine, ButtonItem } = css


const DataList = (props) => {

    const { data = [], setShow, viewType } = props
    const navigate = useNavigate()
    const filterData = data.filter(item => item.split('::')[1] === viewType)
    const filterDataSum = data.filter(item => item.split('::')[1] === viewType).reduce((summ, item) => {
        return summ + +(item.split('::')[0])
    }, 0)
    const filterDataDelta = data.reduce((summ, item) => {
        if (item.split('::')[1] === 'доход') {
            return summ + +(item.split('::')[0])
        } else {
            return summ - +(item.split('::')[0])
        }
    }, 0)

    const reduceDataType1 = () => {
        navigate('/stat/доход')
        setShow(false)
    }
    const reduceDataType2 = () => {
        navigate('/stat/расход')
        setShow(true)
    }
    const reduceDataType3 = () => navigate('/stat/общее')

    // Не очень хорошая практика (код дублируется)

    return (
        <React.Fragment>
            <ButtonsLine>
                <ButtonItem style={{ color: viewType === 'доход' ? 'red' : '' }} onClick={reduceDataType1}>доходы</ButtonItem>
                <ButtonItem style={{ color: viewType === 'расход' ? 'red' : '' }} onClick={reduceDataType2}>расходы</ButtonItem>
                <ButtonItem style={{ color: viewType === 'общее' ? 'red' : '' }} onClick={reduceDataType3}>общее</ButtonItem>
            </ButtonsLine>
            <DataContainer>
                {filterData.length > 0 && <React.Fragment>
                    {filterData.map((item, index) => {
                        return (
                            <ContentLine key={index}>
                                <ContentCell width={"20%"}>{item.split('::')[0]}</ContentCell>
                                <ContentCell width={"20%"}>{item.split('::')[1]}</ContentCell>
                                <ContentCell width={"60%"}>{item.split('::')[2]}</ContentCell>
                            </ContentLine>
                        )
                    })}
                    <ContentLine>
                        <ContentCell style={{ fontWeight: "bold" }} width={"20%"}>{filterDataSum}</ContentCell>
                        <ContentCell width={"20%"}>---</ContentCell>
                        <ContentCell width={"60%"}>---</ContentCell>
                    </ContentLine>
                </React.Fragment>}
                {filterData.length === 0 && <React.Fragment>
                    {data.map((item, index) => {
                        return (
                            <ContentLine key={index}>
                                <ContentCell width={"20%"}>{item.split('::')[0]}</ContentCell>
                                <ContentCell width={"20%"}>{item.split('::')[1]}</ContentCell>
                                <ContentCell width={"60%"}>{item.split('::')[2]}</ContentCell>
                            </ContentLine>
                        )
                    })}
                    <ContentLine>
                        <ContentCell style={{ fontWeight: "bold" }} width={"20%"}>{filterDataDelta}</ContentCell>
                        <ContentCell width={"20%"}>---</ContentCell>
                        <ContentCell width={"60%"}>---</ContentCell>
                    </ContentLine>
                </React.Fragment>}
            </DataContainer>
        </React.Fragment>
    )
}

export default DataList