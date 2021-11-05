import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

import s from './SuperSelect.module.css'
import themeStyle from '../../../h12/HW12.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../../h10/bll/store";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: JSX.Element[] = options
        ? options.map((m, i) => (
            <option key={m + '-' + i} value={m}>
                {m}
            </option>
        )) : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption
        && onChangeOption(e.currentTarget.value)// onChange, onChangeOption

        onChange
        && onChange(e)
    }

    return (
        <select className={s.select} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
