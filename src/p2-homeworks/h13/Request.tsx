import React, {ChangeEventHandler, useState} from "react";
import {requestApi} from "./RequestsAPI";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Request.module.css'

export const Request = () => {
    const [checked, setChecked] = useState(false)
    const [requestBody, setRequestBody] = useState('')
    const [isError, setIsError] = useState(false)
    const onCheckboxClickHandler: ChangeEventHandler<HTMLInputElement> = e => {
        setChecked(e.currentTarget.checked)
    }


    const onButtonClickHandler = () => {
        requestApi.makePostReq(checked)
            .then(res => {
                setRequestBody(res.data.errorText)

                isError
                && setIsError(false)
            })
            .catch(err => {
                setRequestBody(err.response.data.errorText)

                !isError
                && setIsError(true)
            })
    }

    return (
        <div>
            <SuperCheckbox checked={checked} onChange={onCheckboxClickHandler}/>
            <SuperButton onClick={onButtonClickHandler}>Ok</SuperButton>
            <div className={isError ? s.error : ''}>
                {requestBody}
            </div>
        </div>
    )
}
