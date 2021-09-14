import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from '../h4/common/c2-SuperButton/SuperButton.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    activeFilter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => props.setFilter('all') // need to fix
    const setHigh = () => props.setFilter('high')
    const setMiddle = () => props.setFilter('middle')
    const setLow = () => props.setFilter('low')

    const allClassName = props.activeFilter === 'all' ? s.active : ''
    const highClassName = props.activeFilter === 'high' ? s.active : ''
    const middleClassName = props.activeFilter === 'middle' ? s.active : ''
    const lowClassName = props.activeFilter === 'low' ? s.active : ''

    return (
        <div>

            {mappedAffairs}

            <SuperButton className={allClassName} onClick={setAll}>All</SuperButton>
            <SuperButton className={highClassName} onClick={setHigh}>High</SuperButton>
            <SuperButton className={middleClassName} onClick={setMiddle}>Middle</SuperButton>
            <SuperButton className={lowClassName} onClick={setLow}>Low</SuperButton>
        </div>
    )
}

export default Affairs
