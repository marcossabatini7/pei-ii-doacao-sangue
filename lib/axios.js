import { Axios } from "axios";

const baseURL = process.env.API_URL ?? 'http://10.3.152.15:8000'

export const axios = new Axios({
    baseURL
})
