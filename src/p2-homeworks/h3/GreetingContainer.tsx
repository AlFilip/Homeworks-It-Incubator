import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>): void => { // need to fix any
        setName(e.currentTarget.value) // need to fix
        if (error) setError('')
    }

    const greetUser = (trimName: string): void => alert(`Hi, ${trimName}`)

    const addUser = () => {
        const trimName = name.trim()
        if (trimName) {
            greetUser(trimName) // need to fix
            addUserCallback(trimName)
        } else {
            setError("Name can't be empty (Spaces are not counted)")
        }
        setName('')
    }
    const keyPress = (e: React.KeyboardEvent): void => {
        if (e.key === 'Enter') addUser()
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            keyPress={keyPress}
        />
    )
}

export default GreetingContainer