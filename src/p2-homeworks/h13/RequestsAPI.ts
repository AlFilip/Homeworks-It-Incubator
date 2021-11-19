import axios, {AxiosResponse} from "axios"

type bodyType = { success: boolean }

type postResponseType = {
    errorText: string
    info: string
    yourBody: bodyType
}

export const requestApi = {
    makePostReq: (success: boolean) => {
        return axios.post<any, AxiosResponse<postResponseType>, bodyType>
        ('https://neko-cafe-back.herokuapp.com/auth/test', {success})
    }
}