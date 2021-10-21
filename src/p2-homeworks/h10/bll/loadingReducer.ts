const initState = {
    loading: false
}
export type loadingType = typeof initState

export const loadingReducer = (state = initState, action: loadingActionType): loadingType => { // fix any
    switch (action.type) {
        case 'SET_LOADING': {
            return {
                ...state,
                loading: action.loading,
            }
        }
        default:
            return state
    }
}

type loadingActionType = ReturnType<typeof loadingAC>
export const loadingAC = (loading: boolean) => ({
    type: 'SET_LOADING',
    loading
} as const) // fix any