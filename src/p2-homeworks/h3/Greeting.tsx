import React from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    keyPress: (e: React.KeyboardEvent) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, keyPress} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ''// need to fix with (?:)
    // const isButtonDisabled = !!inputClass || !name.trim()
    const isButtonDisabled = !!inputClass || !name

    return (
        <div className={s.greeting}>
            <SuperInputText value={name} error={error} onChange={setNameCallback} onKeyPress={keyPress} className={inputClass}/>
            {/*<span>{error}</span>*/}
            <div>
                <SuperButton disabled={isButtonDisabled} onClick={addUser}>add</SuperButton>
                <span>{totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting
