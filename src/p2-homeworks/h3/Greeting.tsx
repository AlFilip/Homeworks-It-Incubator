import React from 'react'
import s from './Greeting.module.css'

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
    const isButtonDisabled = !!inputClass || !name.trim()
    return (
        <div>
            <input value={name} onChange={setNameCallback} onKeyPress={keyPress} className={inputClass}/>
            <span>{error}</span>
            <button disabled={isButtonDisabled} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
