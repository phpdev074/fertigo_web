import axios from "axios";
import { BASE_URL, GET, GET_PROVIDER, POST, PROVIDER } from "../api";

export const CreateProvider = (payload: any) =>
    axios({
        baseURL: BASE_URL,
        method: POST,
        url: PROVIDER,
        data: payload,
    });

export const GetProviders = () =>
    axios({
        baseURL: BASE_URL,
        method: GET,
        url: GET_PROVIDER,
    })    