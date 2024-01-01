import React from "react";
import css from "../../../styles/styles";

const { HeaderContainer, HeaderCSS } = css

const buttonCSS = {
    display: 'block',
    padding: '10px 14px 12px',
    borderRadius: '6px',
    backgroundColor: '#BOF347',
    cursor: 'pointer',
    marginLeft: '10px'
}

const Header = () => {
    return (
        <React.Fragment>
            <HeaderContainer>
                <HeaderCSS.Logo>FINMANAGER</HeaderCSS.Logo>
                <HeaderCSS.MenuContainer>
                    <button style={buttonCSS}>Главная</button>
                    <button style={buttonCSS}>Статистика</button>
                    <button style={buttonCSS}>Планирование</button>
                </HeaderCSS.MenuContainer>
            </HeaderContainer>
        </React.Fragment>
    )
}

export default Header