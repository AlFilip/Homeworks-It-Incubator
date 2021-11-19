import React from 'react'
import s from './App.module.css'
import HW5 from '../../../p2-homeworks/h5/HW5';
import {useSelector} from "react-redux";
import {AppStateType} from "../../../p2-homeworks/h10/bll/store";
import {themeType} from "../../../p2-homeworks/h12/bll/themeReducer";
import themeStyle from '../../../p2-homeworks/h12/HW12.module.css'

function App() {
    const theme = useSelector<AppStateType, themeType>(state => state.theme.theme)

    return (
        <div className={s.App + ' ' + themeStyle[theme] + ' ' + themeStyle[`${theme}-text`]}>
            {/*<HW1/>*/}
            {/*<HW2/>*/}
            {/*<HW3/>*/}
            {/*<HW4/>*/}
            <HW5/>

        </div>
    )
}

export default App
