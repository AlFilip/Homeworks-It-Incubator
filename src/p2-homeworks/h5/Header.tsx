import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from "./Header.module.css"

function Header() {
    const [isHover, setIsHover] = useState<boolean>(false)
    const toggleHover = () => setIsHover(!isHover)
    const headerClassName = `${s.header} ${isHover ? s.hovered : ''}`

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
