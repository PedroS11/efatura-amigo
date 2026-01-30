import {CATEGORY_BUTTONS_MAPPING} from "../contentScript/constants";

export type GetCategoryResponse = ValidGetCategoryResponse

interface ValidGetCategoryResponse {
    id?: CATEGORY_BUTTONS_MAPPING;
    name?: string;
}