import {PeopleType} from "../HW8";

export const homeWorkReducer = (state: PeopleType, action: HomeWorkActionsType): PeopleType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            switch (action.payload) {
                case "up":
                    return [...state].sort((a, b) => a.name > b.name ? 1 : -1)
                case "down":
                    return [...state].sort((a, b) => a.name < b.name ? 1 : -1)
                default:
                    return state
            }
        }
        case 'check': {
            // need to fix
            return state.filter(f => f.age >= action.payload)
        }
        default:
            return state
    }
}

type HomeWorkActionsType = SortActionType | CheckActionType

type SortActionType = ReturnType<typeof SortAC>
export const SortAC = (payload: 'up' | 'down') => ({
    type: 'sort',
    payload
} as const)

type CheckActionType = ReturnType<typeof CheckAC>
export const CheckAC = (payload: number) => ({
    type: 'check',
    payload
} as const)