import React from 'react'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id)// need to fix

    return (
        <div>
            {props.affair.name}

            <SuperButton onClick={deleteCallback}>X</SuperButton>
        </div>
    )
}

export default Affair
