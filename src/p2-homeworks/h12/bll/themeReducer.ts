export type themeType = 'dark' | 'red' | 'blue'

const initState = {
    theme: 'dark' as themeType
};

type themeStateType = typeof initState

const themeReducer = (state = initState, action: changeThemeType): themeStateType => { // fix any
    switch (action.type) {
        case "SET_THEME": {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

export type changeThemeType = ReturnType<typeof changeThemeC>
export const changeThemeC = (theme: themeType) => ({
    type: 'SET_THEME',
    theme
} as const); // fix any


export default themeReducer