import React, {Dispatch} from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../h10/bll/store";
import {changeThemeC, changeThemeType, themeType} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

const themes: themeType[] = ['dark', 'red', 'blue'];

function HW12() {
    const theme = useSelector<AppStateType, themeType>(state => state.theme.theme); // useSelector
    const dispatch = useDispatch<Dispatch<changeThemeType>>()
    // useDispatch, onChangeCallback

    const onChangeCallBack = (theme: themeType) => {
        dispatch(changeThemeC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12

                <SuperSelect options={themes} onChangeOption={onChangeCallBack}/>
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
