import React from 'react'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: any // need to fix any
    deleteAffairCallback: any // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id)// need to fix

    return (
        <div>
            // show some text

            <SuperButton onClick={deleteCallback}>X</SuperButton>
        </div>
    )
}

export default Affair
