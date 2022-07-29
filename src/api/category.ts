import Product from "../model/product";
import instance from "./instance";

type Category = {
    name: String,
    id: Number
}

export const createCategory = (category : Category) => {
    const url = "/category"
    return instance.post(url, category)
}
export const getCategory = () => {
    const url = "/category"
    return instance.get(url)
}