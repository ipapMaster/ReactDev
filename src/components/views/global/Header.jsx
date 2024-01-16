import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "../../../styles/styles";
import HOCButton from "../../comps/HOCHeaderButton";
import Button from "../../comps/Button";

const HOCButtonComponent = HOCButton(Button)

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
    const [inner, setInner] = useState(0)

    return (
        <React.Fragment>
            <HeaderContainer>
                <HeaderCSS.Logo>FINMANAGER</HeaderCSS.Logo>
                <HeaderCSS.MenuContainer>
                    <HOCButtonComponent inner={inner} onClick={() => setInner(prev => prev + 1)} />
                    <button onClick={() => navigate('/main')} style={buttonCSS}>Главная</button>
                    <button onClick={() => navigate('/stat/расход')} style={buttonCSS}>Статистика</button>
                    <button onClick={() => navigate('/plan')} style={buttonCSS}>Планирование</button>
                </HeaderCSS.MenuContainer>
            </HeaderContainer>
        </React.Fragment>
    )
}

export default Header