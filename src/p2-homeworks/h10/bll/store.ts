import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";
import theme from "../../h12/bll/themeReducer";

const reducers = combineReducers({
    loading: loadingReducer,
    theme,
})

const store = createStore(reducers)

export default store

export type AppStateType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
