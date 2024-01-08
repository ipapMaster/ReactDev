import React from "react";
import { useNavigate } from "react-router-dom";
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

    const navigate = useNavigate()

    return (
        <React.Fragment>
            <HeaderContainer>
                <HeaderCSS.Logo>FINMANAGER</HeaderCSS.Logo>
                <HeaderCSS.MenuContainer>
                    <button onClick={() => navigate('/main')} style={buttonCSS}>Главная</button>
                    <button onClick={() => navigate('/stat/расход')} style={buttonCSS}>Статистика</button>
                    <button onClick={() => navigate('/plan')} style={buttonCSS}>Планирование</button>
                </HeaderCSS.MenuContainer>
            </HeaderContainer>
        </React.Fragment>
    )
}

export default Header