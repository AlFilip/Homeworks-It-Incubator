import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from "./Header.module.css"
import {useSelector} from "react-redux";
import {AppStateType} from "../h10/bll/store";
import {themeType} from "../h12/bll/themeReducer";

function Header() {
    const [isHover, setIsHover] = useState<boolean>(false)
    const theme = useSelector<AppStateType, themeType>(state => state.theme.theme)
    const toggleHover = () => setIsHover(!isHover)
    const headerClassName = `${s.header} ${isHover ? s.hovered : ''} ${s[theme]}`

    return (
        <div className={headerClassName} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <NavLink activeClassName={s.activeLink} to={'pre-junior'}>PreJunior</NavLink>
            <NavLink activeClassName={s.activeLink} to={'junior'}>Junior</NavLink>
            <NavLink activeClassName={s.activeLink} to={'junior-plus'}>Junior++</NavLink>
            <span className={s.dots}>&#8285;</span>
        </div>
    )
}

export default Header
