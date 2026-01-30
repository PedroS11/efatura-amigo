import axios from "axios";
import {GetCategoryResponse} from "./types";
import {CATEGORY_BUTTONS_MAPPING} from "../contentScript/constants";

export const searchNif = (nif: string): Promise<CATEGORY_BUTTONS_MAPPING | undefined> => {
    return axios.get(`https://g5o95bvqaj.execute-api.eu-west-2.amazonaws.com/category/${nif}`)
        .then((response) => {
            const result: GetCategoryResponse = response.data
            return result?.id
        // @ts-ignore
        }).catch((error) => {
            console.error("Error searching NIF", nif, error.message)
            return undefined
        })
}